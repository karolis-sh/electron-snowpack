const fs = require('fs');
const path = require('path');

const isTS = fs.existsSync(path.join(process.cwd(), 'tsconfig.json'));

module.exports = {
  baseHref: '.',
  rendererBaseHref: 'dist',
  outputDir: 'dist',
  snowpackPort: 9510,
  isTS,
};
