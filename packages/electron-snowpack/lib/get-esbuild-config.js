const path = require('path');
const { promisify } = require('util');
const glob = require('glob');

const config = require('../config');

module.exports = async (more) => {
  const dev = process.env.NODE_ENV !== 'production';

  const define = {};

  ['NODE_ENV', 'MODE'].forEach((key) => {
    define[`process.env.${key}`] = JSON.stringify(process.env[key]);
  });

  Object.keys(process.env).forEach((key) => {
    if (key.startsWith('SNOWPACK_')) {
      define[`process.env.${key}`] = JSON.stringify(process.env[key]);
    }
  });

  let logLevel = 'warning';

  if (process.env.QUIET) {
    logLevel = 'silent';
  } else if (process.env.VERBOSE) {
    logLevel = 'info';
  }

  return {
    platform: 'node',
    format: 'cjs',
    entryPoints: await promisify(glob)('src/main/@(index|preload).[jt]s'),
    outdir: path.join(config.outputDir, 'main'),
    bundle: true,
    external: ['electron'],
    define,
    logLevel,
    ...(dev ? {} : { minify: true }),
    ...more,
  };
};
