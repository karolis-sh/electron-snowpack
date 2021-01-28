/* eslint-disable global-require */
const fs = require('fs');
const { logger } = require('snowpack');

const config = require('../config');

if (process.env.QUIET) {
  logger.level = 'silent';
} else if (process.env.VERBOSE) {
  logger.level = 'debug';
}

const { NODE_ENV } = process.env;

const dev = NODE_ENV !== 'production';

process.env.SNOWPACK_PUBLIC_BASE_HREF = config.baseHref;
process.env.SNOWPACK_PUBLIC_RENDERER_BASE_HREF = config.rendererBaseHref;
if (dev) {
  process.env.SNOWPACK_PORT = config.snowpackPort;
}

/**
 * Based on:
 * https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-dotenv
 */
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
