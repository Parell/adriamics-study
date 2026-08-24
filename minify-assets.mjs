import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const notesRoot = path.dirname(fileURLToPath(import.meta.url));
const assets = [
  { root: notesRoot, source: 'notes.css', output: 'notes.min.css', type: 'css' },
  { root: notesRoot, source: 'notes.js', output: 'notes.min.js', type: 'js' },
  { root: notesRoot, source: 'webmeji/config.js', output: 'webmeji/config.min.js', type: 'js' },
  { root: notesRoot, source: 'webmeji/webmeji.js', output: 'webmeji/webmeji.min.js', type: 'js' },
];

function run(command, args) {
  return new Promise((resolve, reject) => {
    const executable = process.platform === 'win32' && command === 'npx' ? 'npx.cmd' : command;
    // Windows exposes npx as a .cmd shim, which requires shell execution.
    const child = spawn(executable, args, { stdio: 'inherit', shell: process.platform === 'win32' });
    child.on('error', reject);
    child.on('close', (code, signal) => {
      if (code === 0) {
        resolve();
        return;
      }

      const reason = signal ? `signal ${signal}` : `code ${code}`;
      reject(new Error(`${command} exited with ${reason}.`));
    });
  });
}

async function minifyAsset(sourcePath, outputPath, type) {
  const args = type === 'css'
    ? ['--yes', 'clean-css-cli@5.6.3', '-o', outputPath, sourcePath]
    : ['--yes', 'terser@5.44.0', sourcePath, '--compress', '--mangle', '--comments', 'false', '--output', outputPath];

  await run('npx', args);
}

for (const asset of assets) {
  const sourcePath = path.join(asset.root, asset.source);
  const outputPath = path.join(asset.root, asset.output);
  await minifyAsset(sourcePath, outputPath, asset.type);
  console.log(`${asset.source} -> ${asset.output}`);
}
