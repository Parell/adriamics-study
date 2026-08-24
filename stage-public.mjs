import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.dirname(fileURLToPath(import.meta.url));
const publicRoot = path.join(repoRoot, 'public');
const deploymentRoot = path.join(publicRoot, 'study');

const deployFiles = [
  'index.html',
  'notes.min.css',
  'notes.min.js',
  'search-index.json',
  'sitemap.xml',
];

const deployDirectories = [
  'engineering',
  'hidden',
  'math',
  'physics',
  'webmeji',
];

await fs.rm(publicRoot, { recursive: true, force: true });
await fs.mkdir(deploymentRoot, { recursive: true });

for (const file of deployFiles) {
  await fs.copyFile(path.join(repoRoot, file), path.join(deploymentRoot, file));
}

for (const directory of deployDirectories) {
  await fs.cp(path.join(repoRoot, directory), path.join(deploymentRoot, directory), { recursive: true });
}

await fs.cp(
  path.join(repoRoot, 'vendor', 'mathjax'),
  path.join(deploymentRoot, 'vendor', 'mathjax'),
  { recursive: true },
);

console.log(`Staged study deployment in ${path.relative(repoRoot, deploymentRoot)}/`);
