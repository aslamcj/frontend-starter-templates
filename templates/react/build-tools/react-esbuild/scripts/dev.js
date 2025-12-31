import * as esbuild from 'esbuild';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Copy index.html to dist
const distDir = path.join(rootDir, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create index.html with dev script
const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

// Start esbuild with watch and serve
const ctx = await esbuild.context({
  entryPoints: [path.join(rootDir, 'src/main.tsx')],
  bundle: true,
  outfile: path.join(distDir, 'main.js'),
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
    'process.env.NODE_ENV': '"development"',
  },
  jsx: 'automatic',
  logLevel: 'info',
});

// Start the dev server
const { host, port } = await ctx.serve({
  servedir: distDir,
  port: 5173,
});

console.log(`\n  Dev server running at http://localhost:${port}\n`);

// Watch for changes
await ctx.watch();
