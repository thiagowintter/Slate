const fs = require('fs');
const path = require('path');
function search(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'vite' && file !== 'node-fetch' && file !== 'formdata-polyfill') search(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.mjs')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('window.fetch =') || content.includes('globalThis.fetch =') || content.includes('self.fetch =')) {
        console.log('Found in:', fullPath);
      }
    }
  }
}
search('node_modules');
