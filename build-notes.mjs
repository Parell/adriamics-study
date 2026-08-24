import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = __dirname;
const notesRoot = __dirname;
const manifestPath = path.join(notesRoot, 'source', 'manifest.js');
const conceptDagSourcePath = path.join(notesRoot, 'source', 'paths.json');
// Printed worksheets clone equations while hiding MathJax's page-level cache,
// so every SVG needs to carry its own glyph definitions.
const MATHJAX_SVG_FONT_CACHE = 'local';
const MATHJAX_SVG_BLACKER = 0;
const MATHJAX_ASSET_PATH = 'vendor/mathjax/mathjax.min.js';

function renderMathJaxConfig(outputDir, assetVersions) {
  const mathJaxHref = `${getRelativeNotesAssetHref(outputDir, MATHJAX_ASSET_PATH)}?v=${assetVersions.mathjax}`;
  return `
  <script>
    let resolveNotesMathJaxReady;
    window.__NOTES_MATHJAX_READY = new Promise((resolve) => {
      resolveNotesMathJaxReady = resolve;
    });

    window.MathJax = {
      tex: {
        inlineMath: [['\\\\(', '\\\\)'], ['$', '$']],
        displayMath: [['$$', '$$']],
        packages: { '[+]': ['ams'] }
      },
      svg: {
        fontCache: '${MATHJAX_SVG_FONT_CACHE}',
        blacker: ${MATHJAX_SVG_BLACKER}
      },
      startup: {
        ready() {
          window.MathJax.startup.defaultReady();
          window.MathJax.startup.promise.then(() => {
            window.__NOTES_MATHJAX_INITIAL_TYPESET_COMPLETE = true;
            resolveNotesMathJaxReady();
            window.dispatchEvent(new Event('notes:mathjax-ready'));
          }, () => {
            window.__NOTES_MATHJAX_INITIAL_TYPESET_COMPLETE = false;
            resolveNotesMathJaxReady();
            window.dispatchEvent(new Event('notes:mathjax-ready'));
          });
        }
      }
    };
  </script>
  <script defer src="${mathJaxHref}"></script>`;
}

function renderAsyncStylesheet(href, { nonBlocking = false } = {}) {
  const escapedHref = escapeHtml(href);
  if (nonBlocking) {
    return `<link rel="preload" href="${escapedHref}" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="${escapedHref}" /></noscript>`;
  }

  return `<link rel="stylesheet" href="${escapedHref}" />`;
}

function repairMojibake(text) {
  return String(text ?? '')
    .replace(/â€œ/g, '“')
    .replace(/â€/g, '”')
    .replace(/â€”/g, '—')
    .replace(/â€“/g, '–')
    .replace(/â€™/g, '’')
    .replace(/Â°/g, '°')
    .replace(/Â·/g, '·')
    .replace(/Ã´/g, 'ô');
}
const siteOrigin = 'https://adriamics.com';
const githubRepoUrl = 'https://github.com/Parell/adriamics-study';
const githubRepoBranch = 'master';
const notesThemeStorageKey = 'adriamics-study:contrast-mode';
const homeStructureId = 'home';
const practiceLevelLabels = new Map([
  [1, 'Direct'],
  [2, 'Integrated'],
  [3, 'Applied'],
  [4, 'Challenge'],
]);
const practiceExamDefinitions = Object.freeze({
  'exam-i': { key: 'exam-i', label: 'Exam I', aliases: ['i', '1', 'exam i', 'exam 1', 'exam-i'] },
  'exam-ii': { key: 'exam-ii', label: 'Exam II', aliases: ['ii', '2', 'exam ii', 'exam 2', 'exam-ii'] },
  final: { key: 'final', label: 'Final', aliases: ['final', 'exam final'] },
});
const practiceExamByAlias = new Map(
  Object.values(practiceExamDefinitions).flatMap((definition) => definition.aliases.map((alias) => [alias, definition])),
);
const lastModifiedFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});
const blameLastModifiedCache = new Map();
const shortlogContributorsCache = new Map();
const practiceSkillLinks = {
  'source/math/algebra/algebra.md': {
    Fractions: '#fractions-in-algebra',
    'Linear Equations': '#one-variable-linear-equations',
    'Inverse Operations': '#one-variable-linear-equations',
    'Like Terms': '#like-terms',
    'Distributing and factoring': '#distributing-and-factoring',
    'Order of Operations': '#order-of-operations',
    'Exponent Laws': '#exponent-laws',
    'Systems of equations': '#two-linear-equations-in-two-variables',
    Elimination: '#example-elimination',
    'Common factoring methods': '#common-factoring-methods',
    'Zero-product property': '#zero-product-property',
    'Evaluating functions': '#evaluating-functions',
    Functions: '#9-functions',
    'Sets of numbers': '#sets-of-numbers',
    'Interval notation': '#interval-notation',
  },
};

function toPosix(inputPath) {
  return String(inputPath).split(path.sep).join('/');
}

function escapeHtml(text) {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeRegExp(text) {
  return String(text ?? '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function trimMarkdownText(text) {
  return String(text ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, ' $1 ')
    .replace(/(?<!\!)\[([^\]]+)\]\(([^)]+)\)/g, ' $1 ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s{0,3}#{1,6}\s+/gm, ' ')
    .replace(/^\s{0,3}>\s?/gm, ' ')
    .replace(/^\s*[-*+]\s+/gm, ' ')
    .replace(/^\s*\d+\.\s+/gm, ' ')
    .replace(/\|/g, ' ')
    .replace(/[*~$]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitFrontmatter(markdown) {
  const text = String(markdown ?? '').replace(/^\uFEFF/, '');
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

  if (!match) {
    return { metadata: null, body: text };
  }

  return {
    metadata: parseFrontmatter(match[1]),
    body: text.slice(match[0].length),
  };
}

function parseFrontmatterValue(value) {
  const trimmed = String(value ?? '').trim();

  if (trimmed === '[]') {
    return [];
  }

  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(1, -1).trim();

    if (!inner) {
      return [];
    }

    const items = [];
    let current = '';
    let quote = null;

    for (let index = 0; index < inner.length; index += 1) {
      const character = inner[index];

      if (quote) {
        if (character === quote && inner[index - 1] !== '\\') {
          quote = null;
        }

        current += character;
        continue;
      }

      if (character === '"' || character === "'") {
        quote = character;
        current += character;
        continue;
      }

      if (character === ',') {
        items.push(parseFrontmatterValue(current));
        current = '';
        continue;
      }

      current += character;
    }

    if (current.trim()) {
      items.push(parseFrontmatterValue(current));
    }

    return items;
  }

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"'))
    || (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  if (/^[+-]?(?:\d+\.?\d*|\.\d+)$/.test(trimmed)) {
    return Number(trimmed);
  }

  return trimmed;
}

function parseFrontmatter(block) {
  const metadata = {};
  let currentKey = null;

  block.split(/\r?\n/).forEach((line) => {
    if (!line.trim()) {
      return;
    }

    const listItemMatch = line.match(/^\s*-\s+(.*)$/);

    if (listItemMatch && currentKey) {
      if (!Array.isArray(metadata[currentKey])) {
        metadata[currentKey] = metadata[currentKey] ? [metadata[currentKey]] : [];
      }

      metadata[currentKey].push(parseFrontmatterValue(listItemMatch[1]));
      return;
    }

    const fieldMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

    if (!fieldMatch) {
      currentKey = null;
      return;
    }

    const [, rawKey, rawValue] = fieldMatch;
    const key = rawKey.trim();
    const value = rawValue.trim();

    currentKey = key;
    metadata[key] = value ? parseFrontmatterValue(value) : [];
  });

  return metadata;
}

function buildGithubBlobUrl(relativePath) {
  return `${githubRepoUrl}/blob/${githubRepoBranch}/${toPosix(relativePath)}`;
}

function buildContributeIssueUrl(relativeSourcePath, title) {
  return `${githubRepoUrl}/issues/new?template=contribute.yml&page_path=${encodeURIComponent(relativeSourcePath)}&title=${encodeURIComponent(`[Contribute]: ${title}`)}`;
}

function buildGithubBlameUrl(sourceUrl) {
  return String(sourceUrl ?? '').replace('/blob/', '/blame/');
}

function formatLastModifiedDate(lastModifiedDate) {
  if (!lastModifiedDate) {
    return '';
  }

  return lastModifiedFormatter.format(lastModifiedDate);
}

function renderSourceLinks(sourceUrl, lastModifiedDate = null) {
  if (!sourceUrl) {
    return '';
  }

  const lastModifiedLabel = formatLastModifiedDate(lastModifiedDate);

  if (!lastModifiedLabel) {
    return `<a class="notes-inline-link viewer-source-jump" href="${escapeHtml(buildGithubBlameUrl(sourceUrl))}" target="_blank" rel="noreferrer" data-notes-nav-item>GitHub Changelog</a>`;
  }

  return `<a class="notes-inline-link viewer-source-jump" href="${escapeHtml(buildGithubBlameUrl(sourceUrl))}" target="_blank" rel="noreferrer" data-notes-nav-item>GitHub Changelog</a> - <time datetime="${escapeHtml(lastModifiedDate.toISOString())}">Last modified ${escapeHtml(lastModifiedLabel)}</time>`;
}

function renderMetadataLine(className, sourceUrl = null, lastModifiedDate = null) {
  if (!sourceUrl) {
    return '';
  }

  return `<p class="${className}">${renderSourceLinks(sourceUrl, lastModifiedDate)}</p>`;
}

function renderContributorList(contributors) {
  if (!contributors.length) {
    return '';
  }

  const contributorItems = contributors.map(({ count, name, email }) => {
    const copyText = email || name;

    return `<li class="viewer-contributors__item"><span class="viewer-contributors__count">${escapeHtml(String(count))}</span> <button type="button" class="viewer-contributors__name" data-copy-text="${escapeHtml(copyText)}" data-copy-label="${escapeHtml(name)}" aria-label="Copy contributor email ${escapeHtml(copyText)}" title="Copy email">${escapeHtml(name)}</button></li>`;
  }).join('');

  return `<div class="viewer-contributors-block"><ul class="viewer-contributors">${contributorItems}</ul></div>`;
}

function getSourceMetadata(relativeSourcePath) {
  return {
    sourceUrl: buildGithubBlobUrl(relativeSourcePath),
    lastModifiedDate: getBlameLastModifiedDate(relativeSourcePath),
    contributorsHtml: renderContributorList(getShortlogContributors(relativeSourcePath)),
  };
}

function getSubjectRoutePath(notePath) {
  const normalizedPath = toPosix(path.dirname(notePath)).replace(/^notes\//, '');

  if (normalizedPath.startsWith('source/')) {
    return normalizedPath.slice('source/'.length);
  }

  return normalizedPath;
}

function getNoteSourcePath(notePath) {
  const normalized = toPosix(notePath).replace(/^notes\//, '');

  if (normalized.startsWith('source/')) {
    return path.join(notesRoot, normalized);
  }

  return path.join(notesRoot, 'source', normalized);
}

function getLastModifiedDateFromBlame(blameOutput) {
  const matches = String(blameOutput ?? '').matchAll(/^author-time\s+(\d+)$/gm);
  let latestTimestamp = null;

  for (const match of matches) {
    const timestamp = Number(match[1]);

    if (!Number.isFinite(timestamp)) {
      continue;
    }

    if (latestTimestamp === null || timestamp > latestTimestamp) {
      latestTimestamp = timestamp;
    }
  }

  if (latestTimestamp === null) {
    return null;
  }

  return new Date(latestTimestamp * 1000);
}

function getBlameLastModifiedDate(relativeSourcePath) {
  const cacheKey = toPosix(relativeSourcePath);

  if (blameLastModifiedCache.has(cacheKey)) {
    return blameLastModifiedCache.get(cacheKey);
  }

  let lastModifiedDate = null;

  try {
    const blameOutput = execFileSync(
      'git',
      ['blame', '--line-porcelain', '--', cacheKey],
      {
        cwd: repoRoot,
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024,
        stdio: ['ignore', 'pipe', 'ignore'],
      },
    );
    lastModifiedDate = getLastModifiedDateFromBlame(blameOutput);
  } catch {
    lastModifiedDate = null;
  }

  blameLastModifiedCache.set(cacheKey, lastModifiedDate);
  return lastModifiedDate;
}

function parseShortlogContributors(shortlogOutput) {
  return String(shortlogOutput ?? '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^(\d+)\s+(.+?)\s+<([^>]+)>$/) || line.match(/^(\d+)\s+(.+)$/);

      if (!match) {
        return null;
      }

      const [, countText, name, email = ''] = match;

      return {
        count: Number(countText),
        name: name.trim(),
        email: email.trim(),
      };
    })
    .filter(Boolean);
}

function getShortlogContributors(relativeSourcePath) {
  const cacheKey = toPosix(relativeSourcePath);

  if (shortlogContributorsCache.has(cacheKey)) {
    return shortlogContributorsCache.get(cacheKey);
  }

  let contributors = [];

  try {
    const shortlogOutput = execFileSync(
      'git',
      ['shortlog', '-sne', 'HEAD', '--', cacheKey],
      {
        cwd: repoRoot,
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024,
        stdio: ['ignore', 'pipe', 'ignore'],
      },
    );
    contributors = parseShortlogContributors(shortlogOutput);
  } catch {
    contributors = [];
  }

  shortlogContributorsCache.set(cacheKey, contributors);
  return contributors;
}

function getSubjectOutputDir(notePath) {
  return path.join(notesRoot, getSubjectRoutePath(notePath));
}

function getPracticeOutputDir(notePath) {
  return path.join(getSubjectOutputDir(notePath), 'practice');
}

function getPracticeUrl(notePath) {
  return `${getNoteUrl(notePath)}practice/`;
}

function getConceptNoteUrlFromId(nodeId) {
  const normalizedId = String(nodeId ?? '').trim();
  const separatorIndex = normalizedId.indexOf('.');

  if (separatorIndex < 0) {
    return '';
  }

  const domain = normalizedId.slice(0, separatorIndex).trim();
  const slug = normalizedId.slice(separatorIndex + 1).trim();

  if (!domain || !slug) {
    return '';
  }

  if (domain === 'math' && slug === 'multivariable-calculus') {
    return '/study/math/multivariable-calculus/multivariable-differential-calculus/';
  }

  if (domain === 'math' && slug === 'multiple-integrals') {
    return '/study/math/multivariable-calculus/multiple-integrals/';
  }

  return `/study/${domain}/${slug}/`;
}

function loadConceptDagNode(entry, nodeId, index) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    throw new Error(`Concept DAG node "${nodeId || index + 1}" must be an object.`);
  }

  const title = String(entry.title ?? '').trim();
  const requires = entry.requires && typeof entry.requires === 'object' && !Array.isArray(entry.requires)
    ? entry.requires
    : {};
  const hard = Array.isArray(requires.hard) ? requires.hard.map((item) => String(item ?? '').trim()).filter(Boolean) : [];
  const soft = Array.isArray(requires.soft) ? requires.soft.map((item) => String(item ?? '').trim()).filter(Boolean) : [];

  return {
    id: nodeId,
    title,
    requires: {
      hard,
      soft,
    },
  };
}

async function loadConceptDag() {
  const conceptDagData = JSON.parse(await fs.readFile(conceptDagSourcePath, 'utf8'));

  if (!conceptDagData || typeof conceptDagData !== 'object' || Array.isArray(conceptDagData)) {
    throw new Error('Could not load concept DAG.');
  }

  const nodesObject = conceptDagData.nodes;

  if (!nodesObject || typeof nodesObject !== 'object' || Array.isArray(nodesObject)) {
    throw new Error('Concept DAG must include a nodes object.');
  }

  const nodes = Object.entries(nodesObject).map(([nodeId, entry], index) => loadConceptDagNode(entry, nodeId, index));
  const nodeIds = new Set(nodes.map((node) => node.id));

  for (const node of nodes) {
    for (const dependencyId of [...node.requires.hard, ...node.requires.soft]) {
      if (!nodeIds.has(dependencyId)) {
        throw new Error(`Concept DAG node "${node.id}" references missing prerequisite "${dependencyId}".`);
      }
    }
  }

  return {
    version: conceptDagData.version ?? 1,
    id: String(conceptDagData.id ?? '').trim(),
    description: String(conceptDagData.description ?? '').trim(),
    nodes,
  };
}

function parsePracticeProblemId(id, sourcePath, problemIndex) {
  const problemId = String(id).trim();
  const match = problemId.match(/^(.*?)-(\d)(\d+)$/);

  if (!match) {
    throw new Error(`Practice problem id "${problemId}" in ${sourcePath} (problem ${problemIndex + 1}) must end with a one-digit level followed by a position, like "algebra-14".`);
  }

  const level = Number.parseInt(match[2], 10);
  const position = Number.parseInt(match[3], 10);

  if (!Number.isFinite(level) || level <= 0 || !Number.isFinite(position) || position < 0) {
    throw new Error(`Practice problem id "${problemId}" in ${sourcePath} (problem ${problemIndex + 1}) must encode a positive level and a non-negative position.`);
  }

  return { level, position };
}

function getPracticeLevelLabel(level) {
  const parsedLevel = Number.parseInt(String(level).trim(), 10);
  return practiceLevelLabels.get(parsedLevel) ?? 'Practice problems';
}

function resolvePracticeSkillHref(notePath, skillName) {
  const normalizedNotePath = toPosix(notePath).replace(/^notes\//, '');
  const sourceNotePath = normalizedNotePath.startsWith('source/')
    ? normalizedNotePath
    : normalizedNotePath;
  const skillMap = practiceSkillLinks[sourceNotePath] ?? {};
  const label = String(skillName).trim();

  if (skillMap[label]) {
    return `${getNoteUrl(notePath)}${skillMap[label]}`;
  }

  return `${getNoteUrl(notePath)}#${slugifyHeading(label)}`;
}

function renderPracticeSkills(notePath, skills) {
  const items = skills.map((skill) => {
    const label = String(skill).trim();
    const href = resolvePracticeSkillHref(notePath, label);
    return `<li><a class="notes-inline-link practice-problem__skill" href="${escapeHtml(href)}" data-notes-nav-item>${escapeHtml(label)}</a></li>`;
  }).join('');

  return `<ul class="practice-problem__skills">${items}</ul>`;
}

function extractPracticeReferenceSection(markdown) {
  const lines = String(markdown ?? '').replace(/\r\n/g, '\n').split('\n');
  const matches = [];
  lines.forEach((line, index) => {
    const match = line.match(/^##\s+(.+?)\s*$/);
    if (match && /formula|reference|quick reference|summary/i.test(match[1])) {
      matches.push({ index, heading: match[1].trim() });
    }
  });

  const selected = matches.at(-1);
  if (!selected) return null;
  let end = lines.length;
  for (let index = selected.index + 1; index < lines.length; index += 1) {
    if (/^##\s+/.test(lines[index])) {
      end = index;
      break;
    }
  }

  return {
    heading: selected.heading,
    markdown: lines.slice(selected.index + 1, end).join('\n').trim(),
  };
}

function groupPracticeProblems(problems) {
  const groups = new Map();

  problems.forEach((problem) => {
    const level = Number.parseInt(String(problem.level).trim(), 10);
    const normalizedLevel = Number.isFinite(level) ? level : 0;
    const position = Number.parseInt(String(problem.position).trim(), 10);
    const normalizedPosition = Number.isFinite(position) ? position : 0;

    if (!groups.has(normalizedLevel)) {
      groups.set(normalizedLevel, {
        level: normalizedLevel,
        label: getPracticeLevelLabel(normalizedLevel),
        items: [],
      });
    }

    groups.get(normalizedLevel).items.push({ problem, position: normalizedPosition });
  });

  return [...groups.values()]
    .sort((left, right) => left.level - right.level)
    .map((group) => ({
      ...group,
      items: group.items.sort((left, right) => left.position - right.position),
    }));
}

function getRelativeNotesAssetHref(outputDirPath, assetName) {
  const relativeOutputDir = toPosix(path.relative(notesRoot, outputDirPath));
  const depth = relativeOutputDir ? relativeOutputDir.split('/').filter(Boolean).length : 0;
  const prefix = '../'.repeat(depth);
  return `${prefix}${assetName}`;
}

async function getAssetVersion(assetPath) {
  const assetContent = await fs.readFile(assetPath, 'utf8');
  return crypto.createHash('sha256').update(assetContent).digest('hex').slice(0, 12);
}

function isFolderLayoutNotePath(notePath) {
  const normalized = toPosix(notePath).replace(/^notes\//, '');
  const parts = normalized.split('/');

  if (parts.length < 3) {
    return false;
  }

  const fileName = parts.at(-1);
  const folderName = parts.at(-2);
  return fileName === `${folderName}.md`;
}

function rewriteInternalHref(href, sourcePath) {
  const trimmed = String(href ?? '').trim();

  if (
    !trimmed
    || /^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(trimmed)
  ) {
    return trimmed;
  }

  try {
    const sourceDir = toPosix(path.posix.dirname(sourcePath)).replace(/^\/+/, '');
    const resolved = new URL(trimmed, `https://example.invalid/${sourceDir}/`);
    let pathname = resolved.pathname.replace(/^\/+/, '');

    if (pathname.startsWith('study/')) {
      pathname = pathname.slice('study/'.length);
    }

    if (pathname.endsWith('.md')) {
      pathname = `${pathname.slice(0, -3)}/`;
      let outputPath = pathname.startsWith('source/')
        ? pathname.slice('source/'.length)
        : pathname;
      const outputSegments = outputPath.split('/').filter(Boolean);
      if (outputSegments.length >= 2
        && outputSegments.at(-1) === outputSegments.at(-2)) {
        outputSegments.pop();
        outputPath = `${outputSegments.join('/')}/`;
      }
      return `/study/${outputPath}${resolved.search}${resolved.hash}`;
    }

    return trimmed;
  } catch {
    return trimmed;
  }
}

function stashInlineHtml(tokens, html) {
  const token = `@@INLINE_${tokens.length}@@`;
  tokens.push({ token, html });
  return token;
}

function restoreInlineHtml(html, tokens) {
  return tokens.reduceRight(
    (currentHtml, token) => currentHtml.replaceAll(token.token, token.html),
    html,
  );
}

function renderInline(text, sourcePath) {
  const tokens = [];
  let source = String(text ?? '');

  source = source.replace(/`([^`]+)`/g, (_, code) => {
    return stashInlineHtml(tokens, `<code>${escapeHtml(code)}</code>`);
  });

  source = source.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_, alt, src) => {
    const resolvedSrc = rewriteInternalHref(src, sourcePath);
    return stashInlineHtml(tokens, `<img src="${escapeHtml(resolvedSrc)}" alt="${escapeHtml(alt)}" />`);
  });

  source = source.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_, label, href) => {
    const resolvedHref = rewriteInternalHref(href, sourcePath);
    const renderedLabel = renderInline(label, sourcePath);
    return stashInlineHtml(tokens, `<a href="${escapeHtml(resolvedHref)}">${renderedLabel}</a>`);
  });

  const html = escapeHtml(source)
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/__([^_\n]+)__/g, '<strong>$1</strong>')
    .replace(/(?<!\*)\*(\S(?:[^*\n]*?\S)?)\*(?!\*)/g, '<em>$1</em>');

  return restoreInlineHtml(html, tokens);
}

function slugifyHeading(text) {
  return String(text ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/['".,()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';
}

function uniqueHeadingId(baseId, usedIds) {
  if (!usedIds.has(baseId)) {
    usedIds.add(baseId);
    return baseId;
  }

  let index = 2;
  while (usedIds.has(`${baseId}-${index}`)) {
    index += 1;
  }

  const nextId = `${baseId}-${index}`;
  usedIds.add(nextId);
  return nextId;
}

function isFence(line) {
  return /^\s*```/.test(line);
}

function isMathFence(line) {
  return /^\s*\$\$\s*$/.test(line);
}

function isHeading(line) {
  return /^\s{0,3}#{1,6}\s+/.test(line);
}

function isHr(line) {
  return /^\s{0,3}(-{3,}|\*{3,}|_{3,})\s*$/.test(line);
}

function isStandaloneAnchor(line) {
  return /^\s*<a\s+id="[^"]+"><\/a>\s*$/i.test(line);
}

function isRawHtmlLine(line) {
  return /^\s*</.test(line) && !/^\s*<!--/.test(line);
}

function isTableStart(lines, index) {
  if (index + 1 >= lines.length) {
    return false;
  }

  const header = lines[index];
  const separator = lines[index + 1];

  return header.includes('|') && /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?\s*$/.test(separator);
}

function isListItem(line) {
  return /^\s{0,8}(?:[-*+]|(?:\d+\.))\s+/.test(line);
}

const CALLOUT_LABELS = {
  definition: 'Definition',
  rule: 'Rule',
  warning: 'Warning',
  example: 'Example',
};

function getCalloutOpening(line) {
  const match = line.match(/^\s{0,3}:::(definition|rule|warning|example)(?:\s+(.+?))?\s*$/i);
  return match ? { type: match[1].toLowerCase(), title: match[2]?.trim() ?? '' } : null;
}

function isCalloutOpening(line) {
  return Boolean(getCalloutOpening(line));
}

function isPracticeExampleOpening(line) {
  return /^\s{0,3}:::practice-example(?:\s|$)/i.test(line);
}

function getPracticeExampleOpening(line) {
  const match = line.match(/^\s{0,3}:::practice-example\s+([A-Za-z0-9][A-Za-z0-9-]*)\s*$/i);
  return match ? { id: match[1] } : null;
}

function toPracticeProblemMap(problems, label, notePath) {
  if (problems instanceof Map) {
    return new Map(problems);
  }

  const problemMap = new Map();
  for (const problem of problems ?? []) {
    const id = String(problem?.id ?? '').trim();
    if (!id) continue;
    if (problemMap.has(id)) {
      throw new Error(`Duplicate practice problem "${id}" in ${label} for ${notePath}.`);
    }
    problemMap.set(id, problem);
  }
  return problemMap;
}

function createPracticeExampleContext(notePath, currentProblems = [], allProblems = currentProblems) {
  return {
    notePath,
    currentProblemById: toPracticeProblemMap(currentProblems, 'current lesson', notePath),
    problemById: toPracticeProblemMap(allProblems, 'practice problem index', notePath),
    usedProblemIds: new Set(),
    resolvedProblems: [],
  };
}

function findCalloutEnd(lines, index, sourcePath) {
  const stack = [getCalloutOpening(lines[index]).type];
  let inFence = false;

  for (let nextIndex = index + 1; nextIndex < lines.length; nextIndex += 1) {
    const line = lines[nextIndex];
    if (isFence(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const opening = getCalloutOpening(line);
    if (opening) {
      stack.push(opening.type);
    } else if (isPracticeExampleOpening(line)) {
      stack.push('practice-example');
    } else if (/^\s*:::\s*$/.test(line)) {
      stack.pop();
      if (!stack.length) return nextIndex;
    }
  }

  throw new Error(`Missing closing ::: for ${stack[0]} callout in ${sourcePath}`);
}

function getIndentWidth(line) {
  return line.match(/^[ \t]*/)?.[0].length ?? 0;
}

function splitTableRow(row) {
  const trimmed = row.trim().replace(/^\|/, '').replace(/\|$/, '');
  return trimmed.split(/\|/).map((cell) => cell.trim());
}

function renderFenceBlock(lines, index) {
  const fenceMatch = lines[index].match(/^(\s*```+)/);
  const fence = fenceMatch ? fenceMatch[1].trim() : '```';
  const fenceChar = fence[0];
  const fenceLength = fence.length;
  const fencePattern = new RegExp(`^\\s*${escapeRegExp(fenceChar)}{${fenceLength},}\\s*$`);
  const codeLines = [];
  let nextIndex = index + 1;

  while (nextIndex < lines.length && !fencePattern.test(lines[nextIndex])) {
    codeLines.push(lines[nextIndex]);
    nextIndex += 1;
  }

  if (nextIndex < lines.length) {
    nextIndex += 1;
  }

  return {
    html: `<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`,
    nextIndex,
  };
}

function renderMathBlock(lines, index) {
  const mathLines = [];
  let nextIndex = index + 1;

  while (nextIndex < lines.length && !isMathFence(lines[nextIndex])) {
    mathLines.push(lines[nextIndex]);
    nextIndex += 1;
  }

  if (nextIndex < lines.length) {
    nextIndex += 1;
  }

  return {
    html: `<div class="math-block">$$\n${escapeHtml(mathLines.join('\n'))}\n$$</div>`,
    nextIndex,
  };
}

function renderTableBlock(lines, index, sourcePath) {
  const header = splitTableRow(lines[index]);
  let nextIndex = index + 2;
  const bodyRows = [];

  while (nextIndex < lines.length && lines[nextIndex].includes('|') && lines[nextIndex].trim()) {
    bodyRows.push(splitTableRow(lines[nextIndex]));
    nextIndex += 1;
  }

  const headerHtml = header.map((cell) => `<th>${renderInline(cell, sourcePath)}</th>`).join('');
  const bodyHtml = bodyRows.map((row) => {
    const cells = row.map((cell) => `<td>${renderInline(cell, sourcePath)}</td>`).join('');
    return `<tr>${cells}</tr>`;
  }).join('');

  return {
    html: `<table><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`,
    nextIndex,
  };
}

function renderQuoteBlock(lines, index, sourcePath, practiceExampleContext) {
  const quoteLines = [];
  let nextIndex = index;

  while (nextIndex < lines.length && lines[nextIndex].trim().startsWith('>')) {
    quoteLines.push(lines[nextIndex].replace(/^\s{0,3}>\s?/, ''));
    nextIndex += 1;
  }

  return {
    html: `<blockquote>${renderBlocks(quoteLines.join('\n'), sourcePath, practiceExampleContext)}</blockquote>`,
    nextIndex,
  };
}

function renderListBlock(lines, index, sourcePath, practiceExampleContext) {
  const startIndent = getIndentWidth(lines[index]);
  const isOrdered = /^\s*\d+\.\s+/.test(lines[index]);
  const items = [];
  let nextIndex = index;

  while (nextIndex < lines.length && isListItem(lines[nextIndex]) && getIndentWidth(lines[nextIndex]) === startIndent) {
    const currentLine = lines[nextIndex];
    const markerMatch = currentLine.match(/^\s{0,8}(?:[-*+]|(?:\d+\.))\s+(.*)$/);
    const itemLines = [markerMatch ? markerMatch[1] : currentLine.trim()];
    nextIndex += 1;

    while (nextIndex < lines.length) {
      const nextLine = lines[nextIndex];

      if (!nextLine.trim()) {
        itemLines.push('');
        nextIndex += 1;
        continue;
      }

      const nextIndent = getIndentWidth(nextLine);

      if (nextIndent > startIndent) {
        itemLines.push(nextLine);
        nextIndex += 1;
        continue;
      }

      break;
    }

    items.push(`<li>${renderBlocks(itemLines.join('\n').replace(/^\n+|\n+$/g, ''), sourcePath, practiceExampleContext)}</li>`);
  }

  const listTag = isOrdered ? 'ol' : 'ul';
  return {
    html: `<${listTag}>${items.join('')}</${listTag}>`,
    nextIndex,
  };
}

function renderCalloutBlock(lines, index, sourcePath, practiceExampleContext) {
  const opening = getCalloutOpening(lines[index]);
  const endIndex = findCalloutEnd(lines, index, sourcePath);
  const label = CALLOUT_LABELS[opening.type];
  const titleHtml = opening.title
    ? `<span class="callout__title">${renderInline(opening.title, sourcePath)}</span>`
    : '';

  return {
    html: `<aside class="callout callout--${opening.type}"><div class="callout__heading"><span class="callout__label">${label}</span>${titleHtml}</div><div class="callout__body">${renderBlocks(lines.slice(index + 1, endIndex).join('\n'), sourcePath, practiceExampleContext)}</div></aside>`,
    nextIndex: endIndex + 1,
  };
}

function renderPracticeExampleBlock(lines, index, sourcePath, context) {
  const opening = getPracticeExampleOpening(lines[index]);
  const lessonPath = context?.notePath ?? sourcePath;

  if (!opening) {
    throw new Error(`Malformed practice-example directive "${lines[index].trim()}" in ${lessonPath}. Expected ":::practice-example <problem-id>".`);
  }

  let endIndex = index + 1;
  while (endIndex < lines.length && !/^\s*:::\s*$/.test(lines[endIndex])) {
    endIndex += 1;
  }

  if (endIndex >= lines.length) {
    throw new Error(`Missing closing ::: for practice example "${opening.id}" in ${lessonPath}.`);
  }

  if (lines.slice(index + 1, endIndex).some((line) => line.trim())) {
    throw new Error(`Practice example "${opening.id}" in ${lessonPath} must be empty.`);
  }

  const indexedProblem = context?.problemById?.get(opening.id);
  const problem = context?.currentProblemById?.get(opening.id);

  if (!indexedProblem) {
    throw new Error(`Unknown practice example "${opening.id}" in ${lessonPath}.`);
  }

  if (!problem) {
    throw new Error(`Practice example "${opening.id}" in ${lessonPath} belongs to another lesson (${indexedProblem.sourcePath ?? indexedProblem.note ?? 'unknown source'}).`);
  }

  if (context.usedProblemIds.has(opening.id)) {
    throw new Error(`Duplicate practice example "${opening.id}" in ${lessonPath}.`);
  }

  if (!String(problem.solutionMarkdown ?? '').trim()) {
    throw new Error(`Practice example "${opening.id}" in ${lessonPath} has no solution.`);
  }

  context.usedProblemIds.add(opening.id);
  context.resolvedProblems.push(problem);

  const promptHtml = renderBlocks(problem.promptMarkdown, problem.sourcePath ?? sourcePath);
  const solutionHtml = renderBlocks(problem.solutionMarkdown, problem.sourcePath ?? sourcePath);
  const practiceHref = `practice/?filter=all#${encodeURIComponent(problem.id)}`;

  return {
    html: `<aside class="callout callout--example practice-example" data-practice-example="${escapeHtml(problem.id)}"><div class="callout__heading"><span class="callout__label">Worked example</span><span class="callout__title">${escapeHtml(problem.title)}</span></div><div class="callout__body practice-example__body"><div class="practice-example__prompt">${promptHtml}</div><div class="practice-example__solution">${solutionHtml}</div><p class="practice-example__link"><a href="${escapeHtml(practiceHref)}">Practice this problem</a></p></div></aside>`,
    nextIndex: endIndex + 1,
  };
}

function renderParagraphBlock(lines, index, sourcePath) {
  const paragraphLines = [lines[index]];
  let nextIndex = index + 1;

  while (
    nextIndex < lines.length
    && lines[nextIndex].trim()
    && !isFence(lines[nextIndex])
    && !isMathFence(lines[nextIndex])
    && !isHeading(lines[nextIndex])
    && !isHr(lines[nextIndex])
    && !isStandaloneAnchor(lines[nextIndex])
    && !isRawHtmlLine(lines[nextIndex])
    && !isTableStart(lines, nextIndex)
    && !lines[nextIndex].trim().startsWith('>')
    && !isListItem(lines[nextIndex])
    && !isCalloutOpening(lines[nextIndex])
    && !isPracticeExampleOpening(lines[nextIndex])
  ) {
    paragraphLines.push(lines[nextIndex]);
    nextIndex += 1;
  }

  const paragraphText = paragraphLines.join(' ');
  return {
    html: paragraphText ? renderInline(paragraphText, sourcePath) : '',
    nextIndex,
  };
}

function renderRawHtmlBlock(lines, index) {
  const htmlLines = [lines[index]];
  let nextIndex = index + 1;

  while (nextIndex < lines.length && lines[nextIndex].trim() && isRawHtmlLine(lines[nextIndex])) {
    htmlLines.push(lines[nextIndex]);
    nextIndex += 1;
  }

  return { html: htmlLines.join('\n'), nextIndex };
}

function renderHeadingBlock(lines, index, sourcePath, usedHeadingIds) {
  const headingMatch = lines[index].match(/^\s{0,3}(#{1,6})\s+(.*)$/);
  const level = headingMatch[1].length;
  const headingText = headingMatch[2].trim();
  const id = uniqueHeadingId(slugifyHeading(headingText), usedHeadingIds);
  return {
    html: `<h${level} id="${id}">${renderInline(headingText, sourcePath)}</h${level}>`,
    nextIndex: index + 1,
  };
}

function getMarkdownBlockHandlers(sourcePath, usedHeadingIds, practiceExampleContext) {
  return [
    { matches: (lines, index) => isFence(lines[index]), render: renderFenceBlock },
    { matches: (lines, index) => isMathFence(lines[index]), render: renderMathBlock },
    { matches: (lines, index) => isPracticeExampleOpening(lines[index]), render: (lines, index) => renderPracticeExampleBlock(lines, index, sourcePath, practiceExampleContext) },
    { matches: (lines, index) => isCalloutOpening(lines[index]), render: (lines, index) => renderCalloutBlock(lines, index, sourcePath, practiceExampleContext) },
    { matches: (lines, index) => isHeading(lines[index]), render: (lines, index) => renderHeadingBlock(lines, index, sourcePath, usedHeadingIds) },
    { matches: (lines, index) => isHr(lines[index]), render: (_lines, index) => ({ html: '<hr />', nextIndex: index + 1 }) },
    { matches: (lines, index) => isStandaloneAnchor(lines[index]), render: (lines, index) => ({ html: lines[index].trim(), nextIndex: index + 1 }) },
    { matches: (lines, index) => isRawHtmlLine(lines[index]), render: renderRawHtmlBlock },
    { matches: (lines, index) => isTableStart(lines, index), render: (lines, index) => renderTableBlock(lines, index, sourcePath) },
    { matches: (lines, index) => lines[index].trim().startsWith('>'), render: (lines, index) => renderQuoteBlock(lines, index, sourcePath, practiceExampleContext) },
    { matches: (lines, index) => isListItem(lines[index]), render: (lines, index) => renderListBlock(lines, index, sourcePath, practiceExampleContext) },
    { matches: () => true, wrap: true, render: (lines, index) => renderParagraphBlock(lines, index, sourcePath) },
  ];
}

function renderBlocks(markdown, sourcePath, practiceExampleContext = null) {
  const lines = String(markdown ?? '').replace(/\r\n/g, '\n').split('\n');
  const usedHeadingIds = new Set();
  const blocks = [];
  const handlers = getMarkdownBlockHandlers(sourcePath, usedHeadingIds, practiceExampleContext);
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const handler = handlers.find((candidate) => candidate.matches(lines, index));
    const block = handler.render(lines, index);
    blocks.push(handler.wrap ? `<p>${block.html}</p>` : block.html);
    index = block.nextIndex;
  }

  return blocks.join('\n');
}

function stripFirstH1(markdown) {
  const lines = String(markdown ?? '').replace(/\r\n/g, '\n').split('\n');
  let index = 0;

  while (index < lines.length && !lines[index].trim()) {
    index += 1;
  }

  if (index < lines.length && /^\s{0,3}#\s+/.test(lines[index])) {
    return lines.slice(index + 1).join('\n').replace(/^\s*\n+/, '');
  }

  return markdown;
}

function stripLeadingTitleHeading(markdown, title) {
  const lines = String(markdown ?? '').replace(/\r\n/g, '\n').split('\n');
  let index = 0;

  while (index < lines.length && !lines[index].trim()) {
    index += 1;
  }

  if (index >= lines.length || !isHeading(lines[index])) {
    return markdown;
  }

  const headingText = trimMarkdownText(lines[index]).replace(/\s+/g, ' ').trim().toLowerCase();
  const normalizedTitle = trimMarkdownText(title).replace(/\s+/g, ' ').trim().toLowerCase();

  if (!headingText || headingText !== normalizedTitle) {
    return markdown;
  }

  return lines.slice(index + 1).join('\n').replace(/^\s*\n+/, '');
}

function stripManualTableOfContents(markdown) {
  const lines = String(markdown ?? '').replace(/\r\n/g, '\n').split('\n');
  const output = [];
  let index = 0;

  while (index < lines.length) {
    if (isHeading(lines[index])) {
      const headingText = trimMarkdownText(lines[index]);

      if (/^table of contents$/i.test(headingText) || /^contents$/i.test(headingText)) {
        index += 1;

        while (index < lines.length) {
          if (!lines[index].trim()) {
            index += 1;
            continue;
          }

          if (isListItem(lines[index])) {
            index += 1;
            continue;
          }

          break;
        }

        while (output.length && !output.at(-1).trim()) {
          output.pop();
        }

        continue;
      }
    }

    output.push(lines[index]);
    index += 1;
  }

  return output.join('\n').replace(/^\s*\n+/, '');
}

function getSummary(markdown) {
  const body = stripFirstH1(String(markdown ?? '').replace(/\r\n/g, '\n'));
  const lines = body.split('\n');
  let index = 0;

  while (index < lines.length) {
    while (index < lines.length && !lines[index].trim()) {
      index += 1;
    }

    if (index >= lines.length) {
      break;
    }

    if (isHeading(lines[index])) {
      const headingText = trimMarkdownText(lines[index]);
      index += 1;

      if (/^table of contents$/i.test(headingText) || /^contents$/i.test(headingText)) {
        while (
          index < lines.length
          && (isListItem(lines[index]) || !lines[index].trim())
        ) {
          index += 1;
        }
      }

      continue;
    }

    if (isStandaloneAnchor(lines[index])) {
      index += 1;
      continue;
    }

    if (isListItem(lines[index]) || isHr(lines[index]) || isFence(lines[index]) || isMathFence(lines[index])) {
      index += 1;
      continue;
    }

    const paragraphLines = [lines[index]];
    index += 1;

    while (
      index < lines.length
      && lines[index].trim()
      && !isHeading(lines[index])
      && !isListItem(lines[index])
      && !isHr(lines[index])
      && !isFence(lines[index])
      && !isMathFence(lines[index])
      && !isTableStart(lines, index)
      && !lines[index].trim().startsWith('>')
    ) {
      paragraphLines.push(lines[index]);
      index += 1;
    }

    const summary = trimMarkdownText(paragraphLines.join(' '));

    if (summary) {
      return summary;
    }
  }

  return '';
}

function getFirstPagePath(node) {
  if (!node || typeof node !== 'object') {
    return null;
  }

  if (node.path) {
    return node.path;
  }

  for (const child of node.children ?? []) {
    const path = getFirstPagePath(child);

    if (path) {
      return path;
    }
  }

  return null;
}

function getNoteUrl(notePath) {
  return `/study/${getSubjectRoutePath(notePath)}/`;
}

function renderSubjectLinks(structures, activeStructureId = null, activePagePath = null) {
  const visibleStructures = structures.filter((structure) => structure.id !== 'hidden');
  const subjectStructures = visibleStructures.filter((structure) => structure.id !== homeStructureId);
  const homeCurrent = activeStructureId === homeStructureId ? ' aria-current="true"' : '';
  const subjectGroups = subjectStructures.map((structure) => {
    const groupId = `subjects-panel-${structure.id}`;
    const menuItems = (structure.children ?? [])
      .map((node) => {
        const nodePagePath = getFirstPagePath(node);

        if (!nodePagePath) {
          return '';
        }

        const nodeHref = getNoteUrl(nodePagePath);
        const activeClass = nodePagePath === activePagePath ? ' is-active' : '';
        const current = nodePagePath === activePagePath ? ' aria-current="page"' : '';
        return `<li><a class="notes-inline-link${activeClass}"${current} href="${escapeHtml(nodeHref)}" data-notes-nav-item>${escapeHtml(node.title)}</a></li>`;
      })
      .join('');

    return `<section class="subjects-panel__group" aria-labelledby="${escapeHtml(groupId)}">
          <h2 id="${escapeHtml(groupId)}">${escapeHtml(structure.title)}</h2>
          <ul class="subjects-panel__list">${menuItems}</ul>
        </section>`;
  }).join('');

  return `<aside class="notes-structures" aria-label="Guide structures">
          <div class="notes-header__brand">
            <p class="notes-header__eyebrow">Open Sourced Education for all</p>
            <p class="notes-header__title"><a class="notes-header__brand-link" href="/">Adriamics</a> Study</p>
          </div>
          <ul class="subject-list">
          <li><a class="notes-inline-link${activeStructureId === homeStructureId ? ' is-active' : ''}"${homeCurrent} href="/study/" data-subject-id="home" data-default-href="/study/" data-notes-nav-item>Home</a></li>
          <li><button class="notes-subjects-toggle" type="button" data-subjects-trigger aria-controls="subjects-panel" aria-expanded="false" data-notes-nav-item>Subjects</button></li>
          <li>
          <button class="notes-theme-toggle" type="button" data-theme-toggle aria-pressed="false" aria-label="Switch to light mode" data-notes-nav-item>Light</button>
          </li>
          <li>
          <button class="notes-theme-toggle" type="button" data-webmeji-toggle aria-pressed="true" aria-label="Toggle companion" data-notes-nav-item>Companion</button>
          </li>
          </ul>
          <section class="subjects-panel" id="subjects-panel" role="dialog" aria-modal="true" aria-labelledby="subjects-panel-title" hidden>
            <div class="subjects-panel__content">
              <div class="subjects-panel__head">
                <div>
                  <p class="section-label">Subjects</p>
                  <h1 id="subjects-panel-title">Choose a topic</h1>
                </div>
                <button class="notes-action-chip" id="subjects-close" type="button" aria-label="Close subjects" data-notes-nav-item>Close</button>
              </div>
              <div class="subjects-panel__groups">${subjectGroups}</div>
            </div>
          </section>
        </aside>`;
}

function renderSearchPanel() {
  return `<aside class="search-panel" id="search-panel" aria-labelledby="search-panel-title" hidden>
    <div class="search-panel__card panel">
      <div class="search-panel__head">
        <div>
          <p class="section-label">Search</p>
          <h2 class="search-panel__title" id="search-panel-title">Find a note</h2>
        </div>
        <button class="search-panel__close notes-action-chip" id="search-close" type="button" aria-label="Close search" data-notes-nav-item>Close</button>
      </div>
      <label class="search-panel__field">
        <span class="sr-only">Search all notes</span>
        <input id="search-input" type="search" placeholder="Search all notes..." autocomplete="off" spellcheck="false" />
      </label>
      <p class="search-panel__status" id="search-status" aria-live="polite">Loading search index...</p>
      <div class="search-results" id="search-results" role="list"></div>
    </div>
  </aside>`;
}

function renderNotesFooter() {
  return `<footer class="shell notes-footer">
    <div class="notes-footer__inner">
      <a href="/privacy-policy/">Privacy Policy</a>
      <span class="notes-footer__sep" aria-hidden="true">-</span>
      <a href="/terms-of-service/">Terms of Service</a>
      <span class="notes-footer__sep" aria-hidden="true">-</span>
      <a href="/">Adriamics</a>
    </div>
  </footer>`;
}

function getGeneratedSourcePathFromOutputDir(outputDir) {
  const relativeOutputDir = toPosix(path.relative(notesRoot, outputDir));
  const parts = relativeOutputDir.split('/').filter(Boolean);

  if (!parts.length) {
    return null;
  }

  if (parts.at(-1) === 'practice') {
    if (parts.length < 2) {
      return null;
    }

    const noteParts = parts.slice(0, -1);
    return path.join(notesRoot, 'source', ...noteParts, `${noteParts.at(-1)}-problems.md`);
  }

  return path.join(notesRoot, 'source', ...parts, `${parts.at(-1)}.md`);
}

function renderQuickActions({ practiceUrl = null, backToNoteUrl = null } = {}) {
  const actions = [];

  if (practiceUrl) {
    actions.push(`<a class="notes-action-chip notes-action-chip--practice" href="${escapeHtml(practiceUrl)}" data-notes-nav-item>Practice →</a>`);
  }

  if (backToNoteUrl) {
    actions.push(`<a class="notes-action-chip notes-action-chip--back" href="${escapeHtml(backToNoteUrl)}" data-notes-nav-item>← Back To Notes</a>`);
  }

  return actions.join('');
}

function stripSearchOnlySections(markdown) {
  const lines = String(markdown ?? '').replace(/\r\n/g, '\n').split('\n');
  const output = [];
  let index = 0;

  while (index < lines.length) {
    const headingMatch = lines[index].match(/^\s{0,3}(#{1,6})\s+(.*)$/);
    const headingText = headingMatch ? trimMarkdownText(headingMatch[2]) : '';

    if (!headingMatch || !/^sources$/i.test(headingText)) {
      output.push(lines[index]);
      index += 1;
      continue;
    }

    const sectionLevel = headingMatch[1].length;
    index += 1;

    while (index < lines.length) {
      const nextHeading = lines[index].match(/^\s{0,3}(#{1,6})\s+/);
      if (nextHeading && nextHeading[1].length <= sectionLevel) break;
      index += 1;
    }
  }

  return output.join('\n').replace(/^\s*\n+/, '');
}

function renderFloatingActions(quickActionsHtml = '') {
  return `<div class="notes-quick-actions notes-quick-actions--floating" role="group" aria-label="Quick actions">${quickActionsHtml}<button class="notes-action-chip notes-action-chip--search" type="button" data-search-trigger aria-controls="search-panel" aria-expanded="false" data-notes-nav-item>Search (ctrl+S)</button><a class="notes-action-chip notes-action-chip--back" href="#top" data-notes-nav-item>↑ Back To Top</a></div>`;
}

function renderHeader(structures, activeStructureId = null, includeIntro = false, activePagePath = null) {
  const intro = includeIntro
    ? `
        <p class="notes-intro">
          Adriamics Study is an open collection of structured notes for math,
          physics, engineering, biology, chemistry, programming, and self-guided learning.
          Browse subjects, search notes, and suggest corrections through GitHub.
        </p>`
    : '';

  return `<header class="shell notes-header">
    <div class="notes-header__inner">
      ${renderSubjectLinks(structures, activeStructureId, activePagePath)}
    </div>
  </header>`;
}

function renderNotesPageDocument({
  title,
  description,
  canonicalUrl,
  bodyClass,
  mainClass,
  mainAriaLabel,
  mainHtml,
  structures,
  activeStructureId = null,
  activePagePath = null,
  includeIntro = false,
  quickActionsHtml = '',
  stylesheetHref = '/study/notes.min.css',
  scriptHref = '/study/notes.min.js',
  headHtml = '',
  extraHead = '',
}) {
  const webmejiCriticalStyles = `<style id="webmeji-critical-styles">
    .webmeji-container { position: fixed; bottom: 0; width: 96px; height: 96px; overflow: hidden; z-index: 20; pointer-events: auto; }
    .webmeji-container--hidden { display: none; }
    .webmeji-container img { display: block; width: 100%; height: auto; }
    @media (max-width: 768px) { .webmeji-container { width: clamp(56px, 16vw, 78px); height: clamp(56px, 16vw, 78px); } }
  </style>`;
  const webmejiHead = `${renderAsyncStylesheet('/study/webmeji/webmeji.css', { nonBlocking: true })}
  <script defer src="/study/webmeji/config.min.js"></script>
  <script defer src="/study/webmeji/webmeji.min.js"></script>`;
  const themeBootstrapScript = `<script>
    (() => {
      let storedTheme = null;

      try {
        storedTheme = window.localStorage.getItem(${JSON.stringify(notesThemeStorageKey)});
      } catch {
        // Browser storage can be disabled or unavailable in private/sandboxed contexts.
      }

      if (storedTheme === 'sepia' || storedTheme === 'light') {
        document.documentElement.classList.add('notes-page--sepia');
      }
    })();
  </script>`;

  const floatingActionsHtml = renderFloatingActions(quickActionsHtml);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
  <meta name="color-scheme" content="dark" />
  <link rel="icon" type="image/png" href="/assets/favicon.png" />
  ${headHtml}
  ${themeBootstrapScript}
  ${renderAsyncStylesheet(stylesheetHref)}
  ${webmejiCriticalStyles}
  ${webmejiHead}
  ${extraHead}
  <script defer src="${escapeHtml(scriptHref)}"></script>
</head>
<body class="notes-page ${escapeHtml(bodyClass)}" id="top">
  <a class="skip-link" href="#content">Skip to content</a>
  ${floatingActionsHtml}

  ${renderHeader(structures, activeStructureId, includeIntro, activePagePath)}

  <main id="content" class="${escapeHtml(mainClass)}" aria-label="${escapeHtml(mainAriaLabel)}">
    ${mainHtml}
  </main>
  ${renderNotesFooter()}
  ${renderSearchPanel()}
</body>
</html>`;
}

function plainTextFromHtml(html) {
  return String(html ?? '')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function normalizeTocHeadingText(headingHtml) {
  return plainTextFromHtml(headingHtml).replace(/\s+/g, ' ').trim().toLowerCase();
}

function buildTocTree(entries) {
  const root = { level: 0, children: [] };
  const stack = [root];

  for (const entry of entries) {
    const node = { ...entry, children: [] };

    while (stack.length > 1 && node.level <= stack[stack.length - 1].level) {
      stack.pop();
    }

    stack[stack.length - 1].children.push(node);
    stack.push(node);
  }

  return root.children;
}

function getHeadingEntries(bodyHtml) {
  const headingPattern = /<h([1-6]) id="([^"]+)">([\s\S]*?)<\/h\1>/g;
  return Array.from(bodyHtml.matchAll(headingPattern), ([, level, id, headingHtml]) => ({
    level: Number.parseInt(level, 10),
    id,
    headingHtml,
  }));
}

function getHeadingTree(bodyHtml) {
  // The page title is rendered outside bodyHtml. Ignore generated contents headings
  // before building the tree so real descendants remain attached to their section.
  const entries = getHeadingEntries(bodyHtml).filter((node) => {
    const normalizedText = normalizeTocHeadingText(node.headingHtml);
    return normalizedText && normalizedText !== 'table of contents' && normalizedText !== 'contents';
  });

  return buildTocTree(entries);
}

function renderLessonNavLink(node, { type, sectionId = '', isInitialActive = false } = {}) {
  const dataType = type === 'subtopic'
    ? ` data-notes-subtopic-link data-notes-section-id="${escapeHtml(sectionId)}"`
    : ' data-notes-toc-link';
  const activeState = isInitialActive ? ' is-active' : '';
  const currentState = isInitialActive ? ' aria-current="location"' : '';

  return `<a class="notes-lesson-nav__link${activeState}"${currentState} href="#${escapeHtml(node.id)}" data-notes-nav-item${dataType}>${node.headingHtml}</a>`;
}

function renderSidebarTocNodes(nodes) {
  return `<ol class="notes-toc__list">${nodes.map((node) => `<li class="notes-toc__item">${renderLessonNavLink(node, { type: 'toc', isInitialActive: node.isInitialActive })}</li>`).join('')}</ol>`;
}

function renderNotesSidebarToc(bodyHtml) {
  const headingTree = getHeadingTree(bodyHtml);

  if (!headingTree.length) {
    return '';
  }

  headingTree[0].isInitialActive = true;

  return `<aside class="notes-sidebar panel" aria-label="Table of contents">
      <div class="notes-sidebar__head">
        <p class="section-label">Topics</p>
      </div>
      <nav class="notes-sidebar__toc" aria-label="Table of contents">
        ${renderSidebarTocNodes(headingTree)}
      </nav>
    </aside>`;
}

function renderCurrentSectionToc(bodyHtml) {
  const headingTree = getHeadingTree(bodyHtml);
  const sectionsWithSubtopics = headingTree.filter((section) => section.children.length > 0);

  if (!sectionsWithSubtopics.length) {
    return '';
  }

  return `<aside class="notes-section-toc" aria-label="Subtopics">
      ${sectionsWithSubtopics.map((section) => `<section class="notes-section-toc__panel" data-notes-section-toc-panel="${escapeHtml(section.id)}"${section.id === headingTree[0].id ? '' : ' hidden'}>
        <p class="section-label">Subtopics</p>
        <nav aria-label="Subtopics for ${escapeHtml(plainTextFromHtml(section.headingHtml))}">
          <ol class="notes-section-toc__list">${section.children.map((subtopic, index) => `<li class="notes-toc__item">${renderLessonNavLink(subtopic, { type: 'subtopic', sectionId: section.id, isInitialActive: section.id === headingTree[0].id && index === 0 })}</li>`).join('')}</ol>
        </nav>
      </section>`).join('')}
    </aside>`;
}

function buildNoteHtml({
  title,
  description,
  bodyHtml,
  beforeBodyHtml = '',
  afterBodyHtml = '',
  canonicalUrl,
  editUrl,
  sourceUrl,
  lastModifiedDate = null,
  contributorsHtml = '',
  structures,
  structure,
  notePath,
  outputDir,
  assetVersions,
  practiceUrl = null,
  interactive = null,
}) {
  const stylesheetHref = `${getRelativeNotesAssetHref(outputDir, 'notes.min.css')}?v=${assetVersions.notesCss}`;
  const scriptHref = `${getRelativeNotesAssetHref(outputDir, 'notes.min.js')}?v=${assetVersions.notesJs}`;
  const interactiveTypes = Array.isArray(interactive) ? interactive : [interactive];
  const interactiveAssets = new Set(interactiveTypes.filter(Boolean));
  const interactiveHead = interactiveAssets.has('vector-calculus-gradient') || interactiveAssets.has('vector-calculus-gradient-3d') || interactiveAssets.has('vector-calculus-vector-field-3d') || interactiveAssets.has('statics-modeling') || interactiveAssets.has('dynamics-projectile') || interactiveAssets.has('circuits-kcl') || interactiveAssets.has('jsxgraph-examples') ? `
  <script>window.__NOTES_JSXGRAPH_CSS_URL = 'https://cdn.jsdelivr.net/npm/jsxgraph@1.12.2/distrib/jsxgraph.css';</script>
  <script>window.__NOTES_JSXGRAPH_URL = 'https://cdn.jsdelivr.net/npm/jsxgraph@1.12.2/distrib/jsxgraphcore.js';</script>
  ` : '';
  const quickActionsHtml = renderQuickActions({ practiceUrl });
  const sidebarHtml = renderNotesSidebarToc(bodyHtml);
  const sectionTocHtml = renderCurrentSectionToc(bodyHtml) || '    <div class="notes-layout__balance" aria-hidden="true"></div>';
  const sidebarColumnHtml = sidebarHtml || '    <div class="notes-layout__balance" aria-hidden="true"></div>';
  const mainHtml = `
${sidebarColumnHtml}
    <section class="notes-viewer panel">
      <div class="viewer-head">
        <div>
          <h1>${escapeHtml(title)}</h1>
          ${renderMetadataLine('viewer-meta', sourceUrl, lastModifiedDate)}
          ${contributorsHtml}
      </div>
      <div class="viewer-head__actions">
          <a class="suggest-edit-link notes-action-chip" href="${escapeHtml(editUrl)}" target="_blank" rel="noreferrer" data-notes-nav-item>Suggest edit</a>
        </div>
      </div>
      <article class="markdown-body" id="note-content">
        ${beforeBodyHtml}
        <div data-notes-lesson-body>
          ${bodyHtml}
          ${afterBodyHtml}
        </div>
      </article>
    </section>
${sectionTocHtml}
  `;

  return renderNotesPageDocument({
    title: `${title} | Adriamics Study`,
    description,
    canonicalUrl,
    bodyClass: 'note-standalone-page',
    mainClass: 'shell notes-layout',
    mainAriaLabel: 'Notes content',
    mainHtml,
    structures,
    activeStructureId: structure.id,
    activePagePath: notePath,
    quickActionsHtml,
    stylesheetHref,
    scriptHref,
    headHtml: '<script>document.documentElement.classList.add("notes-lesson-boot");</script>',
    extraHead: `${interactiveHead}
  ${renderMathJaxConfig(outputDir, assetVersions)}
  `,
  });
}

function getConceptDagDefaultSubjectId(nodes) {
  const preferredIds = ['math.vectors', 'math.limits', 'math.algebra'];

  for (const preferredId of preferredIds) {
    if (nodes.some((node) => node.id === preferredId)) {
      return preferredId;
    }
  }

  return nodes[0]?.id ?? '';
}

function getConceptDagSubjectIdFromNotePath(notePath) {
  const normalizedPath = toPosix(notePath).replace(/^notes\//, '');
  const nestedSourceMatch = normalizedPath.match(/^source\/([^/]+)\/([^/]+)\/([^/]+)\/\3\.md$/);

  if (nestedSourceMatch) {
    const [, domain, slug] = nestedSourceMatch;

    if (domain === 'math' && slug === 'multivariable-differential-calculus') {
      return 'math.multivariable-calculus';
    }

    return `${domain}.${slug}`;
  }

  const sourceMatch = normalizedPath.match(/^source\/([^/]+)\/([^/]+)\/\2\.md$/);

  if (sourceMatch) {
    return `${sourceMatch[1]}.${sourceMatch[2]}`;
  }

  return '';
}

function collectConceptDagAncestors(selectedId, nodesById) {
  const visited = new Set();
  const stack = [selectedId];

  while (stack.length) {
    const nodeId = stack.pop();

    if (visited.has(nodeId)) {
      continue;
    }

    visited.add(nodeId);
    const node = nodesById.get(nodeId);

    if (!node) {
      continue;
    }

    stack.push(...node.requires.hard, ...node.requires.soft);
  }

  return visited;
}

function buildConceptDagChildMap(ancestorIds, nodesById, nodeOrder) {
  const childMap = new Map();

  ancestorIds.forEach((nodeId) => childMap.set(nodeId, { hard: [], soft: [] }));

  ancestorIds.forEach((nodeId) => {
    const node = nodesById.get(nodeId);

    if (!node) {
      return;
    }

    for (const type of ['hard', 'soft']) {
      node.requires[type].forEach((dependencyId) => {
        if (ancestorIds.has(dependencyId)) {
          childMap.get(dependencyId)[type].push(nodeId);
        }
      });
    }
  });

  childMap.forEach((relations) => {
    relations.hard.sort((left, right) => nodeOrder.get(left) - nodeOrder.get(right));
    relations.soft.sort((left, right) => nodeOrder.get(left) - nodeOrder.get(right));
  });

  return childMap;
}

function collectConceptDagRootIds(ancestorIds, nodesById, nodeOrder) {
  return [...ancestorIds]
    .filter((nodeId) => {
      const node = nodesById.get(nodeId);
      return node && [...node.requires.hard, ...node.requires.soft].every((dependencyId) => !ancestorIds.has(dependencyId));
    })
    .sort((left, right) => nodeOrder.get(left) - nodeOrder.get(right));
}

function walkConceptDagTreeRows(nodeId, context, depth, pathStack, rows) {
  if (pathStack.has(nodeId) || context.renderedIds.has(nodeId)) {
    return;
  }

  const node = context.nodesById.get(nodeId);

  if (!node) {
    return;
  }

  const nextPathStack = new Set(pathStack);
  nextPathStack.add(nodeId);
  context.renderedIds.add(nodeId);
  rows[depth] ??= [];
  rows[depth].push(node);

  const children = context.childMap.get(nodeId) ?? { hard: [], soft: [] };
  [...children.hard, ...children.soft].forEach((childId) => walkConceptDagTreeRows(childId, context, depth + 1, nextPathStack, rows));
}

function renderConceptDagNodeLink(node, selectedId) {
  const noteUrl = getConceptNoteUrlFromId(node.id);
  const selectedClass = node.id === selectedId ? ' is-selected' : '';

  return `<a class="concept-dag-tree__node${selectedClass}" href="${escapeHtml(noteUrl)}" data-concept-dag-node-link data-concept-dag-note-url="${escapeHtml(noteUrl)}" data-notes-nav-item>${escapeHtml(node.title)}</a>`;
}

function renderConceptDagConnector(depth, isTail) {
  if (!depth) {
    return '';
  }

  const cells = Array.from({ length: depth }, (_, index) => {
    const type = isTail ? (index === 0 ? 'corner' : 'junction') : 'vertical';
    return `<span class="concept-dag-tree__connector-cell concept-dag-tree__connector-cell--${type}" aria-hidden="true"></span>`;
  }).join('');

  return `<span class="concept-dag-tree__connector${isTail ? ' concept-dag-tree__connector--tail' : ''}" aria-hidden="true">${cells}</span>`;
}

function renderConceptDagRows(rows, selectedId) {
  return rows.map((rowNodes, depth) => {
    const isLastRow = depth === rows.length - 1 && depth > 0;
    const nodesHtml = `<span class="concept-dag-tree__nodes">${rowNodes.map((node, index) => `${index ? '<span class="concept-dag-tree__separator" aria-hidden="true"> - </span>' : ''}${renderConceptDagNodeLink(node, selectedId)}`).join('')}</span>`;

    return `<div class="concept-dag-tree__row${isLastRow ? ' concept-dag-tree__row--tail' : ''}" data-concept-dag-depth="${escapeHtml(String(depth))}">${renderConceptDagConnector(depth, isLastRow)}${nodesHtml}</div>`;
  }).join('');
}

function buildConceptDagTreeHtml(dag, selectedSubjectId = '') {
  const defaultSubjectId = selectedSubjectId || getConceptDagDefaultSubjectId(dag.nodes);
  const nodesById = new Map(dag.nodes.map((node) => [node.id, node]));
  const nodeOrder = new Map(dag.nodes.map((node, index) => [node.id, index]));
  const ancestorIds = collectConceptDagAncestors(defaultSubjectId, nodesById);
  const rootIds = collectConceptDagRootIds(ancestorIds, nodesById, nodeOrder);
  const context = {
    nodesById,
    childMap: buildConceptDagChildMap(ancestorIds, nodesById, nodeOrder),
    renderedIds: new Set(),
  };
  const rows = [];

  (rootIds.length ? rootIds : [defaultSubjectId]).forEach((nodeId) => walkConceptDagTreeRows(nodeId, context, 0, new Set(), rows));
  const treeHtml = rows.length
    ? `<div class="concept-dag-tree__lines">${renderConceptDagRows(rows, defaultSubjectId)}</div>`
    : '<p class="concept-dag-tree__empty">No prerequisite chain available for this subject.</p>';

  return `<section class="panel concept-dag-tree-panel" aria-label="Selected prerequisite map">
      <div class="concept-dag-tree-panel__head">
        <div>
          <p class="section-label">Prerequisites</p>
        </div>
      </div>
      <div class="concept-dag-tree">${treeHtml}</div>
    </section>`;
}

function buildLandingHtml(structures, assetVersions, dag) {
  return renderNotesPageDocument({
    title: 'Adriamics Study',
    description: 'Free, structured lessons for learning mathematics, physics, and engineering one concept at a time.',
    canonicalUrl: `${siteOrigin}/study/`,
    bodyClass: 'notes-landing-page',
    mainClass: 'shell',
    mainAriaLabel: 'Home',
    mainHtml: `<section class="landing-hero panel" aria-labelledby="landing-title">
      <div class="landing-hero__intro">
        <p class="section-label">Open Sourced Education for all</p>
        <h1 id="landing-title">Learn what you need, one concept at a time.</h1>
        <p class="landing-hero__lead">Free, structured lessons that help you build understanding in order, revisit individual topics, and practice until the ideas hold together.</p>
      </div>
      <section class="landing-router" aria-labelledby="landing-router-title">
        <p class="section-label">Start here</p>
        <h2 id="landing-router-title">What do you want to learn?</h2>
        <div class="landing-subject-grid">
          <a class="landing-subject-card" href="/study/math/arithmetic/" data-notes-nav-item>
            <span class="landing-subject-card__number" aria-hidden="true">01</span>
            <span class="landing-subject-card__title">Mathematics</span>
            <span class="landing-subject-card__description">Begin with arithmetic and build toward higher mathematics.</span>
            <span class="landing-subject-card__link" aria-hidden="true">Start with Arithmetic <span>→</span></span>
          </a>
          <a class="landing-subject-card" href="/study/physics/physics-i/" data-notes-nav-item>
            <span class="landing-subject-card__number" aria-hidden="true">02</span>
            <span class="landing-subject-card__title">Physics</span>
            <span class="landing-subject-card__description">Use models, motion, and forces to explain the physical world.</span>
            <span class="landing-subject-card__link" aria-hidden="true">Start with Physics I <span>→</span></span>
          </a>
          <a class="landing-subject-card" href="/study/engineering/statics/" data-notes-nav-item>
            <span class="landing-subject-card__number" aria-hidden="true">03</span>
            <span class="landing-subject-card__title">Engineering</span>
            <span class="landing-subject-card__description">Turn first principles into useful systems and sound designs.</span>
            <span class="landing-subject-card__link" aria-hidden="true">Start with Statics <span>→</span></span>
          </a>
        </div>
      </section>
    </section>
    <section class="landing-support panel" aria-labelledby="landing-support-title">
      <div>
        <p class="section-label">Choose your next step</p>
        <h2 id="landing-support-title">Not sure where to start?</h2>
      </div>
      <div class="landing-support__actions">
        <a class="notes-action-chip" href="/study/math/arithmetic/" data-notes-nav-item>Begin a subject</a>
        <button class="notes-action-chip notes-action-chip--search" type="button" data-search-trigger aria-controls="search-panel" aria-expanded="false" data-notes-nav-item>Search for a topic</button>
        <a class="notes-action-chip" href="/study/math/arithmetic/" data-notes-nav-item>Follow prerequisites</a>
        <a class="notes-action-chip notes-action-chip--practice" href="/study/math/arithmetic/practice/" data-notes-nav-item>Practice problems</a>
        <a class="notes-action-chip" href="${githubRepoUrl}" target="_blank" rel="noreferrer" data-notes-nav-item>GitHub</a>
        <a class="notes-action-chip" href="https://github.com/sponsors/Parell" target="_blank" rel="noreferrer" data-notes-nav-item>Support</a>
      </div>
    </section>
    <section class="landing-philosophy" id="learning-path" aria-labelledby="landing-philosophy-title">
      <p class="section-label">The idea behind the notes</p>
      <h2 id="landing-philosophy-title">Learning should have a path.</h2>
      <div class="landing-philosophy__copy">
        <p>This is <strong>not</strong> a textbook. It is a <strong>structured study system</strong> designed to help you learn concepts in order, review individual topics, practice with focused problem sets, and follow guided prerequisite maps.</p>
        <p><strong>No filler.</strong> <em>No empty history.</em> Just direct learning, rigorous reasoning, and proof of understanding.</p>
        <p>If education is truly <strong>universal</strong>, anyone can become an expert. What matters is not where you start, but whether you can prove what you understand with <em>rigor</em>.</p>
      </div>
    </section>`,
    structures,
    activeStructureId: homeStructureId,
    quickActionsHtml: '',
    stylesheetHref: `notes.min.css?v=${assetVersions.notesCss}`,
    scriptHref: `notes.min.js?v=${assetVersions.notesJs}`,
  });
}

function trimBlankLines(lines) {
  let start = 0;
  let end = lines.length;

  while (start < end && !lines[start].trim()) {
    start += 1;
  }

  while (end > start && !lines[end - 1].trim()) {
    end -= 1;
  }

  return lines.slice(start, end);
}

function isPracticeMetadataStart(lines, index) {
  if (lines[index]?.trim() !== '<!--') {
    return false;
  }

  let nextIndex = index + 1;

  while (nextIndex < lines.length && !lines[nextIndex].trim()) {
    nextIndex += 1;
  }

  return nextIndex < lines.length && /^[A-Za-z0-9_-]+:\s*/.test(lines[nextIndex]);
}

function parsePracticeSolutionBlock(markdown, sourcePath, problemId) {
  const lines = String(markdown ?? '').replace(/\r\n/g, '\n').split('\n');
  const startIndex = lines.findIndex((line) => /^\s*:::solution\s*$/.test(line));

  if (startIndex < 0) {
    return {
      promptMarkdown: trimBlankLines(lines).join('\n'),
      solutionMarkdown: '',
    };
  }

  const endIndex = lines.findIndex((line, index) => index > startIndex && /^\s*:::\s*$/.test(line));

  if (endIndex < 0) {
    throw new Error(`Missing closing ::: for solution block in ${sourcePath}${problemId ? ` (${problemId})` : ''}`);
  }

  const trailing = lines.slice(endIndex + 1).filter((line) => line.trim());

  if (trailing.length) {
    throw new Error(`Unexpected content after solution block in ${sourcePath}${problemId ? ` (${problemId})` : ''}`);
  }

  return {
    promptMarkdown: trimBlankLines(lines.slice(0, startIndex)).join('\n'),
    solutionMarkdown: trimBlankLines(lines.slice(startIndex + 1, endIndex)).join('\n'),
  };
}

function validatePracticeProblemMetadata(metadata, sourcePath, problemIndex, seenProblemIds, solutionMarkdown) {
  assertRequiredPracticeFields(metadata, sourcePath, problemIndex);
  const id = String(metadata.id).trim();
  assertUniquePracticeProblemId(id, sourcePath, seenProblemIds);
  const { level, position } = parsePracticeProblemId(id, sourcePath, problemIndex);
  const type = metadata.type === undefined || metadata.type === null || String(metadata.type).trim() === ''
    ? ''
    : String(metadata.type).trim().toLowerCase();
  const derivedAnswer = String(metadata.answer ?? solutionMarkdown ?? '').trim();

  if (type === 'numeric') {
    validateNumericPracticeAnswer(id, sourcePath, derivedAnswer, metadata.tolerance);
  }

  return {
    id,
    level,
    position,
    note: String(metadata.note).trim(),
    title: String(metadata.title).trim(),
    type,
    answer: derivedAnswer,
    answerIsExplicit: metadata.answer !== undefined && metadata.answer !== null && String(metadata.answer).trim() !== '',
    exam: metadata.exam === undefined || metadata.exam === null ? '' : String(metadata.exam).trim(),
    tolerance: metadata.tolerance,
    unit: metadata.unit,
    skills: metadata.skills,
  };
}

function assertRequiredPracticeFields(metadata, sourcePath, problemIndex) {
  for (const field of ['id', 'note', 'title', 'skills']) {
    const value = metadata?.[field];
    const isMissing = Array.isArray(value)
      ? !value.length
      : value === undefined || value === null || String(value).trim() === '';

    if (isMissing) {
      throw new Error(`Missing required field "${field}" in ${sourcePath} (problem ${problemIndex + 1})`);
    }
  }

  if (!Array.isArray(metadata.skills)) {
    throw new Error(`Field "skills" must be an array in ${sourcePath} (problem ${problemIndex + 1})`);
  }
}

function assertUniquePracticeProblemId(id, sourcePath, seenProblemIds) {
  if (seenProblemIds.has(id)) {
    throw new Error(`Duplicate problem id "${id}" in ${sourcePath}; already used in ${seenProblemIds.get(id)}`);
  }

  seenProblemIds.set(id, sourcePath);
}

function validateNumericPracticeAnswer(id, sourcePath, answer, toleranceValue) {
  if (!answer || !Number.isFinite(Number(answer))) {
    throw new Error(`Numeric problem "${id}" in ${sourcePath} must use a numeric answer.`);
  }

  if (toleranceValue !== undefined && toleranceValue !== null && String(toleranceValue).trim() !== '') {
    const tolerance = Number(String(toleranceValue).trim());

    if (!Number.isFinite(tolerance) || tolerance < 0) {
      throw new Error(`Numeric problem "${id}" in ${sourcePath} must use a valid non-negative tolerance.`);
    }
  }
}

function parsePracticeProblems(markdown, sourcePath, seenProblemIds) {
  const lines = String(markdown ?? '').replace(/\r\n/g, '\n').split('\n');
  const problems = [];
  let index = 0;

  while (index < lines.length) {
    while (index < lines.length && !lines[index].trim()) {
      index += 1;
    }

    if (index >= lines.length) {
      break;
    }

    if (!isPracticeMetadataStart(lines, index)) {
      throw new Error(`Unexpected content before a problem block in ${sourcePath} on line ${index + 1}.`);
    }

    const metadataBlock = readPracticeMetadataBlock(lines, index, sourcePath);
    const metadata = parseFrontmatter(metadataBlock.text);
    index = metadataBlock.nextIndex;

    const bodyBlock = readPracticeBodyBlock(lines, index);
    index = bodyBlock.nextIndex;

    const { promptMarkdown, solutionMarkdown } = parsePracticeSolutionBlock(bodyBlock.text, sourcePath, metadata.id);
    const problem = validatePracticeProblemMetadata(metadata, sourcePath, problems.length, seenProblemIds, solutionMarkdown);

    problems.push({
      ...problem,
      promptMarkdown,
      solutionMarkdown,
      sourcePath,
    });
  }

  return problems;
}

function readPracticeMetadataBlock(lines, startIndex, sourcePath) {
  const metadataLines = [];
  let index = startIndex + 1;

  while (index < lines.length && lines[index].trim() !== '-->') {
    metadataLines.push(lines[index]);
    index += 1;
  }

  if (index >= lines.length) {
    throw new Error(`Missing closing metadata delimiter in ${sourcePath}.`);
  }

  return { text: metadataLines.join('\n'), nextIndex: index + 1 };
}

function readPracticeBodyBlock(lines, startIndex) {
  const bodyLines = [];
  let index = startIndex;

  while (index < lines.length && !isPracticeMetadataStart(lines, index)) {
    bodyLines.push(lines[index]);
    index += 1;
  }

  return { text: bodyLines.join('\n'), nextIndex: index };
}

function normalizePracticeExam(problem) {
  const explicitExam = String(problem.exam ?? '').trim().toLowerCase();

  if (explicitExam) {
    const definition = practiceExamByAlias.get(explicitExam);

    if (definition) {
      return { key: definition.key, label: definition.label };
    }
  }

  throw new Error(`Practice problem ${problem.level}.${problem.position} (${problem.sourcePath}) is missing a valid exam: ${JSON.stringify(problem.exam)}`);
}

function renderPracticeProblem(problem, practiceSourcePath, notePath) {
  const promptHtml = renderBlocks(problem.promptMarkdown, practiceSourcePath);
  const solutionHtml = problem.solutionMarkdown
    ? renderBlocks(problem.solutionMarkdown, practiceSourcePath)
    : '<p class="practice-problem__solution-empty">No solution provided.</p>';
  const skills = renderPracticeSkills(notePath, problem.skills);
  const exam = normalizePracticeExam(problem);
  const problemNumber = `${String(problem.level).trim()}.${String(problem.position).trim()}`;
  const tolerance = problem.tolerance === undefined || problem.tolerance === null || String(problem.tolerance).trim() === ''
    ? ''
    : String(problem.tolerance).trim();
  const unit = problem.unit === undefined || problem.unit === null ? '' : String(problem.unit).trim();
  const type = problem.type === undefined || problem.type === null || String(problem.type).trim() === ''
    ? ''
    : String(problem.type).trim();
  const metadataBits = [
    `<span class="practice-problem__exam">${escapeHtml(exam.label)}</span>`,
    `<span class="practice-problem__problem">Problem ${escapeHtml(problemNumber)}</span>`,
    skills || null,
    unit ? `<span>Unit ${escapeHtml(unit)}</span>` : null,
  ].filter(Boolean).join(' | ');

  return `<article class="practice-problem panel" id="${escapeHtml(problem.id)}" data-practice-problem data-exam="${escapeHtml(exam.key)}" data-problem-number="${escapeHtml(problemNumber)}" data-problem-skills="${escapeHtml(problem.skills.join(', '))}" data-problem-difficulty="${escapeHtml(getPracticeLevelLabel(problem.level))}"${type ? ` data-problem-type="${escapeHtml(type)}"` : ''}${problem.answer ? ` data-problem-answer="${escapeHtml(String(problem.answer).trim())}"` : ''}${problem.answerIsExplicit ? ' data-problem-answer-explicit' : ''}${tolerance ? ` data-problem-tolerance="${escapeHtml(tolerance)}"` : ''}${unit ? ` data-problem-unit="${escapeHtml(unit)}"` : ''}>
      <div class="practice-problem__head">
        <div>
          <h2 class="practice-problem__title"><span class="practice-problem__number">${escapeHtml(problemNumber)}</span><span class="practice-problem__title-text">${escapeHtml(problem.title)}</span></h2>
          <div class="practice-problem__meta">${metadataBits}</div>
        </div>
        <div class="practice-problem__head-actions">
          <button type="button" class="practice-problem__complete-toggle" data-practice-complete-toggle aria-pressed="false">
            <span class="practice-problem__complete-mark" aria-hidden="true"></span>
            <span class="practice-problem__complete-text">Complete</span>
          </button>
        </div>
      </div>
      <div class="practice-problem__prompt markdown-body" data-practice-prompt>
        ${promptHtml}
      </div>
      <div class="practice-problem__actions">
        <div class="practice-problem__study" data-practice-study role="group" aria-label="ChatGPT study mode">
          <label class="sr-only" for="practice-study-${escapeHtml(problem.id)}">Your work for ${escapeHtml(problem.title)}</label>
          <textarea
            id="practice-study-${escapeHtml(problem.id)}"
            class="practice-problem__study-input"
            data-practice-study-input
            rows="2"
            placeholder="Write your work here before asking ChatGPT..."
          ></textarea>
        </div>
        <div class="practice-problem__action-links" aria-label="Problem actions">
          <button type="button" class="practice-problem__text-action practice-problem__feedback" data-practice-solution-toggle data-notes-nav-item>Show solutions</button>
          <span class="practice-problem__action-separator" aria-hidden="true">-</span>
          <button type="button" class="practice-problem__text-action practice-problem__study-submit" data-practice-study-submit data-notes-nav-item>Ask ChatGPT</button>
          <span class="practice-problem__action-separator" aria-hidden="true">-</span>
          <button type="button" class="practice-problem__text-action practice-problem__worksheet-toggle" data-worksheet-problem-toggle aria-pressed="false">Add to worksheet.</button>
        </div>
      </div>
      <section class="practice-problem__solution mathjax_ignore" data-practice-solution hidden>
        <p class="section-label">Solution</p>
        <div class="markdown-body">
          ${solutionHtml}
        </div>
      </section>
    </article>`;
}

function renderPracticeFiltersHtml() {
  return `
      <section class="practice-filters" data-practice-filters aria-label="Practice filters">
        <div class="practice-filters__bar" role="toolbar" aria-label="Practice problem filters">
          <button type="button" class="practice-filters__button is-active" data-practice-filter-button data-practice-filter="all" aria-pressed="true">All</button>
          <button type="button" class="practice-filters__button" data-practice-filter-button data-practice-filter="exam-i" aria-pressed="false">Exam I</button>
          <button type="button" class="practice-filters__button" data-practice-filter-button data-practice-filter="exam-ii" aria-pressed="false">Exam II</button>
          <button type="button" class="practice-filters__button" data-practice-filter-button data-practice-filter="final" aria-pressed="false">Final</button>
          <button type="button" class="practice-filters__button" data-practice-filter-button data-practice-filter="marked" aria-pressed="false">Marked</button>
          <button type="button" class="practice-filters__button" data-practice-filter-button data-practice-filter="missed" aria-pressed="false">Missed</button>
        </div>
      </section>`;
}

function renderPracticeProgressHtml(totalProblems) {
  return `
      <section class="practice-progress" data-practice-progress role="progressbar" aria-label="Practice completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-valuetext="0 of ${escapeHtml(String(totalProblems))} problems completed">
        <div class="practice-progress__head">
          <p class="practice-progress__summary" data-practice-progress-summary>0 of ${escapeHtml(String(totalProblems))} completed</p>
        </div>
        <div class="practice-progress__track" aria-hidden="true">
          <div class="practice-progress__fill" data-practice-progress-fill></div>
        </div>
      </section>`;
}

function renderWorksheetControlsHtml(title, referenceHtml = '') {
  return `<details class="worksheet-controls panel" data-worksheet-controls aria-labelledby="worksheet-title">
    <summary class="worksheet-controls__summary"><span class="worksheet-controls__title" id="worksheet-title">Create worksheet</span></summary>
    <div class="worksheet-controls__body"><div class="worksheet-controls__grid">
      <label for="worksheet-title-input">Title<input id="worksheet-title-input" name="worksheet-title" type="text" data-worksheet-title value="${escapeHtml(title)}" /></label>
    </div>
    <div class="worksheet-controls__actions"><button type="button" class="practice-problem__text-action worksheet-action-link" data-worksheet-select-all>Select all</button><button type="button" class="practice-problem__text-action worksheet-action-link" data-worksheet-clear>Clear</button><button type="button" class="practice-problem__text-action worksheet-action-link" data-worksheet-print="student">Print worksheet</button><button type="button" class="practice-problem__text-action worksheet-action-link" data-worksheet-print="answers">Print answer key</button>${referenceHtml ? '<button type="button" class="practice-problem__text-action worksheet-action-link" data-worksheet-reference-toggle aria-pressed="false">Reference sheet: Off</button>' : ''}</div>
    <p class="worksheet-controls__error" data-worksheet-error role="alert" hidden>Select at least one problem.</p>
    <div class="worksheet-selection" aria-labelledby="worksheet-selection-title"><h3 id="worksheet-selection-title">Selected problems</h3><p class="worksheet-selection__empty" data-worksheet-empty>No problems selected.</p><ol class="worksheet-selection__list" data-worksheet-selected-list></ol></div>
    ${referenceHtml ? `<template data-worksheet-reference-template><section class="worksheet-reference"><h2>${escapeHtml(referenceHtml.heading)}</h2><div class="markdown-body">${referenceHtml.html}</div></section></template>` : ''}
    </div></details>`;
}

function renderGroupedPracticeProblemsHtml(problemGroups, practiceSourcePath, notePath) {
  return problemGroups.filter((group) => group.items.length > 0).map((group) => {
    const levelProblemHtml = group.items.map(({ problem }) => renderPracticeProblem(problem, practiceSourcePath, notePath)).join('');

    return `<section class="practice-level practice-level--level-${escapeHtml(String(group.level))} panel" data-practice-level="${escapeHtml(String(group.level))}" aria-labelledby="practice-level-${group.level}">
        <div class="practice-level__head">
          <div class="practice-level__eyebrow">
            <p class="section-label">Difficulty</p>
            <h2 id="practice-level-${escapeHtml(String(group.level))}">${escapeHtml(group.label)}</h2>
          </div>
          <div class="practice-level__badge" aria-hidden="true">
            <span class="practice-level__badge-label">Level</span>
            <span class="practice-level__badge-value">${escapeHtml(String(group.level))}</span>
          </div>
        </div>
        <div class="practice-problem-list practice-problem-list--grouped">
          ${levelProblemHtml}
        </div>
      </section>`;
  }).join('');
}

function renderPracticePageHtml({
  title,
  description,
  canonicalUrl,
  noteUrl,
  editUrl,
  sourceUrl,
  lastModifiedDate = null,
  contributorsHtml = '',
  notePath,
  practiceSourcePath,
  structures,
  structure,
  outputDir,
  assetVersions,
  problems,
  referenceHtml = null,
}) {
  const stylesheetHref = `${getRelativeNotesAssetHref(outputDir, 'notes.min.css')}?v=${assetVersions.notesCss}`;
  const scriptHref = `${getRelativeNotesAssetHref(outputDir, 'notes.min.js')}?v=${assetVersions.notesJs}`;
  const totalProblems = problems.length;
  const problemGroups = groupPracticeProblems(problems);
  const problemHtml = renderGroupedPracticeProblemsHtml(problemGroups, practiceSourcePath, notePath);
  const quickActionsHtml = renderQuickActions({ backToNoteUrl: noteUrl });
  const mainHtml = `
    <section class="notes-viewer panel practice-viewer" data-practice-page>
      <div class="viewer-head">
        <div>
          <h1>${escapeHtml(title)}</h1>
          ${renderMetadataLine('viewer-meta practice-note-meta-line', sourceUrl, lastModifiedDate)}
          ${contributorsHtml}
        </div>
        <div class="viewer-head__actions">
          <a class="suggest-edit-link notes-action-chip" href="${escapeHtml(editUrl)}" target="_blank" rel="noreferrer" data-notes-nav-item>Suggest edit</a>
        </div>
      </div>
      <section class="practice-controls panel" aria-label="Practice filters and completion">
        ${renderPracticeFiltersHtml()}
        ${renderPracticeProgressHtml(totalProblems)}
      </section>
      ${renderWorksheetControlsHtml(title.replace(/\s+Practice$/, ''), referenceHtml)}
      <div class="practice-problem-list">
        ${problemHtml}
      </div>
    </section>`;

  return renderNotesPageDocument({
    title: `${title} | Adriamics Study`,
    description,
    canonicalUrl,
    bodyClass: 'practice-page',
    mainClass: 'shell practice-layout',
    mainAriaLabel: 'Practice problems',
    mainHtml,
    structures,
    activeStructureId: structure.id,
    activePagePath: notePath,
    quickActionsHtml,
    stylesheetHref,
    scriptHref,
    headHtml: '<script>document.documentElement.classList.add("notes-practice-boot");</script>',
    extraHead: renderMathJaxConfig(outputDir, assetVersions),
  });
}

async function loadManifest() {
  const manifestText = await fs.readFile(manifestPath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(manifestText, sandbox, { filename: manifestPath });
  const manifest = sandbox.window.ADRIAMICS_STUDY_MANIFEST;

  if (!manifest || !Array.isArray(manifest.structures)) {
    throw new Error('Could not load notes manifest.');
  }

  return manifest;
}

function flattenNotes(structures) {
  const notes = [];

  function visit(node, structure) {
    if (!node || typeof node !== 'object') {
      return;
    }

    if (node.path) {
      notes.push({
        structure,
        structureId: structure.id,
        structureTitle: structure.title,
        title: node.title,
        path: node.path,
      });
    }

    (node.children ?? []).forEach((child) => visit(child, structure));
  }

  structures.forEach((structure) => visit(structure, structure));
  return notes;
}

async function listMarkdownFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const paths = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      return listMarkdownFiles(entryPath);
    }

    if (!entry.isFile() || !entry.name.endsWith('.md')) {
      return [];
    }

    return [entryPath];
  }));

  return paths.flat().sort();
}

async function validateManifestCoverage(notes) {
  const manifestPaths = notes.map((note) => note.path);
  const uniqueManifestPaths = new Set(manifestPaths);
  const duplicatePaths = manifestPaths
    .filter((notePath, index) => manifestPaths.indexOf(notePath) !== index);
  const invalidManifestPaths = [...uniqueManifestPaths]
    .filter((notePath) => !isFolderLayoutNotePath(notePath))
    .sort();
  const missingFiles = [];

  for (const notePath of uniqueManifestPaths) {
    if (!(await exists(getNoteSourcePath(notePath)))) {
      missingFiles.push(notePath);
    }
  }

  const errors = [];

  if (duplicatePaths.length) {
    errors.push(`Duplicate manifest note paths:\n${[...new Set(duplicatePaths)].sort().map((notePath) => `- ${notePath}`).join('\n')}`);
  }

  if (invalidManifestPaths.length) {
    errors.push(`Manifest note paths must use the folder layout source/<group>/<slug>/<slug>.md:\n${invalidManifestPaths.map((notePath) => `- ${notePath}`).join('\n')}`);
  }

  if (missingFiles.length) {
    errors.push(`Manifest note paths with no markdown file:\n${missingFiles.map((notePath) => `- ${notePath}`).join('\n')}`);
  }

  if (errors.length) {
    throw new Error(errors.join('\n\n'));
  }
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function loadNoteDocuments(notes) {
  const noteDocuments = new Map();

  for (const note of notes) {
    const sourcePath = getNoteSourcePath(note.path);
    let markdown = repairMojibake(await fs.readFile(sourcePath, 'utf8'));
    const { metadata, body } = splitFrontmatter(markdown);
    const bodyWithoutManualToc = stripManualTableOfContents(body);
    const bodyWithoutTitle = stripLeadingTitleHeading(bodyWithoutManualToc, note.title);

    noteDocuments.set(note.path, {
      sourcePath,
      metadata: metadata ?? {},
      bodyForDisplay: bodyWithoutTitle,
    });
  }

  return noteDocuments;
}

async function loadPracticeProblems(notes) {
  const noteBySourcePath = new Map(notes.map((note) => [getNoteSourcePath(note.path), note]));
  const seenProblemIds = new Map();
  const practiceSourcePaths = (await listMarkdownFiles(path.join(notesRoot, 'source')))
    .filter((sourcePath) => sourcePath.endsWith('-problems.md'));
  const practiceByNotePath = new Map();

  for (const practiceSourcePath of practiceSourcePaths) {
    const noteSourcePath = practiceSourcePath.replace(/-problems\.md$/i, '.md');
    const note = noteBySourcePath.get(noteSourcePath);

    if (!note) {
      continue;
    }

    const markdown = repairMojibake(await fs.readFile(practiceSourcePath, 'utf8'));
    const problems = parsePracticeProblems(markdown, practiceSourcePath, seenProblemIds);

    if (!problems.length) {
      continue;
    }

    practiceByNotePath.set(note.path, {
      note,
      sourcePath: practiceSourcePath,
      problems,
    });
  }

  return practiceByNotePath;
}

async function removeStaleGeneratedPages(notes, practiceByNotePath) {
  const expectedOutputDirs = new Set([
    ...notes.map((note) => getSubjectOutputDir(note.path)),
    ...[...practiceByNotePath.values()].map((practice) => getPracticeOutputDir(practice.note.path)),
  ]);

  async function visit(dirPath) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const indexEntry = entries.find((entry) => entry.isFile() && entry.name === 'index.html');

    if (indexEntry) {
      const sourceFile = getGeneratedSourcePathFromOutputDir(dirPath);

      if (!expectedOutputDirs.has(dirPath) || (!sourceFile || !(await exists(sourceFile)))) {
        await fs.rm(path.join(dirPath, indexEntry.name), { force: true });
      }
    }

    await Promise.all(entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => visit(path.join(dirPath, entry.name))));
  }

  const generatedRoots = new Set(
    [...expectedOutputDirs].map((outputDir) => {
      const relativePath = toPosix(path.relative(notesRoot, outputDir));
      return path.join(notesRoot, relativePath.split('/')[0]);
    }),
  );

  await Promise.all([...generatedRoots].map(async (generatedRoot) => {
    if (await exists(generatedRoot)) {
      await visit(generatedRoot);
    }
  }));
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function buildNotePage(note, urlPath, structures, assetVersions, noteDocument, conceptDag, practice = null, practiceProblemIndex = new Map()) {
  const sourcePath = noteDocument.sourcePath;
  const relativeSourcePath = toPosix(path.relative(repoRoot, sourcePath));
  const title = note.title;
  const bodyForDisplay = noteDocument.bodyForDisplay;
  const summary = getSummary(bodyForDisplay) || title;
  const description = summary.length > 160 ? `${summary.slice(0, 157)}...` : summary;
  const canonicalUrl = `${siteOrigin}${urlPath}`;
  const editUrl = buildContributeIssueUrl(relativeSourcePath, title);
  const { sourceUrl, lastModifiedDate, contributorsHtml } = getSourceMetadata(relativeSourcePath);
  const conceptDagSubjectId = getConceptDagSubjectIdFromNotePath(note.path);
  const conceptDagHtml = conceptDag ? buildConceptDagTreeHtml(conceptDag, conceptDagSubjectId) : '';
  const lessonPath = `study/${note.path}`;
  const practiceExampleContext = createPracticeExampleContext(
    lessonPath,
    practice?.problems ?? [],
    practiceProblemIndex,
  );
  const bodyHtml = renderBlocks(bodyForDisplay, lessonPath, practiceExampleContext);
  const pageHtml = buildNoteHtml({
    title,
    description,
    bodyHtml,
    beforeBodyHtml: conceptDagHtml,
    afterBodyHtml: '',
    canonicalUrl,
    editUrl,
    sourceUrl,
    lastModifiedDate,
    contributorsHtml,
    structures,
    structure: note.structure,
    notePath: note.path,
    practiceUrl: practice ? getPracticeUrl(note.path) : null,
    outputDir: getSubjectOutputDir(note.path),
    assetVersions,
    interactive: noteDocument.metadata.interactive,
  });
  const outputPath = path.join(getSubjectOutputDir(note.path), 'index.html');

  await ensureDir(outputPath);
  await fs.writeFile(outputPath, pageHtml, 'utf8');

  return {
    title,
    subject: note.structureTitle,
    url: urlPath,
    summary,
    text: trimMarkdownText([
      title,
      stripSearchOnlySections(bodyForDisplay),
      ...practiceExampleContext.resolvedProblems.flatMap((problem) => [
        problem.title,
        problem.promptMarkdown,
        problem.solutionMarkdown,
      ]),
    ].join(' ')),
  };
}

async function buildPracticePage(practice, structures, assetVersions, noteDocument = null) {
  const sourcePath = practice.sourcePath;
  const note = practice.note;
  const title = `${note.title} Practice`;
  const description = `${practice.problems.length} practice problem${practice.problems.length === 1 ? '' : 's'}`;
  const canonicalUrl = `${siteOrigin}${getPracticeUrl(note.path)}`;
  const relativeSourcePath = toPosix(path.relative(repoRoot, sourcePath));
  const editUrl = buildContributeIssueUrl(relativeSourcePath, title);
  const { sourceUrl, lastModifiedDate, contributorsHtml } = getSourceMetadata(relativeSourcePath);
  const pageHtml = renderPracticePageHtml({
    title,
    description,
    canonicalUrl,
    noteUrl: getNoteUrl(note.path),
    editUrl,
    sourceUrl,
    lastModifiedDate,
    contributorsHtml,
    notePath: note.path,
    practiceSourcePath: sourcePath,
    structures,
    structure: note.structure,
    outputDir: getPracticeOutputDir(note.path),
    assetVersions,
    problems: practice.problems,
    referenceHtml: (() => {
      const reference = extractPracticeReferenceSection(noteDocument?.bodyForDisplay ?? '');
      return reference ? { ...reference, html: renderBlocks(reference.markdown, noteDocument?.sourcePath ?? note.path) } : null;
    })(),
  });
  const outputPath = path.join(getPracticeOutputDir(note.path), 'index.html');

  await ensureDir(outputPath);
  await fs.writeFile(outputPath, pageHtml, 'utf8');

  return {
    url: getPracticeUrl(note.path),
  };
}

async function buildLandingPage(structures, assetVersions, paths) {
  await fs.writeFile(path.join(notesRoot, 'index.html'), buildLandingHtml(structures, assetVersions, paths), 'utf8');
}

async function buildSearchIndex(entries) {
  const json = `${JSON.stringify(entries, null, 2)}\n`;
  await fs.writeFile(path.join(notesRoot, 'search-index.json'), json, 'utf8');
}

async function buildSitemap(noteUrls, practiceUrls) {
  const urls = [
    `${siteOrigin}/study/`,
    ...noteUrls.map((urlPath) => `${siteOrigin}${urlPath}`),
    ...practiceUrls.map((urlPath) => `${siteOrigin}${urlPath}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`;

  await fs.writeFile(path.join(repoRoot, 'sitemap.xml'), xml, 'utf8');
}

async function main() {
  const manifest = await loadManifest();
  const conceptDag = await loadConceptDag();
  const notes = flattenNotes(manifest.structures);
  const assetVersions = await loadAssetVersions();
  await validateManifestCoverage(notes);
  const { urls, practiceUrls, searchEntries, practiceByNotePath } = await buildNotePages(
    notes,
    manifest.structures,
    assetVersions,
    conceptDag,
  );
  await removeStaleGeneratedPages(notes, practiceByNotePath);
  await buildLandingPage(manifest.structures, assetVersions, conceptDag);
  await buildSearchIndex(searchEntries);
  await buildSitemap(urls, practiceUrls);
}

async function loadAssetVersions() {
  const [notesCss, notesJs, mathjax] = await Promise.all([
    getAssetVersion(path.join(notesRoot, 'notes.min.css')),
    getAssetVersion(path.join(notesRoot, 'notes.min.js')),
    getAssetVersion(path.join(notesRoot, MATHJAX_ASSET_PATH)),
  ]);

  return { notesCss, notesJs, mathjax };
}

async function buildNotePages(notes, structures, assetVersions, conceptDag) {
  const urls = notes.map((note) => getNoteUrl(note.path));
  const [noteDocuments, practiceByNotePath] = await Promise.all([
    loadNoteDocuments(notes),
    loadPracticeProblems(notes),
  ]);
  const practiceUrls = [];
  const searchEntries = [];
  const practiceProblemIndex = new Map(
    [...practiceByNotePath.values()].flatMap((practice) => (
      practice.problems.map((problem) => [problem.id, problem])
    )),
  );

  for (const [index, note] of notes.entries()) {
    const practice = practiceByNotePath.get(note.path);
    const noteDocument = noteDocuments.get(note.path);

    if (!noteDocument) {
      throw new Error(`Missing loaded note content for ${note.path}.`);
    }

    searchEntries.push(await buildNotePage(
      note,
      urls[index],
      structures,
      assetVersions,
      noteDocument,
      conceptDag,
      practice,
      practiceProblemIndex,
    ));

    if (practice) {
      const practicePage = await buildPracticePage(practice, structures, assetVersions, noteDocument);
      practiceUrls.push(practicePage.url);
    }
  }

  return { urls, practiceUrls, searchEntries, practiceByNotePath };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  await main();
}

export {
  MATHJAX_ASSET_PATH,
  MATHJAX_SVG_BLACKER,
  MATHJAX_SVG_FONT_CACHE,
  collectConceptDagAncestors,
  collectConceptDagRootIds,
  createPracticeExampleContext,
  getSummary,
  normalizePracticeExam,
  parseFrontmatter,
  parsePracticeProblems,
  renderBlocks,
  renderFloatingActions,
  rewriteInternalHref,
  slugifyHeading,
  stripSearchOnlySections,
};
