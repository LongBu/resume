const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = path.dirname(require.resolve('lucide-static/package.json'));
const names = ['sparkles', 'mail', 'monitor', 'moon', 'sun', 'download', 'file-text'];
fs.mkdirSync(path.join(root, 'icons'), { recursive: true });
for (const name of names) {
  const svg = fs.readFileSync(path.join(source, 'icons', `${name}.svg`), 'utf8');
  const contents = svg.match(/<svg[\s\S]*?>([\s\S]*?)<\/svg>/)[1].trim();
  fs.writeFileSync(path.join(root, 'icons', `${name}.svg`), `<!-- Lucide v0.468.0, ISC license; see LICENSE.txt. -->\n${contents}\n`);
}
fs.copyFileSync(path.join(source, 'LICENSE'), path.join(root, 'icons', 'LICENSE.txt'));
