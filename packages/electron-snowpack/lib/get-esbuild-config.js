const path = require('path');
const { promisify } = require('util');
const glob = require('glob');

const config = require('../config');

module.exports = async (more) => {
  const dev = process.env.NODE_ENV !== 'production';

  const define = {};

  ['NODE_ENV'].forEach((key) => {
    define[`process.env.${key}`] = JSON.stringify(process.env[key]);
  });
  define['process.env.MODE'] = define['process.env.NODE_ENV'];

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
    ...(dev
      ? {
          entryPoints: await promisify(glob)('src/main/**/*.js'),
          outdir: path.join(config.outputDir, 'main'),
        }
      : {
          entryPoints: ['src/main/index.js'],
          outfile: path.join(config.outputDir, 'main/index.js'),
          bundle: true,
          external: ['electron'],
        }),
    define,
    logLevel,
    ...more,
  };
};
