/* eslint-disable global-require */
const fs = require('fs');

const config = require('../config');

const { NODE_ENV } = process.env;

const dev = NODE_ENV !== 'production';

process.env.SNOWPACK_PUBLIC_BASE_HREF = config.baseHref;
process.env.SNOWPACK_PUBLIC_RENDERER_BASE_HREF = config.rendererBaseHref;
if (dev) {
  process.env.SNOWPACK_PORT = config.snowpackPort;
}

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles = [
  NODE_ENV && `.env.${NODE_ENV}.local`,
  NODE_ENV !== 'test' && '.env.local',
  NODE_ENV && `.env.${NODE_ENV}`,
  '.env',
].filter(Boolean);

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv-expand')(
      require('dotenv').config({
        path: dotenvFile,
      })
    );
  }
});
