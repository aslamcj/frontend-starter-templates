import * as esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Build the application
const result = await esbuild.build({
  entryPoints: [path.join(rootDir, 'src/main.tsx')],
  bundle: true,
  outfile: path.join(distDir, 'main.js'),
  minify: true,
  sourcemap: true,
  target: ['es2022'],
  loader: {
    '.tsx': 'tsx',
    '.ts': 'ts',
    '.css': 'css',
    '.svg': 'dataurl',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  jsx: 'automatic',
  metafile: true,
  logLevel: 'info',
});

// Create index.html for production
const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React + esbuild Application" />
    <title>React + esbuild</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/main.js"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

// Copy public files
const publicDir = path.join(rootDir, 'public');
if (fs.existsSync(publicDir)) {
  fs.readdirSync(publicDir).forEach((file) => {
    fs.copyFileSync(path.join(publicDir, file), path.join(distDir, file));
  });
}

// Print build analysis
const text = await esbuild.analyzeMetafile(result.metafile);
console.log('\nBundle analysis:\n' + text);

console.log('\n✓ Build complete!\n');
