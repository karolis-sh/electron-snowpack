const fs = require('fs');
const path = require('path');

const isTS = fs.existsSync(path.join(process.cwd(), 'tsconfig.json'));

module.exports = {
  baseHref: '.',
  rendererBaseHref: 'dist',
  outputDir: 'dist',
  snowpackPort: Number.parseInt(process.env.ELECTRON_SNOWPACK_PORT, 10) || 61016,
  isTS,
};
