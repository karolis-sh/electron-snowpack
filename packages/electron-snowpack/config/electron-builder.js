const path = require('path');

const config = require('.');

module.exports = async () => ({
  files: [
    { from: '.', filter: ['package.json'] },
    { from: path.join(config.outputDir, 'main') },
    { from: path.join(config.outputDir, 'renderer') },
  ],
});
