const path = require('path');
const { promisify } = require('util');
const rimraf = require('rimraf');
const onExit = require('signal-exit');
const execa = require('execa');
const { build: esBuild } = require('esbuild');
const { build: spBuild, startServer } = require('snowpack');
const logger = require('./logger');

const config = require('../config');
const getESBuildConfig = require('./get-esbuild-config');
const getSnowpackConfig = require('./get-snowpack-config');

exports.clean = async () => {
  try {
    await promisify(rimraf)(config.outputDir);
  } catch (err) {
    logger.error('electron-snowpack', err);
    process.exit(1);
  }
};

exports.dev = async () => {
  let electron;
  let snowpack;
  let esbuild;

  onExit(async (code) => {
    if (code === 1) {
      logger.error('electron-snowpack', '🚨 An unexpected error has occurred!');
    } else {
      logger.info('electron-snowpack', '🔌 Shutting down gracefully...');
    }

    try {
      if (electron && !electron.killed) electron.kill();
      if (snowpack) await snowpack.shutdown();
      if (esbuild) esbuild.rebuild.dispose();
    } finally {
      process.exit(code);
    }
  });

  const startSnowpack = async () => {
    const spConfig = await getSnowpackConfig();
    snowpack = await startServer({ config: spConfig });
  };

  const startESBuild = async () => {
    esbuild = await esBuild(await getESBuildConfig({ incremental: true }));

    // TODO:
    // https://esbuild.github.io/api/#incremental
    // let result2 = await result.rebuild()
  };

  const startElectron = async () => {
    electron = execa('electron', [path.join(config.outputDir, 'main/index.js')]);
    electron.stdout.on('data', (message) => {
      logger.info('electron', message);
    });
    electron.stderr.on('data', (message) => {
      logger.error('electron', message);
    });
    electron.on('close', () => process.exit(0));
    electron.on('error', () => process.exit(1));
    await electron;
  };

  try {
    await Promise.all([startSnowpack(), startESBuild()]);
    await startElectron();
  } catch (err) {
    logger.error('electron-snowpack', err);
    process.exit(1);
  }
};

exports.build = async () => {
  try {
    await Promise.all([
      esBuild(await getESBuildConfig()),
      spBuild({ config: await getSnowpackConfig() }),
    ]);
  } catch (err) {
    logger.error('electron-snowpack', err);
    process.exit(1);
  }
};
