const searchTriggers = Array.from(document.querySelectorAll('[data-search-trigger]'));
const searchPanel = document.getElementById('search-panel');
const searchCloseButton = document.getElementById('search-close');
const searchInput = document.getElementById('search-input');
const searchStatus = document.getElementById('search-status');
const searchResults = document.getElementById('search-results');
const subjectsTriggers = Array.from(document.querySelectorAll('[data-subjects-trigger]'));
const subjectsPanel = document.getElementById('subjects-panel');
const subjectsCloseButton = document.getElementById('subjects-close');
const noteContent = document.getElementById('note-content');
const lessonBody = document.querySelector('[data-notes-lesson-body]');
const isPracticePage = document.querySelector('[data-practice-page]');
const lessonTocLinks = Array.from(document.querySelectorAll('[data-notes-toc-link]'));
const lessonSectionTocPanels = Array.from(document.querySelectorAll('[data-notes-section-toc-panel]'));
const lessonSubtopicLinks = Array.from(document.querySelectorAll('[data-notes-subtopic-link]'));
const practiceFilterButtons = Array.from(document.querySelectorAll('[data-practice-filter-button]'));
const practiceProgressBar = document.querySelector('[data-practice-progress]');
const practiceProgressSummary = document.querySelector('[data-practice-progress-summary]');
const practiceLevelSections = Array.from(document.querySelectorAll('[data-practice-level]'));
const practiceProblemCards = Array.from(document.querySelectorAll('[data-practice-problem]'));
const worksheetControls = document.querySelector('[data-worksheet-controls]');
const worksheetError = document.querySelector('[data-worksheet-error]');
const worksheetSelectedList = document.querySelector('[data-worksheet-selected-list]');
const worksheetEmpty = document.querySelector('[data-worksheet-empty]');
let worksheetSelectedIds = [];
const worksheetSpacing = new Map();
let worksheetDraggedId = null;
const subjectHeaderLinks = Array.from(document.querySelectorAll('[data-subject-id]'));
const themeToggleButtons = Array.from(document.querySelectorAll('[data-theme-toggle]'));
const notesScriptUrl = document.currentScript?.src
  || Array.from(document.scripts).find((script) => /\/notes\.js(?:\?|$)/.test(script.src))?.src
  || window.location.href;
const NOTES_BASE_URL = new URL('.', notesScriptUrl);
const SEARCH_INDEX_URL = new URL('search-index.json', NOTES_BASE_URL).href;
const NOTES_SESSION_STORAGE_KEY = 'adriamics-study:last-pages-by-subject';
const NOTES_THEME_STORAGE_KEY = 'adriamics-study:contrast-mode';
const PRACTICE_COMPLETION_STORAGE_KEY_PREFIX = 'adriamics-study:practice-completion:';
const PRACTICE_FILTER_STORAGE_KEY_PREFIX = 'adriamics-study:practice-filter:';
const PRACTICE_FILTER_VALUES = new Set(['all', 'exam-i', 'exam-ii', 'final', 'marked', 'missed']);
const PAGE_READY_FALLBACK_MS = 5000;

let searchIndex = [];
let searchIndexPromise = null;
let searchIndexReady = false;
let searchIndexFailed = false;
let activeSearchTrigger = searchTriggers[0] ?? null;
let activeSubjectsTrigger = subjectsTriggers[0] ?? null;
let activeSearchResultIndex = -1;
let activePracticeFilter = 'all';
const contributorCopyResetTimers = new WeakMap();

function getSessionStorage() {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function readFromStorage(storageGetter, storageKey, reader, fallback = null) {
  try {
    const storage = storageGetter();
    if (!storage || !storageKey) return fallback;
    return reader(storage);
  } catch {
    return fallback;
  }
}

function writeToStorage(storageGetter, storageKey, writer) {
  try {
    const storage = storageGetter();
    if (!storage || !storageKey) return false;
    writer(storage);
    return true;
  } catch {
    return false;
  }
}

function readLastPagesBySubject() {
  return readFromStorage(getSessionStorage, NOTES_SESSION_STORAGE_KEY, (storage) => {
    const raw = storage.getItem(NOTES_SESSION_STORAGE_KEY);

    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  }, {});
}

function writeLastPagesBySubject(state) {
  writeToStorage(getSessionStorage, NOTES_SESSION_STORAGE_KEY, (storage) => {
    storage.setItem(NOTES_SESSION_STORAGE_KEY, JSON.stringify(state));
  });
}

function getLocalStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function getScopedStorageKey(prefix, scope) {
  const normalizedScope = String(scope ?? '').trim();
  return normalizedScope ? `${prefix}${normalizedScope}` : null;
}

function readStoredStringSet(storageKey) {
  return readFromStorage(getLocalStorage, storageKey, (storage) => {
    const raw = storage.getItem(storageKey);

    if (!raw) {
      return new Set();
    }

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return new Set();
    }

    const values = parsed
      .map((value) => (typeof value === 'string' ? value.trim() : ''))
      .filter(Boolean);

    return new Set(values);
  }, new Set());
}

function writeStoredStringSet(storageKey, values) {
  writeToStorage(getLocalStorage, storageKey, (storage) => {
    storage.setItem(storageKey, JSON.stringify(Array.from(values)));
  });
}

function readStoredString(storageKey) {
  return readFromStorage(getLocalStorage, storageKey, (storage) => {
    return String(storage.getItem(storageKey) ?? '').trim();
  }, '');
}

function writeStoredString(storageKey, value) {
  writeToStorage(getLocalStorage, storageKey, (storage) => {
    storage.setItem(storageKey, String(value ?? ''));
  });
}

async function copyTextToClipboard(text) {
  const value = String(text ?? '');

  if (!value) {
    return false;
  }

  await navigator.clipboard.writeText(value);
  return true;
}

function showContributorCopiedState(button) {
  const originalLabel = String(button.dataset.copyLabel ?? button.textContent ?? '').trim();

  if (!originalLabel) {
    return;
  }

  const previousTimer = contributorCopyResetTimers.get(button);

  if (previousTimer) {
    window.clearTimeout(previousTimer);
  }

  button.textContent = 'Copied';
  button.setAttribute('aria-label', `Copied contributor email ${button.dataset.copyText ?? ''}`);
  button.setAttribute('title', 'Copied');

  const resetTimer = window.setTimeout(() => {
    button.textContent = originalLabel;
    button.setAttribute('aria-label', `Copy contributor email ${button.dataset.copyText ?? ''}`);
    button.setAttribute('title', 'Copy email');
    contributorCopyResetTimers.delete(button);
  }, 1500);

  contributorCopyResetTimers.set(button, resetTimer);
}

function readThemePreference() {
  return ['sepia', 'light'].includes(readStoredString(NOTES_THEME_STORAGE_KEY));
}

function getThemeToggleLabel(isSepia) {
  return isSepia ? 'Dark' : 'Light';
}

function getThemeToggleAriaLabel(isSepia) {
  return isSepia ? 'Switch to dark mode' : 'Switch to light mode';
}

function writeThemePreference(isSepia) {
  writeToStorage(getLocalStorage, NOTES_THEME_STORAGE_KEY, (storage) => {
    storage.setItem(NOTES_THEME_STORAGE_KEY, isSepia ? 'light' : 'default');
  });
}

function getPracticeCompletionStorageKey() {
  return isPracticePage ? getScopedStorageKey(PRACTICE_COMPLETION_STORAGE_KEY_PREFIX, window.location.pathname) : null;
}

function loadPracticeCompletionIds() {
  const storageKey = getPracticeCompletionStorageKey();
  return readStoredStringSet(storageKey);
}

function savePracticeCompletionIds(ids) {
  writeStoredStringSet(getPracticeCompletionStorageKey(), ids);
}

function getPracticeFilterStorageKey() {
  return isPracticePage ? getScopedStorageKey(PRACTICE_FILTER_STORAGE_KEY_PREFIX, window.location.pathname) : null;
}

function loadPracticeFilter() {
  const storageKey = getPracticeFilterStorageKey();

  const normalized = readStoredString(storageKey).toLowerCase();
  return PRACTICE_FILTER_VALUES.has(normalized) ? normalized : 'all';
}

function getPracticeFilterFromUrl() {
  const value = String(new URL(window.location.href).searchParams.get('filter') ?? '').trim().toLowerCase();
  return PRACTICE_FILTER_VALUES.has(value) ? value : null;
}

function savePracticeFilter(value) {
  writeStoredString(getPracticeFilterStorageKey(), value);
}

function getPracticeCompletionToggle(card) {
  return card.querySelector('[data-practice-complete-toggle]');
}

function setPracticeCardCompletion(card, isComplete) {
  const toggle = getPracticeCompletionToggle(card);

  card.classList.toggle('is-complete', isComplete);

  if (toggle) {
    toggle.setAttribute('aria-pressed', isComplete ? 'true' : 'false');
  }
}

function isPracticeCardCompleted(card) {
  return card.classList.contains('is-complete');
}

function isPracticeCardVisible(card, value) {
  switch (value) {
    case 'exam-i':
    case 'exam-ii':
    case 'final':
      return (card.dataset.exam ?? '') === value;
    case 'marked':
      return isPracticeCardCompleted(card);
    case 'missed':
      return !isPracticeCardCompleted(card);
    case 'all':
    default:
      return true;
  }
}

function syncPracticeFilterButtons(value) {
  practiceFilterButtons.forEach((button) => {
    const isActive = button.dataset.practiceFilter === value;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function renderPracticeFilter(value) {
  if (!isPracticePage) {
    return;
  }

  const normalized = PRACTICE_FILTER_VALUES.has(value) ? value : 'all';
  const visibleLevelSections = new Set();

  practiceProblemCards.forEach((card) => {
    const isVisible = isPracticeCardVisible(card, normalized);
    card.hidden = !isVisible;

    const levelSection = card.closest('[data-practice-level]');

    if (levelSection && isVisible) {
      visibleLevelSections.add(levelSection);
    }
  });

  practiceLevelSections.forEach((section) => {
    section.hidden = !visibleLevelSections.has(section);
  });

  activePracticeFilter = normalized;
  syncPracticeFilterButtons(normalized);
}

function revealPageWhenReady(element, bootClass) {
  if (!element) {
    return;
  }

  const mathJaxReady = window.__NOTES_MATHJAX_READY
    || window.MathJax?.startup?.promise
    || Promise.resolve();
  let timeoutId = null;
  const fallback = new Promise((resolve) => {
    timeoutId = window.setTimeout(resolve, PAGE_READY_FALLBACK_MS);
  });

  Promise.race([
    Promise.resolve(mathJaxReady).catch(() => {}),
    fallback,
  ]).finally(() => {
    if (timeoutId !== null) {
      window.clearTimeout(timeoutId);
    }
    document.documentElement.classList.remove(bootClass);
  });
}

function updatePracticeProgressUi(completedCount, totalCount) {
  if (practiceProgressBar) {
    const progress = totalCount > 0 ? completedCount / totalCount : 0;
    practiceProgressBar.style.setProperty('--practice-progress', String(Math.max(0, Math.min(1, progress))));
    practiceProgressBar.setAttribute('aria-valuenow', String(Math.round(Math.max(0, Math.min(100, progress * 100)))));
    practiceProgressBar.setAttribute('aria-valuetext', `${completedCount} of ${totalCount} problems completed`);
  }

  if (practiceProgressSummary) {
    practiceProgressSummary.textContent = `${completedCount} of ${totalCount} completed`;
  }
}

function renderPracticeCompletionState(completedIds) {
  if (!isPracticePage) {
    return;
  }

  const completedSet = completedIds instanceof Set ? completedIds : new Set(completedIds);
  let completedCount = 0;

  practiceProblemCards.forEach((card) => {
    const isComplete = Boolean(card.id) && completedSet.has(card.id);

    setPracticeCardCompletion(card, isComplete);

    if (isComplete) {
      completedCount += 1;
    }
  });

  updatePracticeProgressUi(completedCount, practiceProblemCards.length);
}

function syncPracticeCompletionState() {
  if (!isPracticePage) {
    return;
  }

  renderPracticeCompletionState(loadPracticeCompletionIds());
  renderPracticeFilter(activePracticeFilter);
}

function savePracticeCompletionState() {
  if (!isPracticePage) {
    return;
  }

  const completedIds = new Set();
  let completedCount = 0;

  practiceProblemCards.forEach((card) => {
    const isComplete = getPracticeCompletionToggle(card)?.getAttribute('aria-pressed') === 'true';

    setPracticeCardCompletion(card, Boolean(isComplete));

    if (isComplete && card.id) {
      completedIds.add(card.id);
      completedCount += 1;
    }
  });

  savePracticeCompletionIds(completedIds);
  updatePracticeProgressUi(completedCount, practiceProblemCards.length);
  renderPracticeFilter(activePracticeFilter);
}

function getWorksheetCards() {
  const cardsById = new Map(practiceProblemCards.map((card) => [card.id, card]));
  return worksheetSelectedIds.map((id) => cardsById.get(id)).filter(Boolean);
}

const WORKSHEET_SPACING_DEFAULTS = { direct: 3, integrated: 5, applied: 7, challenge: 10 };

function worksheetSpacingDefault(card) {
  const difficulty = String(card?.dataset.problemDifficulty ?? '').trim().toLowerCase();
  return WORKSHEET_SPACING_DEFAULTS[difficulty] ?? 3;
}

function ensureWorksheetSpacing(card) {
  if (card?.id && !worksheetSpacing.has(card.id)) worksheetSpacing.set(card.id, worksheetSpacingDefault(card));
  return worksheetSpacing.get(card?.id) ?? 3;
}

function setWorksheetSelection(ids) {
  const available = new Set(practiceProblemCards.map((card) => card.id).filter(Boolean));
  worksheetSelectedIds = [...new Set(ids)].filter((id) => available.has(id));
  worksheetSelectedIds.forEach((id) => {
    const card = practiceProblemCards.find((candidate) => candidate.id === id);
    ensureWorksheetSpacing(card);
  });

  practiceProblemCards.forEach((card) => {
    const toggle = card.querySelector('[data-worksheet-problem-toggle]');
    const selected = worksheetSelectedIds.includes(card.id);

    if (toggle) {
      toggle.textContent = selected ? 'Remove from worksheet.' : 'Add to worksheet.';
      toggle.setAttribute('aria-pressed', String(selected));
    }
  });
  renderWorksheetSelection();
}

function renderWorksheetSelection() {
  if (!worksheetControls) {
    return;
  }

  const count = worksheetSelectedIds.length;

  if (count) {
    worksheetError.hidden = true;
  }

  if (!worksheetSelectedList) {
    return;
  }

  worksheetSelectedList.innerHTML = '';
  worksheetEmpty.hidden = count > 0;
  worksheetSelectedIds.forEach((id) => {
    const card = practiceProblemCards.find((candidate) => candidate.id === id);
    if (!card) return;
    const item = document.createElement('li');
    item.className = 'worksheet-selection__item';
    item.draggable = true;
    item.dataset.worksheetSelectedId = id;
    const label = document.createElement('span');
    label.className = 'worksheet-selection__label';
    label.textContent = `${card.dataset.problemNumber ?? ''}. ${card.querySelector('.practice-problem__title-text')?.textContent?.trim() || 'Problem'}`;
    const spacingLabel = document.createElement('label');
    spacingLabel.className = 'worksheet-selection__spacing';
    spacingLabel.textContent = 'Spacing';
    const spacingInput = document.createElement('input');
    spacingInput.type = 'number';
    spacingInput.min = '1';
    spacingInput.max = '20';
    spacingInput.step = '1';
    spacingInput.value = String(ensureWorksheetSpacing(card));
    spacingInput.dataset.worksheetSpacingId = id;
    spacingLabel.append(spacingInput);
    const controls = document.createElement('span');
    controls.className = 'worksheet-selection__actions';
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'practice-problem__text-action worksheet-action-link';
    remove.dataset.worksheetRemoveId = id;
    remove.textContent = 'Remove';
    remove.setAttribute('aria-label', `Remove ${label.textContent}`);
    controls.append(remove);
    item.append(label, spacingLabel, controls);
    worksheetSelectedList.append(item);
  });
}

function worksheetValue(selector, fallback) {
  return worksheetControls?.querySelector(selector)?.value ?? fallback;
}

function renderWorksheetPrint(mode, cards) {
  let container = document.querySelector('[data-worksheet-print-container]');
  if (!container) {
    container = document.createElement('section');
    container.dataset.worksheetPrintContainer = '';
    document.body.append(container);
  }
  const title = worksheetValue('[data-worksheet-title]', 'Worksheet');
  const includeReference = worksheetControls?.querySelector('[data-worksheet-reference-toggle]')?.getAttribute('aria-pressed') === 'true';
  const reference = includeReference ? worksheetControls?.querySelector('[data-worksheet-reference-template]')?.content.cloneNode(true) : null;
  const escapePrintText = (value) => value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const headerFields = mode === 'student'
    ? '<div class="worksheet-print__fields"><span>Name: ______________________________</span><span>Date: ______________</span></div>'
    : '<p class="worksheet-print__kind">Answer key</p>';
  const header = `<header class="worksheet-print__header"><h1>${escapePrintText(title)}</h1>${headerFields}</header>`;
  container.className = `worksheet-print worksheet-print--${mode}`;
  container.innerHTML = header;
  if (reference) container.append(reference);
  const list = document.createElement('ol');
  list.className = 'worksheet-print__list';
  cards.forEach((card) => {
    const item = document.createElement('li');
    item.className = 'worksheet-print__problem';
    const heading = document.createElement('h2');
    heading.textContent = card.querySelector('.practice-problem__title-text')?.textContent?.trim() || 'Problem';
    item.append(heading);
    const prompt = card.querySelector('[data-practice-prompt]');
    if (prompt) {
      const promptClone = prompt.cloneNode(true);
      promptClone.classList.add('worksheet-print__prompt');
      item.append(promptClone);
    }
    if (mode === 'answers') {
      const answer = document.createElement('div');
      answer.className = 'worksheet-print__answer markdown-body';
      answer.innerHTML = card.hasAttribute('data-problem-answer-explicit')
        ? (card.dataset.problemAnswer || '<p>No answer provided.</p>')
        : (card.querySelector('[data-practice-solution] .markdown-body')?.innerHTML || '<p>No solution provided.</p>');
      item.append(answer);
    } else {
      const workspace = document.createElement('div');
      workspace.className = 'worksheet-print__workspace';
      workspace.style.setProperty('--worksheet-spacing-lines', String(worksheetSpacing.get(card.id) ?? worksheetSpacingDefault(card)));
      item.append(workspace);
    }
    list.append(item);
  });
  container.append(list);
  container.hidden = false;
  document.body.classList.add('is-printing-worksheet');
  window.MathJax?.typesetPromise?.([container]).catch(() => {});
}

function printWorksheet(mode) {
  const cards = getWorksheetCards();
  if (!cards.length) {
    worksheetError.hidden = false;
    worksheetError.focus?.();
    return;
  }
  renderWorksheetPrint(mode, cards);
  window.setTimeout(() => window.print(), 80);
}

function finishWorksheetPrint() {
  document.querySelector('[data-worksheet-print-container]')?.remove();
  document.body.classList.remove('is-printing-worksheet');
}

function applyThemePreference(isSepia) {
  const enabled = Boolean(isSepia);

  document.documentElement.classList.toggle('notes-page--sepia', enabled);

  if (document.body) {
    document.body.classList.toggle('notes-page--sepia', enabled);
  }

  themeToggleButtons.forEach((button) => {
    button.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    button.setAttribute('aria-label', getThemeToggleAriaLabel(enabled));
    button.textContent = getThemeToggleLabel(enabled);
  });
}

function syncThemePreference() {
  applyThemePreference(readThemePreference());
}

function toggleThemePreference() {
  const nextValue = !document.documentElement.classList.contains('notes-page--sepia');
  applyThemePreference(nextValue);
  writeThemePreference(nextValue);
}

function getCurrentSubjectPageInfo() {
  const subjectPathPrefix = '/study/';

  if (!window.location.pathname.startsWith(subjectPathPrefix)) {
    return null;
  }

  const pathSegments = window.location.pathname
    .slice(subjectPathPrefix.length)
    .split('/')
    .filter(Boolean);

  if (pathSegments.length < 2) {
    return null;
  }

  const subjectId = pathSegments.shift();

  if (pathSegments.at(-1) === 'practice') {
    pathSegments.pop();
  }

  if (!subjectId || !pathSegments.length) {
    return null;
  }

  return {
    subjectId,
    pagePath: `/study/${subjectId}/${pathSegments.join('/')}/`,
  };
}

function rememberCurrentSubjectPage() {
  const currentPage = getCurrentSubjectPageInfo();

  if (!currentPage) {
    return;
  }

  const state = readLastPagesBySubject();

  if (state[currentPage.subjectId] === currentPage.pagePath) {
    return;
  }

  state[currentPage.subjectId] = currentPage.pagePath;
  writeLastPagesBySubject(state);
}

function updateSubjectHeaderLinks() {
  const lastPagesBySubject = readLastPagesBySubject();

  subjectHeaderLinks.forEach((link) => {
    const subjectId = link.dataset.subjectId;
    const defaultHref = link.dataset.defaultHref;

    if (!subjectId || !defaultHref) {
      return;
    }

    link.href = lastPagesBySubject[subjectId] || defaultHref;
  });
}

function syncSubjectNavigation() {
  rememberCurrentSubjectPage();
  updateSubjectHeaderLinks();
}

function initLessonTocTracking() {
  if (!lessonBody || isPracticePage || !lessonTocLinks.length) {
    return;
  }

  const sections = lessonTocLinks.map((link) => {
    const id = String(link.getAttribute('href') ?? '').replace(/^#/, '');
    const heading = id ? document.getElementById(id) : null;

    return heading ? { heading, link } : null;
  }).filter(Boolean);

  if (!sections.length) {
    return;
  }

  const subtopics = lessonSubtopicLinks.map((link) => {
    const id = String(link.getAttribute('href') ?? '').replace(/^#/, '');
    const heading = id ? document.getElementById(id) : null;
    const sectionId = String(link.dataset.notesSectionId ?? '');

    return heading && sectionId ? { heading, link, sectionId } : null;
  }).filter(Boolean);

  let activeLink = null;
  let activeSubtopicLink = null;
  let updateFrame = null;

  const setActiveLink = (nextLink) => {
    if (!nextLink || nextLink === activeLink) {
      return;
    }

    sections.forEach(({ link }) => {
      const isActive = link === nextLink;
      link.classList.toggle('is-active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    const activeSectionId = String(nextLink.getAttribute('href') ?? '').replace(/^#/, '');
    lessonSectionTocPanels.forEach((panel) => {
      panel.hidden = panel.dataset.notesSectionTocPanel !== activeSectionId;
    });

    activeLink = nextLink;
  };

  const setActiveSubtopicLink = (nextLink) => {
    if (nextLink === activeSubtopicLink) {
      return;
    }

    subtopics.forEach(({ link }) => {
      const isActive = link === nextLink;
      link.classList.toggle('is-active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    activeSubtopicLink = nextLink;
  };

  const updateActiveLink = () => {
    updateFrame = null;
    const activationLine = Math.min(window.innerHeight * 0.32, 260);
    let currentSection = sections[0];

    sections.forEach((section) => {
      if (section.heading.getBoundingClientRect().top <= activationLine) {
        currentSection = section;
      }
    });

    setActiveLink(currentSection.link);

    const activeSectionId = String(currentSection.link.getAttribute('href') ?? '').replace(/^#/, '');
    const sectionSubtopics = subtopics.filter((subtopic) => subtopic.sectionId === activeSectionId);
    let currentSubtopic = sectionSubtopics[0] ?? null;

    sectionSubtopics.forEach((subtopic) => {
      if (subtopic.heading.getBoundingClientRect().top <= activationLine) {
        currentSubtopic = subtopic;
      }
    });

    setActiveSubtopicLink(currentSubtopic?.link ?? null);
  };

  const scheduleActiveLinkUpdate = () => {
    if (updateFrame === null) {
      updateFrame = window.requestAnimationFrame(updateActiveLink);
    }
  };

  setActiveLink(sections[0].link);
  scheduleActiveLinkUpdate();
  window.addEventListener('scroll', scheduleActiveLinkUpdate, { passive: true });
  window.addEventListener('resize', scheduleActiveLinkUpdate);
  window.addEventListener('hashchange', scheduleActiveLinkUpdate);
}

function normalizeWhitespace(text) {
  return String(text ?? '').replace(/\s+/g, ' ').trim();
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

const LATEX_COMMAND_MAP = new Map([
  ['frac', 'fraction'],
  ['dfrac', 'fraction'],
  ['tfrac', 'fraction'],
  ['sqrt', 'square root'],
  ['operatorname', ''],
  ['mathrm', ''],
  ['mathit', ''],
  ['mathbf', ''],
  ['mathcal', ''],
  ['mathbb', ''],
  ['cdot', 'times'],
  ['times', 'times'],
  ['pm', 'plus minus'],
  ['le', 'less than or equal to'],
  ['ge', 'greater than or equal to'],
  ['neq', 'not equal to'],
  ['approx', 'approximately'],
  ['sim', 'approximately'],
  ['to', 'to'],
  ['Rightarrow', 'implies'],
  ['rightarrow', 'to'],
  ['leftrightarrow', 'if and only if'],
  ['infty', 'infinity'],
  ['sum', 'sum'],
  ['prod', 'product'],
  ['int', 'integral'],
  ['lim', 'limit'],
  ['ln', 'ln'],
  ['log', 'log'],
  ['exp', 'exp'],
  ['sin', 'sin'],
  ['cos', 'cos'],
  ['tan', 'tan'],
  ['sec', 'sec'],
  ['csc', 'csc'],
  ['cot', 'cot'],
  ['arcsin', 'arcsin'],
  ['arccos', 'arccos'],
  ['arctan', 'arctan'],
  ['Delta', 'delta'],
  ['delta', 'delta'],
  ['alpha', 'alpha'],
  ['beta', 'beta'],
  ['gamma', 'gamma'],
  ['theta', 'theta'],
  ['lambda', 'lambda'],
  ['mu', 'mu'],
  ['pi', 'pi'],
  ['rho', 'rho'],
  ['sigma', 'sigma'],
  ['phi', 'phi'],
  ['omega', 'omega'],
  ['epsilon', 'epsilon'],
  ['Omega', 'omega'],
  ['Phi', 'phi'],
  ['Sigma', 'sigma'],
  ['Theta', 'theta'],
  ['Lambda', 'lambda'],
  ['Pi', 'pi'],
]);

const LATEX_SET_MAP = new Map([
  ['R', 'real numbers'],
  ['N', 'natural numbers'],
  ['Z', 'integers'],
  ['Q', 'rational numbers'],
  ['C', 'complex numbers'],
  ['P', 'power set'],
]);

function normalizeLatexSearchText(text) {
  const normalized = String(text ?? '')
    .replace(/\\(?:left|right|bigl|bigr|Bigl|Bigr|biggl|biggr|lvert|rvert|langle|rangle|lceil|rceil|lfloor|rfloor|quad|qquad)\b/g, ' ')
    .replace(/\\[,;:!]/g, ' ')
    ;

  return normalizeWhitespace(expandLatexSearchStructures(normalized));
}

function expandLatexSearchStructures(text) {
  return translateLatexSearchCommands(String(text ?? '')
    .replace(/\\(?:d)?frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '$1 over $2')
    .replace(/\\sqrt(?:\[(.*?)\])?\s*\{([^{}]+)\}/g, (_, degree, radicand) => {
      return degree ? `root ${degree} ${radicand}` : `square root ${radicand}`;
    })
    .replace(/\\binom\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '$1 choose $2')
    .replace(/\\(?:operatorname|mathrm|mathit|mathbf|mathcal|text)\s*\{([^{}]+)\}/g, '$1')
    .replace(/\\mathbb\s*\{([^{}]+)\}/g, (_, symbol) => LATEX_SET_MAP.get(symbol) ?? symbol)
    .replace(/\\begin\{([A-Za-z*]+)\}/g, ' ')
    .replace(/\\end\{([A-Za-z*]+)\}/g, ' ')
    .replace(/\\(?:sum|prod|int|lim)(?:_\{([^{}]+)\}|_([^\s^{}]+))?(?:\^\{([^{}]+)\}|\^([^\s^{}]+))?/g, (_, command, lowerBlock, lowerBare, upperBlock, upperBare) => {
      const lower = lowerBlock ?? lowerBare ?? '';
      const upper = upperBlock ?? upperBare ?? '';
      const lowerText = lower ? ` from ${lower.replace(/\\to/g, ' to ')}` : '';
      const upperText = upper ? ` to ${upper}` : '';

      if (command === 'lim') {
        return `limit${lowerText}`;
      }

      if (command === 'int') {
        return `integral${lowerText}${upperText}`;
      }

      return `${command}${lowerText}${upperText}`;
    })
    .replace(/\\([A-Za-z]+)\b/g, (_, command) => {
      return LATEX_COMMAND_MAP.get(command) ?? command;
    })
    .replace(/([A-Za-z0-9])\^\{([^{}]+)\}/g, '$1 $2')
    .replace(/([A-Za-z0-9])\^([A-Za-z0-9+\-]+)/g, '$1 $2')
    .replace(/([A-Za-z0-9])_\{([^{}]+)\}/g, '$1 $2')
    .replace(/([A-Za-z0-9])_([A-Za-z0-9+\-]+)/g, '$1 $2')
    .replace(/\\(?:cdots|ldots|dots)/g, ' ellipsis ')
    .replace(/\\&/g, ' and ')
    .replace(/&/g, ' ')
    .replace(/\\/g, ' ')
    .replace(/[{}]/g, ' '));
}

function translateLatexSearchCommands(text) {
  return String(text ?? '').replace(/\\([A-Za-z]+)\b/g, (_, command) => {
    return LATEX_COMMAND_MAP.get(command) ?? command;
  });
}

function tokenize(query) {
  return normalizeLatexSearchText(query).toLowerCase().split(' ').filter(Boolean);
}

function updateStatus(message) {
  if (searchStatus) {
    searchStatus.textContent = message;
  }
}

function setSearchTriggerState(isExpanded) {
  searchTriggers.forEach((trigger) => {
    trigger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  });
}

function setSubjectsTriggerState(isExpanded) {
  subjectsTriggers.forEach((trigger) => {
    trigger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  });
}

function isVisibleElement(element) {
  return element instanceof HTMLElement
    && !element.hidden
    && element.getClientRects().length > 0
    && !element.closest('[hidden]');
}

function getVisibleSearchTrigger() {
  return searchTriggers.find(isVisibleElement) ?? null;
}

function getVisibleSubjectsTrigger() {
  return subjectsTriggers.find(isVisibleElement) ?? null;
}

function getPageNavItems() {
  return Array.from(document.querySelectorAll('[data-notes-nav-item]')).filter(isVisibleElement);
}

function getSearchResultItems() {
  if (!searchResults) {
    return [];
  }

  return Array.from(searchResults.querySelectorAll('[data-search-result]')).filter(isVisibleElement);
}

function updateSearchResultState(nextIndex, { focus = false } = {}) {
  const results = getSearchResultItems();

  if (!results.length) {
    activeSearchResultIndex = -1;
    return null;
  }

  activeSearchResultIndex = ((nextIndex % results.length) + results.length) % results.length;

  results.forEach((result, index) => {
    const isActive = index === activeSearchResultIndex;
    result.classList.toggle('is-active', isActive);

    if (isActive) {
      result.setAttribute('aria-current', 'true');
    } else {
      result.removeAttribute('aria-current');
    }
  });

  const activeResult = results[activeSearchResultIndex] ?? null;

  if (activeResult && searchPanel && !searchPanel.hidden) {
    activeResult.scrollIntoView({ block: 'nearest' });

    if (focus) {
      activeResult.focus();
    }
  }

  return activeResult;
}

function moveSearchResultState(step, focus = false) {
  const results = getSearchResultItems();

  if (!results.length) {
    return null;
  }

  const baseIndex = activeSearchResultIndex >= 0
    ? activeSearchResultIndex
    : (step > 0 ? -1 : 0);

  return updateSearchResultState(baseIndex + step, { focus });
}

function activateFocusedSearchResult() {
  const activeResult = getSearchResultItems()[activeSearchResultIndex] ?? getSearchResultItems()[0] ?? null;

  if (!activeResult) {
    return;
  }

  window.location.href = activeResult.href;
}

function movePageNavFocus(step, currentTarget) {
  const items = getPageNavItems();

  if (!items.length) {
    return;
  }

  const currentIndex = items.indexOf(currentTarget);

  if (currentIndex < 0) {
    return;
  }

  const nextIndex = (currentIndex + step + items.length) % items.length;
  const nextItem = items[nextIndex];

  if (!nextItem) {
    return;
  }

  nextItem.focus();
  nextItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

function handleSearchPanelKeydown(event) {
  if (!searchPanel || searchPanel.hidden || !(event.target instanceof HTMLElement)) {
    return;
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    closeSearch();
    return;
  }

  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    const step = event.key === 'ArrowDown' ? 1 : -1;
    const isSearchInputFocused = event.target === searchInput;
    const isSearchResultFocused = Boolean(event.target.closest('[data-search-result]'));

    if (!isSearchInputFocused && !isSearchResultFocused) {
      return;
    }

    event.preventDefault();
    moveSearchResultState(step, isSearchResultFocused);
    return;
  }

  if (event.key === 'Enter' && event.target === searchInput && activeSearchResultIndex >= 0) {
    event.preventDefault();
    activateFocusedSearchResult();
  }
}

function handlePageNavKeydown(event) {
  if (searchPanel && !searchPanel.hidden) {
    return;
  }

  if (!(event.target instanceof HTMLElement)) {
    return;
  }

  const stepByKey = {
    ArrowDown: 1,
    ArrowLeft: -1,
    ArrowRight: 1,
    ArrowUp: -1,
  };

  const step = stepByKey[event.key];

  if (!step || !event.target.matches('[data-notes-nav-item]')) {
    return;
  }

  event.preventDefault();
  movePageNavFocus(step, event.target);
}

function handleGlobalKeyboardShortcuts(event) {
  if (!(event.target instanceof HTMLElement)) {
    return;
  }

  if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 's') {
    event.preventDefault();
    if (searchPanel && !searchPanel.hidden) {
      closeSearch();
    } else {
      openSearch();
    }
    return;
  }

  if (searchPanel && !searchPanel.hidden) {
    handleSearchPanelKeydown(event);
    return;
  }

  if (subjectsPanel && !subjectsPanel.hidden) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeSubjects();
    }
    return;
  }

  handlePageNavKeydown(event);
}

function renderPlaceholder(message) {
  if (searchResults) {
    searchResults.innerHTML = `<p class="search-result__snippet">${escapeHtml(message)}</p>`;
  }
}

function buildSnippet(text, index, matchLength) {
  const normalizedText = normalizeWhitespace(text);

  if (!normalizedText) {
    return '';
  }

  const radius = 72;
  const start = Math.max(0, index - radius);
  const end = Math.min(normalizedText.length, index + Math.max(matchLength, 1) + radius);
  return `${start ? '...' : ''}${normalizedText.slice(start, end).trim()}${end < normalizedText.length ? '...' : ''}`;
}

function highlightText(text, terms) {
  let html = escapeHtml(text);

  [...new Set(terms)].sort((left, right) => right.length - left.length).forEach((term) => {
    if (term) {
      html = html.replace(new RegExp(`(${escapeRegExp(term)})`, 'gi'), '<mark>$1</mark>');
    }
  });

  return html;
}

function resultForEntry(entry, terms) {
  const title = String(entry.title ?? '');
  const summary = String(entry.summary ?? '');
  const text = String(entry.text ?? '');
  const titleLower = normalizeLatexSearchText(title).toLowerCase();
  const summaryNormalized = normalizeLatexSearchText(summary);
  const summaryLower = summaryNormalized.toLowerCase();
  const textLower = normalizeLatexSearchText(text).toLowerCase();
  const searchable = `${titleLower} ${summaryLower} ${textLower}`;

  if (!terms.every((term) => searchable.includes(term))) {
    return null;
  }

  const titleHits = terms.filter((term) => titleLower.includes(term)).length;
  const summaryHits = terms.filter((term) => summaryLower.includes(term)).length;
  const firstTextPosition = terms
    .map((term) => textLower.indexOf(term))
    .filter((position) => position >= 0)
    .sort((left, right) => left - right)[0] ?? 0;
  const snippet = (titleHits || summaryHits === terms.length) && summaryNormalized
    ? buildSnippet(summaryNormalized, 0, 0)
    : buildSnippet(normalizeLatexSearchText(text || summary || title), firstTextPosition, terms[0]?.length ?? 0);

  return {
    ...entry,
    snippet,
    score: (titleHits * 1000) + (summaryHits * 100) - firstTextPosition,
  };
}

function getSearchResultHref(url, query) {
  const relativePath = String(url ?? '').replace(/^\/study\//, '');
  const href = new URL(relativePath, NOTES_BASE_URL);
  href.searchParams.set('q', query);
  return href.href;
}

function searchNotes(query) {
  if (!searchResults) {
    return;
  }

  const normalizedQuery = normalizeLatexSearchText(query);
  const terms = tokenize(normalizedQuery);

  if (searchIndexFailed) {
    updateStatus('Search is unavailable right now.');
    renderPlaceholder('The generated search index could not be loaded.');
    activeSearchResultIndex = -1;
    return;
  }

  if (!normalizedQuery) {
    updateStatus(searchIndexReady ? 'Type to search across all notes.' : 'Loading search index...');
    renderPlaceholder('Search note titles and note content.');
    activeSearchResultIndex = -1;
    return;
  }

  if (!searchIndexReady) {
    updateStatus('Loading search index...');
    renderPlaceholder('Results will appear when the index is ready.');
    activeSearchResultIndex = -1;
    return;
  }

  const results = searchIndex
    .map((entry) => resultForEntry(entry, terms))
    .filter(Boolean)
    .sort((left, right) => right.score - left.score || left.title.localeCompare(right.title))
    .slice(0, 25);

  if (!results.length) {
    updateStatus('No results');
    renderPlaceholder('No matching notes found.');
    activeSearchResultIndex = -1;
    return;
  }

  updateStatus(`${results.length} result${results.length === 1 ? '' : 's'}`);
  searchResults.innerHTML = results.map((result) => {
    const href = getSearchResultHref(result.url, normalizedQuery);
    return `<div class="search-result__item" role="listitem">
      <a class="search-result" href="${escapeHtml(href)}" data-search-result aria-label="Open ${escapeHtml(result.title)}">
        <span class="search-result__subject">${escapeHtml(result.subject)}</span>
        <span class="search-result__title">${escapeHtml(result.title)}</span>
        <span class="search-result__snippet">${highlightText(result.snippet, terms)}</span>
      </a>
    </div>`;
  }).join('');

  updateSearchResultState(0);
}

async function loadSearchIndex() {
  if (searchIndexPromise) {
    return searchIndexPromise;
  }

  searchIndexPromise = fetch(SEARCH_INDEX_URL).then((response) => {
      if (!response.ok) throw new Error(`Search index returned ${response.status}`);
      return response.json();
    })
    .then((entries) => {
      searchIndex = Array.isArray(entries) ? entries : [];
      searchIndexReady = true;
      searchNotes(searchInput?.value ?? '');
      return searchIndex;
    })
    .catch((error) => {
      console.error('[notes] Search index failed to load.', error);
      searchIndexFailed = true;
      searchNotes(searchInput?.value ?? '');
      return [];
    });

  return searchIndexPromise;
}

function openSearch(trigger = activeSearchTrigger) {
  if (!searchPanel || !searchInput) {
    return;
  }

  activeSearchTrigger = (trigger && isVisibleElement(trigger))
    ? trigger
    : getVisibleSearchTrigger()
    ?? activeSearchTrigger;
  closeSubjects({ restoreFocus: false });
  searchPanel.hidden = false;
  setSearchTriggerState(true);
  void loadSearchIndex();
  searchNotes(searchInput.value);
  searchInput.focus();
  searchInput.select();
}

function closeSearch({ restoreFocus = true } = {}) {
  if (!searchPanel) {
    return;
  }

  searchPanel.hidden = true;
  setSearchTriggerState(false);

  if (!restoreFocus) {
    return;
  }

  const returnTrigger = isVisibleElement(activeSearchTrigger)
    ? activeSearchTrigger
    : getVisibleSearchTrigger();

  returnTrigger?.focus();
}

function openSubjects(trigger = activeSubjectsTrigger) {
  if (!subjectsPanel) {
    return;
  }

  activeSubjectsTrigger = (trigger && isVisibleElement(trigger))
    ? trigger
    : getVisibleSubjectsTrigger()
    ?? activeSubjectsTrigger;
  closeSearch({ restoreFocus: false });
  subjectsPanel.hidden = false;
  document.body.classList.add('subjects-panel-open');
  setSubjectsTriggerState(true);
  subjectsCloseButton?.focus();
}

function closeSubjects({ restoreFocus = true } = {}) {
  if (!subjectsPanel) {
    return;
  }

  subjectsPanel.hidden = true;
  document.body.classList.remove('subjects-panel-open');
  setSubjectsTriggerState(false);

  if (!restoreFocus) {
    return;
  }

  const returnTrigger = isVisibleElement(activeSubjectsTrigger)
    ? activeSubjectsTrigger
    : getVisibleSubjectsTrigger();
  returnTrigger?.focus();
}

function findTextMatch(root, query) {
  const terms = [normalizeWhitespace(query).toLowerCase(), ...tokenize(query)]
    .filter(Boolean)
    .sort((left, right) => right.length - left.length);

  for (const term of terms) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        return parent && !parent.closest('script, style, code, pre, mjx-container')
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });
    let node = walker.nextNode();

    while (node) {
      const index = (node.textContent ?? '').toLowerCase().indexOf(term);

      if (index >= 0) {
        return { node, index, length: term.length };
      }

      node = walker.nextNode();
    }
  }

  return null;
}

function clipStudyText(text, maxLength = 1800) {
  const normalized = normalizeWhitespace(text);

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

function getPracticeStudyPrompt(problemCard, userWork) {
  const title = clipStudyText(problemCard.querySelector('.practice-problem__title-text')?.textContent ?? '');
  const prompt = clipStudyText(problemCard.querySelector('[data-practice-prompt]')?.textContent ?? '', 2200);
  const referenceAnswer = clipStudyText(problemCard.dataset.problemAnswer ?? '', 800);
  const referenceSolution = clipStudyText(problemCard.querySelector('[data-practice-solution] .markdown-body')?.textContent ?? '', 2200);
  const studyWork = clipStudyText(userWork || '', 3000) || '(no work entered)';

  return [
    'Study mode.',
    '',
    'You are helping a student talk through a practice problem.',
    'Use a supportive tutoring tone and focus on reasoning, not just the final answer.',
    'Compare the student work against the reference answer and solution.',
    'If the work is correct, say why. If it is wrong, identify the mistake and show the next step.',
    'End with one short follow-up question that keeps the conversation going.',
    '',
    `Problem title: ${title || '(untitled)'}`,
    `Problem prompt: ${prompt || '(no prompt text available)'}`,
    `Student work: ${studyWork}`,
    `Reference answer: ${referenceAnswer || '(no answer provided)'}`,
    `Reference solution: ${referenceSolution || '(no solution text provided)'}`,
  ].join('\n');
}

function openPracticeStudyMode(problemCard, userWork) {
  const prompt = getPracticeStudyPrompt(problemCard, userWork);
  const chatGptUrl = new URL('https://chatgpt.com/');
  chatGptUrl.searchParams.set('q', prompt);

  const opened = window.open(chatGptUrl.toString(), '_blank', 'noopener,noreferrer');

  if (opened) {
    opened.opener = null;
  }
}

function revealQueryMatch() {
  const query = new URLSearchParams(window.location.search).get('q');

  if (!noteContent || !query) {
    return;
  }

  const match = findTextMatch(noteContent, query);

  if (!match) {
    return;
  }

  const source = match.node;
  const text = source.textContent ?? '';
  const mark = document.createElement('mark');
  const fragment = document.createDocumentFragment();

  mark.className = 'notes-search-match';
  mark.textContent = text.slice(match.index, match.index + match.length);
  fragment.appendChild(document.createTextNode(text.slice(0, match.index)));
  fragment.appendChild(mark);
  fragment.appendChild(document.createTextNode(text.slice(match.index + match.length)));
  source.parentNode.replaceChild(fragment, source);
  mark.scrollIntoView({ block: 'center' });
}

let interactiveBoardIdCounter = 0;

function ensureInteractiveBoardId(element, type) {
  if (element.id) {
    return element.id;
  }

  let id;
  do {
    interactiveBoardIdCounter += 1;
    id = `notes-${type}-board-${interactiveBoardIdCounter}`;
  } while (document.getElementById(id));

  element.id = id;
  return id;
}

function observeBoardResize(board, element) {
  if (window.ResizeObserver) {
    new ResizeObserver(() => board.resizeContainer(element.clientWidth, element.clientHeight, true)).observe(element);
  }
}

function initVectorCalculusGradient(root) {
  if (!root || root.dataset.gradientInitialized === 'true') {
    return;
  }

  root.dataset.gradientInitialized = 'true';
  const boardElement = root.querySelector('[data-gradient-board]');

  if (!window.JXG || !boardElement) {
    throw new Error('Gradient interactive failed to initialize.');
  }

  const boardId = ensureInteractiveBoardId(boardElement, 'gradient');

  const fields = createGradientFields();
  const values = Object.fromEntries(Array.from(root.querySelectorAll('[data-gradient-value]')).map((element) => [element.dataset.gradientValue, element]));
  const fieldKey = root.dataset.gradientField in fields ? root.dataset.gradientField : 'quadratic';
  const angle = 35 * Math.PI / 180;
  const board = JXG.JSXGraph.initBoard(boardId, { boundingbox: [-5, 5, 5, -5], axis: true, showCopyright: false, showNavigation: false, keepaspectratio: true });
  const probe = board.create('point', [2, 1], { name: 'P', size: 4, color: '#f4b942', fixed: false, snapSizeX: 0.05, snapSizeY: 0.05 });
  const pointCoords = () => [probe.X(), probe.Y()];
  const addCurve = (x, y, range, extra = {}) => board.create('curve', [x, y, ...range], { strokeColor: '#7d8794', strokeWidth: 1, strokeOpacity: 0.55, fixed: true, ...extra });
  const levelCurves = createGradientLevelCurves(addCurve);
  board.create('arrow', [[() => probe.X(), () => probe.Y()], [() => probe.X() + fields[fieldKey].gradient(probe.X(), probe.Y())[0] * 0.55, () => probe.Y() + fields[fieldKey].gradient(probe.X(), probe.Y())[1] * 0.55]], { strokeColor: '#444', fillColor: '#444', strokeWidth: 3 });
  board.create('arrow', [[() => probe.X(), () => probe.Y()], [() => probe.X() + Math.cos(angle) * 1.5, () => probe.Y() + Math.sin(angle) * 1.5]], { strokeColor: '#777', fillColor: '#777', strokeWidth: 3 });
  board.create('line', [[() => probe.X() - Math.sin(Math.atan2(fields[fieldKey].gradient(probe.X(), probe.Y())[1], fields[fieldKey].gradient(probe.X(), probe.Y())[0])) * 5, () => probe.Y() + Math.cos(Math.atan2(fields[fieldKey].gradient(probe.X(), probe.Y())[1], fields[fieldKey].gradient(probe.X(), probe.Y())[0])) * 5], [() => probe.X() + Math.sin(Math.atan2(fields[fieldKey].gradient(probe.X(), probe.Y())[1], fields[fieldKey].gradient(probe.X(), probe.Y())[0])) * 5, () => probe.Y() - Math.cos(Math.atan2(fields[fieldKey].gradient(probe.X(), probe.Y())[1], fields[fieldKey].gradient(probe.X(), probe.Y())[0])) * 5]], { strokeColor: '#c084fc', strokeWidth: 2, dash: 2 });
  const update = () => {
    const [x, y] = pointCoords();
    const [gx, gy] = fields[fieldKey].gradient(x, y);
    const magnitude = Math.hypot(gx, gy);
    const directional = gx * Math.cos(angle) + gy * Math.sin(angle);
    if (values.point) values.point.textContent = `(${x.toFixed(2)}, ${y.toFixed(2)})`;
    if (values.field) values.field.textContent = fields[fieldKey].f(x, y).toFixed(2);
    if (values.gradient) values.gradient.textContent = `⟨${gx.toFixed(2)}, ${gy.toFixed(2)}⟩`;
    if (values.magnitude) values.magnitude.textContent = magnitude.toFixed(2);
    if (values.directional) values.directional.textContent = directional.toFixed(2);
    board.update();
  };
  const updateFieldVisibility = () => levelCurves.forEach((curve, index) => curve.setAttribute({ visible: fieldKey === 'quadratic' ? index < 7 : index >= 7 }));
  probe.on('drag', update);
  updateFieldVisibility();
  update();
  observeBoardResize(board, boardElement);
}

function createGradientFields() {
  return {
    quadratic: { f: (x, y) => 0.5 * x * x + y * y, gradient: (x, y) => [x, 2 * y] },
    saddle: { f: (x, y) => x * y, gradient: (x, y) => [y, x] },
  };
}

function createGradientLevelCurves(addCurve) {
  const curves = [];

  [1, 2, 3, 4, 6, 8, 10].forEach((level) => {
    curves.push(addCurve(
      (t) => Math.sqrt(2 * level) * Math.cos(t),
      (t) => Math.sqrt(level) * Math.sin(t),
      [0, 2 * Math.PI],
    ));
  });

  [1, 2, 3, 4].forEach((level) => {
    [-1, 1].forEach((sign) => {
      curves.push(addCurve((t) => sign * t, (t) => level / (sign * t), [0.2, 5]));
      curves.push(addCurve((t) => sign * t, (t) => -level / (sign * t), [0.2, 5]));
    });
  });

  curves.push(addCurve((t) => t, () => 0, [-5, 5]));
  curves.push(addCurve(() => 0, (t) => t, [-5, 5]));
  return curves;
}

function initVectorCalculusGradient3D(root) {
  if (!root || root.dataset.gradient3dInitialized === 'true') return;
  root.dataset.gradient3dInitialized = 'true';
  const boardElement = root.querySelector('[data-gradient-3d-board]');
  if (!window.JXG || !boardElement || !JXG.JSXGraph.initBoard) {
    throw new Error('3D gradient interactive failed to initialize.');
  }

  const boardId = ensureInteractiveBoardId(boardElement, 'gradient-3d');
  const board = JXG.JSXGraph.initBoard(boardId, {
    boundingbox: [-6, 6, 6, -6], axis: false, pan: { enabled: false },
    showCopyright: false, showNavigation: false, keepaspectratio: true,
  });
  const view = board.create('view3d', [[-5, -4], [9, 9], [[-3, 3], [-3, 3], [0, 10]]], {
    projection: 'central',
    trackball: { enabled: true },
    xPlaneRear: { visible: false }, yPlaneRear: { visible: false }, zPlaneRear: { visible: false },
  });
  const f = (x, y) => 0.5 * x * x + y * y;
  const fx = (x) => x;
  const fy = (y) => 2 * y;
  view.create('functiongraph3d', [f, [-3, 3], [-3, 3]], {
    strokeColor: '#8f9aaa', strokeWidth: 0.7, fillColor: '#8f9aaa', fillOpacity: 0.28,
    stepU: 28, stepsV: 28,
  });
  const basePoint = view.create('point3d', [1, 1, 0], { name: 'P', size: 4, fillColor: '#f4b942', strokeColor: '#f4b942' });
  const surfacePoint = view.create('point3d', [() => [basePoint.X(), basePoint.Y(), f(basePoint.X(), basePoint.Y())]], { fixed: true, size: 4, fillColor: '#f4b942', strokeColor: '#f4b942' });
  view.create('line3d', [basePoint, surfacePoint], { dash: 2, strokeColor: '#777', strokeWidth: 1.5 });
  const gradientTip = view.create('point3d', [() => [surfacePoint.X() + fx(basePoint.X()) * 0.5, surfacePoint.Y() + fy(basePoint.Y()) * 0.5, surfacePoint.Z()]], { fixed: true, size: 3, fillColor: '#777', strokeColor: '#777' });
  view.create('line3d', [surfacePoint, gradientTip], { strokeColor: '#777', strokeWidth: 3 });
  observeBoardResize(board, boardElement);
}

function initVectorField3D(root) {
  if (!root || root.dataset.vectorFieldInitialized === 'true') {
    return;
  }

  root.dataset.vectorFieldInitialized = 'true';
  const boardElement = root.querySelector('[data-vector-field-board]');

  if (!window.JXG || !boardElement || !JXG.JSXGraph.initBoard) {
    throw new Error('Vector field interactive failed to initialize.');
  }

  const boardId = ensureInteractiveBoardId(boardElement, 'vector-field-3d');

  const formula = root.querySelector('[data-vector-field-formula]');
  const fields = {
    rotation: { value: (x, y, z) => [-y, x, 0], description: 'Horizontal rotation around the z-axis.' },
    radial: { value: (x, y, z) => [x, y, z], description: 'Vectors point away from the origin.' },
  };
  const fieldKey = root.dataset.vectorField in fields ? root.dataset.vectorField : 'rotation';
  const board = JXG.JSXGraph.initBoard(boardId, { boundingbox: [-6, 6, 6, -6], axis: true, pan: { enabled: false }, showCopyright: false, showNavigation: false, keepaspectratio: true });
  const view = board.create('view3d', [[-5, -4], [9, 9], [[-3, 3], [-3, 3], [-3, 3]]], {
      projection: 'central',
      trackball: { enabled: true },
      xPlaneFront: { visible: false },
      xPlaneRear: { visible: false },
      yPlaneFront: { visible: false },
      yPlaneRear: { visible: false },
      zPlaneFront: { visible: false },
      zPlaneRear: { visible: false },
  });
    // JSXGraph element names are lowercase, including the trailing "3d".
    const vectorScale = 0.28;
    const vectorField = view.create('vectorfield3d', [fields[fieldKey].value, [-3, 8, 3], [-3, 8, 3], [-3, 8, 3]], {
      strokeColor: '#777',
      strokeWidth: 1.4,
      arrowhead: { enabled: true, size: 3, angle: Math.PI * 0.125 },
      scale: () => vectorScale,
    });
    const update = () => {
      vectorField.setF(fields[fieldKey].value);
      if (formula) formula.textContent = fields[fieldKey].description;
      board.update();
    };
    update();
  observeBoardResize(board, boardElement);
}

function createStaticBoard(root, type, boundingbox) {
  const boardElement = root?.querySelector('[data-static-board]');
  if (!window.JXG || !boardElement || !JXG.JSXGraph.initBoard) {
    throw new Error(`${type} diagram failed to initialize.`);
  }
  const boardId = ensureInteractiveBoardId(boardElement, type);
  const board = JXG.JSXGraph.initBoard(boardId, {
    boundingbox, axis: false, pan: { enabled: false }, zoom: { enabled: false },
    showCopyright: false, showNavigation: false, keepaspectratio: true,
  });
  observeBoardResize(board, boardElement);
  return board;
}

function diagramText(board, x, y, text, options = {}) {
  return board.create('text', [x, y, text], { fixed: true, fontSize: options.fontSize ?? 14, strokeColor: options.color ?? '#252525', anchorX: options.anchorX ?? 'middle', anchorY: 'middle', ...options });
}

function diagramArrow(board, start, end, options = {}) {
  return board.create('arrow', [start, end], { fixed: true, strokeWidth: 2.5, strokeColor: options.color ?? '#b33a3a', fillColor: options.color ?? '#b33a3a', ...options });
}

function initStaticsModeling(root) {
  if (!root || root.dataset.staticInitialized === 'true') return;
  root.dataset.staticInitialized = 'true';
  const board = createStaticBoard(root, 'statics-modeling', [0, 7, 24, 0]);
  const ink = '#263238'; const muted = '#718096'; const accent = '#b33a3a'; const support = '#315c8c';
  [6, 12, 18].forEach((x) => board.create('segment', [[x, .5], [x, 6.5]], { fixed: true, strokeColor: '#cbd5e0', dash: 2 }));
  diagramText(board, 3, 6.55, '1  PHYSICAL OBJECT', { fontSize: 12, color: muted });
  diagramText(board, 9, 6.55, '2  ISOLATE', { fontSize: 12, color: muted });
  diagramText(board, 15, 6.55, '3  FBD', { fontSize: 12, color: muted });
  diagramText(board, 21, 6.55, '4  EQUATIONS', { fontSize: 12, color: muted });
  board.create('polygon', [[1.3, 2], [4.7, 2], [4.7, 4.2], [1.3, 4.2]], { fixed: true, fillColor: '#d9e4ef', fillOpacity: .9, borders: { strokeColor: ink, strokeWidth: 2 } });
  board.create('segment', [[.8, 1.2], [5.2, 1.2]], { fixed: true, strokeColor: ink, strokeWidth: 2 });
  diagramArrow(board, [3, 5.2], [3, 4.25], { color: accent }); diagramText(board, 3, 5.45, 'W = mg', { color: accent });
  diagramText(board, 3, 1.75, 'block on rough floor', { fontSize: 12, color: ink });
  board.create('polygon', [[7.3, 2], [10.7, 2], [10.7, 4.2], [7.3, 4.2]], { fixed: true, fillColor: '#eef2f7', fillOpacity: .9, borders: { strokeColor: ink, strokeWidth: 2 } });
  diagramText(board, 9, 1.75, 'remove floor and surroundings', { fontSize: 12, color: muted });
  diagramArrow(board, [9, 5.2], [9, 4.25], { color: accent }); diagramText(board, 9, 5.45, 'W', { color: accent });
  board.create('circle', [[15, 3.1], .95], { fixed: true, fillColor: '#eef2f7', fillOpacity: .9, strokeColor: ink, strokeWidth: 2 });
  diagramArrow(board, [15, 4.05], [15, 5.35], { color: accent }); diagramText(board, 15.7, 5.35, 'N', { color: accent, anchorX: 'left' });
  diagramArrow(board, [14.05, 3.1], [12.7, 3.1], { color: accent }); diagramText(board, 12.8, 3.55, 'F', { color: accent, anchorX: 'left' });
  diagramArrow(board, [15, 2.15], [15, .85], { color: accent }); diagramText(board, 15.7, .9, 'W = mg', { color: accent, anchorX: 'left' });
  diagramArrow(board, [15.95, 3.1], [17.3, 3.1], { color: support }); diagramText(board, 17.2, 3.55, 'f', { color: support, anchorX: 'right' });
  diagramText(board, 21, 5.25, 'ΣFₓ = 0', { fontSize: 16, color: ink });
  diagramText(board, 21, 4.25, 'F − f = 0', { fontSize: 16, color: accent });
  diagramText(board, 21, 3.05, 'ΣFᵧ = 0', { fontSize: 16, color: ink });
  diagramText(board, 21, 2.05, 'N − mg = 0', { fontSize: 16, color: accent });
  diagramText(board, 21, .8, 'model → forces → balance', { fontSize: 12, color: muted });
}

function initProjectileDiagram(root) {
  if (!root || root.dataset.staticInitialized === 'true') return;
  root.dataset.staticInitialized = 'true';
  const board = createStaticBoard(root, 'dynamics-projectile', [0, 8, 12, 0]);
  const ink = '#263238'; const accent = '#b33a3a'; const muted = '#718096';
  board.create('segment', [[.7, 1], [11.4, 1]], { fixed: true, strokeColor: ink, strokeWidth: 2 });
  board.create('curve', [(t) => 1 + 4 * t - 3.2 * t * t, (t) => 1 + 2.2 * t, [0, 1.25]], { fixed: true, strokeColor: accent, strokeWidth: 3 });
  diagramArrow(board, [1, 1.15], [2.4, 1.9], { color: accent }); diagramText(board, 2.1, 2.2, 'v₀', { color: accent });
  diagramArrow(board, [4.2, 4.55], [4.2, 3.55], { color: '#315c8c' }); diagramText(board, 4.65, 4.05, 'g', { color: '#315c8c', anchorX: 'left' });
  diagramText(board, 1, .55, 'x = v₀ cosθ · t', { fontSize: 15, color: ink, anchorX: 'left' });
  diagramText(board, 7.1, .55, 'y = v₀ sinθ · t − ½gt²', { fontSize: 15, color: ink });
  diagramText(board, 6, 7.3, 'projectile: resolve first, then integrate acceleration', { fontSize: 12, color: muted });
}

function initCircuitDiagram(root) {
  if (!root || root.dataset.staticInitialized === 'true') return;
  root.dataset.staticInitialized = 'true';
  const board = createStaticBoard(root, 'circuits-kcl', [0, 7, 14, 0]);
  const ink = '#263238'; const accent = '#b33a3a'; const blue = '#315c8c';
  const line = (a, b) => board.create('segment', [a, b], { fixed: true, strokeColor: ink, strokeWidth: 2 });
  line([2, 5.5], [5, 5.5]); line([9, 5.5], [12, 5.5]); line([2, 1.5], [12, 1.5]); line([2, 1.5], [2, 5.5]); line([12, 1.5], [12, 5.5]);
  board.create('circle', [[7, 5.5], .65], { fixed: true, fillColor: '#eef2f7', fillOpacity: .9, strokeColor: ink, strokeWidth: 2 });
  diagramText(board, 7, 5.5, 'R', { fontSize: 16, color: ink });
  board.create('polygon', [[3, 1.5], [3.5, 2], [3, 2.5], [2.5, 2], [3, 1.5]], { fixed: true, fillColor: '#f4d06f', fillOpacity: .95, borders: { strokeColor: ink, strokeWidth: 1.5 } });
  diagramText(board, 3, 3, 'Vₛ', { color: accent });
  diagramArrow(board, [4, 5.9], [6, 5.9], { color: blue }); diagramText(board, 5, 6.35, 'i', { color: blue });
  board.create('point', [7, 5.5], { fixed: true, size: 4, color: accent, name: 'node' });
  diagramText(board, 7, 3.6, 'KCL at node', { fontSize: 13, color: accent });
  diagramText(board, 7, 2.7, 'Σi = 0', { fontSize: 18, color: ink });
  diagramText(board, 7, 1.1, 'iₛ − i_R = 0', { fontSize: 15, color: blue });
}

function initJSXGraphExamples(root) {
  if (!root || root.dataset.jsxgraphInitialized === 'true' || !window.JXG) return;
  root.dataset.jsxgraphInitialized = 'true';
  const boardElement = root.querySelector('[data-jsxgraph-board]');
  if (!boardElement) return;
  const kind = root.dataset.jsxgraphExample;
  const bounds = kind === 'geometry' ? [-3, 3, 3, -3] : kind === 'trigonometry' ? [-1.5, 1.5, 7, -1.5] : kind === 'physics-2d' ? [-1, 6, 12, -1] : [-5, 8, 5, -2];
  const board = JXG.JSXGraph.initBoard(boardElement.id, { boundingbox: bounds, axis: true, showCopyright: false, showNavigation: false, keepaspectratio: true });
  const blue = '#315c8c'; const red = '#b33a3a'; const ink = '#263238';
  if (kind === 'algebra') {
    const firstA = board.create('point', [-2, -3], { name: 'A', size: 3, color: blue });
    const firstB = board.create('point', [2, 5], { name: 'B', size: 3, color: blue });
    const secondA = board.create('point', [-2, 6], { name: 'C', size: 3, color: red });
    const secondB = board.create('point', [2, 2], { name: 'D', size: 3, color: red });
    const firstLine = board.create('line', [firstA, firstB], { strokeColor: blue, strokeWidth: 3 });
    const secondLine = board.create('line', [secondA, secondB], { strokeColor: red, strokeWidth: 3 });
    board.create('intersection', [firstLine, secondLine, 0], { name: 'P', size: 4, color: ink });
  } else if (kind === 'geometry') {
    const center = board.create('point', [0, 0], { name: 'O', fixed: true, visible: false });
    const circle = board.create('circle', [center, [1, 1]], { strokeColor: blue, strokeWidth: 3, fillOpacity: 0.08 });
    const point = board.create('glider', [1, 1, circle], { name: 'P', size: 4, color: red });
    board.create('segment', [center, point], { strokeColor: red, strokeWidth: 2 });
    board.create('tangent', [circle, point], { strokeColor: ink, strokeWidth: 2 });
  } else if (kind === 'trigonometry') {
    const circle = board.create('circle', [[0, 0], 1], { strokeColor: blue, strokeWidth: 2 });
    const point = board.create('glider', [0.76, 0.64, circle], { name: 'P', size: 4, color: red });
    board.create('segment', [[0, 0], point], { strokeColor: red, strokeWidth: 2 });
    board.create('curve', [x => x, x => Math.sin(x), 0, 2 * Math.PI], { strokeColor: ink, strokeWidth: 2 });
    const angle = () => Math.atan2(point.Y(), point.X()) < 0 ? Math.atan2(point.Y(), point.X()) + 2 * Math.PI : Math.atan2(point.Y(), point.X());
    board.create('point', [angle, () => point.Y()], { name: 'sin(θ)', size: 4, color: red });
    board.create('segment', [[() => angle(), () => point.Y()], point], { strokeColor: '#718096', dash: 2 });
  } else if (kind === 'physics-2d') {
    const theta = Math.PI / 4; const speed = 10; const gravity = 9.8;
    const trajectory = x => x * Math.tan(theta) - gravity * x * x / (2 * speed * speed * Math.cos(theta) ** 2);
    const path = board.create('functiongraph', [trajectory, 0, 10.2], { strokeColor: red, strokeWidth: 3 });
    board.create('segment', [[0, 0], [10.5, 0]], { strokeColor: ink, strokeWidth: 2 });
    const projectile = board.create('glider', [2.2, trajectory(2.2), path], { name: 'r(t)', size: 4, color: red });
    const slope = x => Math.tan(theta) - gravity * x / (speed * speed * Math.cos(theta) ** 2);
    board.create('arrow', [projectile, [() => projectile.X() + Math.cos(Math.atan(slope(projectile.X()))), () => projectile.Y() + Math.sin(Math.atan(slope(projectile.X())))]], { strokeColor: blue, strokeWidth: 3 });
    board.create('arrow', [[() => projectile.X(), () => projectile.Y()], [() => projectile.X(), () => projectile.Y() - 1]], { strokeColor: ink, strokeWidth: 3 });
  }
}

const INTERACTIVE_INITIALIZERS = {
  'vector-calculus-gradient': (root) => initVectorCalculusGradient(root),
  'vector-calculus-gradient-3d': (root) => initVectorCalculusGradient3D(root),
  'vector-calculus-vector-field-3d': (root) => initVectorField3D(root),
  'statics-modeling': (root) => initStaticsModeling(root),
  'dynamics-projectile': (root) => initProjectileDiagram(root),
  'circuits-kcl': (root) => initCircuitDiagram(root),
  'jsxgraph-examples': (root) => initJSXGraphExamples(root),
};

function initInteractiveExperiences() {
  const pendingRoots = Object.entries(INTERACTIVE_INITIALIZERS).flatMap(([type, initializer]) => (
    Array.from(document.querySelectorAll(`[data-interactive="${type}"]`), (root) => ({ root, initializer }))
  ));

  if (!pendingRoots.length) return;

  const staticRoots = pendingRoots.filter(({ root }) => root.dataset.interactive !== 'jsxgraph-examples');
  const jsxGraphRoots = pendingRoots.filter(({ root }) => root.dataset.interactive === 'jsxgraph-examples');

  staticRoots.forEach(({ root, initializer }) => initializer(root));

  if (!jsxGraphRoots.length) return;

  let jsxGraphPromise = null;
  const loadJSXGraph = () => {
    if (window.JXG) return Promise.resolve();
    if (jsxGraphPromise) return jsxGraphPromise;

    const source = window.__NOTES_JSXGRAPH_URL;
    if (!source) return Promise.reject(new Error('JSXGraph source is not configured.'));

    jsxGraphPromise = new Promise((resolve, reject) => {
      const stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = window.__NOTES_JSXGRAPH_CSS_URL ?? source.replace(/jsxgraphcore\.js(?:\?.*)?$/, 'jsxgraph.css');
      document.head.appendChild(stylesheet);

      const script = document.createElement('script');
      script.src = source;
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error('JSXGraph failed to load.'));
      document.head.appendChild(script);
    });

    return jsxGraphPromise;
  };

  const initialize = ({ root, initializer }) => {
    loadJSXGraph().then(() => initializer(root)).catch(() => {
      root.dataset.interactiveError = 'true';
    });
  };

  if (!('IntersectionObserver' in window)) {
    jsxGraphRoots.forEach(initialize);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      initialize(jsxGraphRoots.find(({ root }) => root === entry.target));
    });
  }, { rootMargin: '400px 0px' });

  jsxGraphRoots.forEach(({ root }) => observer.observe(root));
}

searchTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    if (searchPanel?.hidden) {
      openSearch(trigger);
    } else {
      closeSearch();
    }
  });
});

subjectsTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    if (subjectsPanel?.hidden) {
      openSubjects(trigger);
    } else {
      closeSubjects();
    }
  });
});

practiceFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const nextValue = String(button.dataset.practiceFilter ?? 'all').trim().toLowerCase();
    const normalized = PRACTICE_FILTER_VALUES.has(nextValue) ? nextValue : 'all';
    savePracticeFilter(normalized);
    renderPracticeFilter(normalized);
  });
});

worksheetControls?.addEventListener('click', (event) => {
  if (event.target.closest('[data-worksheet-select-all]')) {
    setWorksheetSelection([...worksheetSelectedIds, ...practiceProblemCards.map((card) => card.id)]);
  } else if (event.target.closest('[data-worksheet-clear]')) {
    worksheetSpacing.clear();
    setWorksheetSelection([]);
  } else if (event.target.closest('[data-worksheet-reference-toggle]')) {
    const toggle = event.target.closest('[data-worksheet-reference-toggle]');
    const enabled = toggle.getAttribute('aria-pressed') !== 'true';
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.textContent = `Reference sheet: ${enabled ? 'On' : 'Off'}`;
  } else if (event.target.closest('[data-worksheet-print]')) {
    printWorksheet(event.target.closest('[data-worksheet-print]').dataset.worksheetPrint);
  } else if (event.target.closest('[data-worksheet-remove-id]')) {
    const id = event.target.closest('[data-worksheet-remove-id]').dataset.worksheetRemoveId;
    setWorksheetSelection(worksheetSelectedIds.filter((selectedId) => selectedId !== id));
  }
});

worksheetSelectedList?.addEventListener('input', (event) => {
  const input = event.target.closest('[data-worksheet-spacing-id]');
  if (!input) return;
  const value = Math.max(1, Math.min(20, Number.parseInt(input.value, 10) || 1));
  input.value = String(value);
  worksheetSpacing.set(input.dataset.worksheetSpacingId, value);
});

worksheetSelectedList?.addEventListener('dragstart', (event) => {
  const item = event.target.closest('[data-worksheet-selected-id]');
  worksheetDraggedId = item?.dataset.worksheetSelectedId ?? null;
  if (event.dataTransfer && worksheetDraggedId) event.dataTransfer.effectAllowed = 'move';
});
worksheetSelectedList?.addEventListener('dragover', (event) => { if (event.target.closest('[data-worksheet-selected-id]')) event.preventDefault(); });
worksheetSelectedList?.addEventListener('drop', (event) => {
  event.preventDefault();
  const target = event.target.closest('[data-worksheet-selected-id]');
  if (!worksheetDraggedId || !target || target.dataset.worksheetSelectedId === worksheetDraggedId) return;
  const ids = worksheetSelectedIds.filter((id) => id !== worksheetDraggedId);
  const targetIndex = ids.indexOf(target.dataset.worksheetSelectedId);
  ids.splice(targetIndex < 0 ? ids.length : targetIndex, 0, worksheetDraggedId);
  setWorksheetSelection(ids); worksheetDraggedId = null;
});

window.addEventListener('afterprint', finishWorksheetPrint);

document.addEventListener('click', async (event) => {
  const themeButton = event.target.closest('[data-theme-toggle]');

  if (themeButton) {
    toggleThemePreference();
    return;
  }

  const worksheetToggle = event.target.closest('[data-worksheet-problem-toggle]');

  if (worksheetToggle) {
    const card = worksheetToggle.closest('[data-practice-problem]');
    if (card?.id) {
      setWorksheetSelection(worksheetSelectedIds.includes(card.id)
        ? worksheetSelectedIds.filter((id) => id !== card.id)
        : [...worksheetSelectedIds, card.id]);
    }
    return;
  }

  const completionButton = event.target.closest('[data-practice-complete-toggle]');

  if (completionButton) {
    const problemCard = completionButton.closest('[data-practice-problem]');

    if (problemCard) {
      completionButton.setAttribute(
        'aria-pressed',
        completionButton.getAttribute('aria-pressed') === 'true' ? 'false' : 'true',
      );
      savePracticeCompletionState();
    }

    return;
  }

  const leaveButton = event.target.closest('[data-leave-notes]');

  if (leaveButton) {
    window.location.href = '/';
    return;
  }

  const copyButton = event.target.closest('[data-copy-text]');

  if (copyButton) {
    const copied = await copyTextToClipboard(copyButton.dataset.copyText ?? '');

    if (copied) {
      showContributorCopiedState(copyButton);
    }

    return;
  }

  const studyButton = event.target.closest('[data-practice-study-submit]');

  if (studyButton) {
    const problemCard = studyButton.closest('[data-practice-problem]');
    const studyInput = problemCard?.querySelector('[data-practice-study-input]');

    if (problemCard) {
      openPracticeStudyMode(problemCard, studyInput?.value ?? '');
    }

    return;
  }

  const solutionButton = event.target.closest('[data-practice-solution-toggle]');

  if (!solutionButton) {
    return;
  }

  const problemCard = solutionButton.closest('[data-practice-problem]');
  const solution = problemCard?.querySelector('[data-practice-solution]');
  const isHidden = solution?.hidden ?? true;
  const needsMathJax = isHidden && solution?.classList.contains('mathjax_ignore');

  if (solution) {
    solution.hidden = !isHidden;

    if (needsMathJax) {
      solution.classList.remove('mathjax_ignore');
      window.MathJax?.typesetPromise?.([solution])?.catch(() => {});
    }
  }

  solutionButton.textContent = isHidden ? 'Hide solutions' : 'Show solutions';
});

searchCloseButton?.addEventListener('click', closeSearch);
subjectsCloseButton?.addEventListener('click', closeSubjects);
searchInput?.addEventListener('input', (event) => searchNotes(event.target.value));
searchPanel?.addEventListener('click', (event) => {
  if (event.target === searchPanel) {
    closeSearch();
  }
});

window.addEventListener('keydown', (event) => {
  handleGlobalKeyboardShortcuts(event);
});

syncThemePreference();
initInteractiveExperiences();
renderPlaceholder('Search note titles and note content.');
revealQueryMatch();
syncPracticeCompletionState();
const practiceFilterFromUrl = getPracticeFilterFromUrl();
const initialPracticeFilter = practiceFilterFromUrl ?? loadPracticeFilter();
if (practiceFilterFromUrl) {
  savePracticeFilter(initialPracticeFilter);
}
renderPracticeFilter(initialPracticeFilter);
renderWorksheetSelection();
revealPageWhenReady(isPracticePage, 'notes-practice-boot');

syncSubjectNavigation();
initLessonTocTracking();
revealPageWhenReady(lessonBody, 'notes-lesson-boot');
window.addEventListener('storage', (event) => {
  if (event.key === NOTES_THEME_STORAGE_KEY) {
    syncThemePreference();
  }

  if (event.key === getPracticeCompletionStorageKey() || event.key === null) {
    syncPracticeCompletionState();
  }

  if (event.key === getPracticeFilterStorageKey() || event.key === null) {
    renderPracticeFilter(loadPracticeFilter());
  }

});
window.addEventListener('pageshow', () => {
  syncSubjectNavigation();
  syncThemePreference();
  syncPracticeCompletionState();
});
