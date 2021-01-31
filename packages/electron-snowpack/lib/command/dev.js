const path = require('path');
const chalk = require('chalk');
const onExit = require('signal-exit');
const execa = require('execa');
const { build: esBuild } = require('esbuild');
const { startServer: startSnowpackServer } = require('snowpack');

const config = require('../../config');
const log = require('../log');
const getESBuildConfig = require('../get-esbuild-config');
const getSnowpackConfig = require('../get-snowpack-config');

module.exports = async () => {
  let electron;
  let snowpack;
  let esbuild;

  onExit(async (code) => {
    if (code === 1) {
      log.error('🚨 An unexpected error has occurred!');
    } else {
      log.info('🔌 Shutting down gracefully...');
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
    const cfg = await getSnowpackConfig();
    log.info(`Starting ${chalk.bold('Snowpack')} server with config: ${log.stringify(cfg, true)}`, {
      verbose: true,
    });
    snowpack = await startSnowpackServer({ config: cfg });
  };

  const startESBuild = async () => {
    const cfg = await getESBuildConfig();
    log.info(`Starting ${chalk.bold('esbuild')} build with config: ${log.stringify(cfg, true)}`, {
      verbose: true,
    });
    esbuild = await esBuild(cfg);
  };

  const startElectron = async () => {
    const args = [path.join(config.outputDir, 'main/index.js')];
    log.info(
      `Starting an ${chalk.bold('electron')} process with arguments: ${log.stringify(args)}`,
      {
        verbose: true,
      }
    );
    electron = execa('electron', args);
    electron.stdout.on('data', (message) => {
      log.info(message, { label: 'electron' });
    });
    electron.stderr.on('data', (message) => {
      log.error(message, { label: 'electron' });
    });
    electron.on('close', () => process.exit(0));
    electron.on('error', () => process.exit(1));
    await electron;
  };

  try {
    await Promise.all([startSnowpack(), startESBuild()]);
    await startElectron();
  } catch (err) {
    log.error(err);
    process.exit(1);
  }
};
