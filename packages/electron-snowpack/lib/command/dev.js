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

const getMain = () => {
  let electron;
  let esbuild;

  return {
    kill: () => {
      if (electron && !electron.killed) electron.kill();
      if (esbuild) esbuild.rebuild.dispose();
    },
    dev: async (electronArgs) => {
      let restarting = false;

      const startElectron = async () => {
        const args = [path.join(config.outputDir, 'main/index.js'), ...electronArgs];
        log.info(
          `Starting an ${chalk.bold('electron')} process with arguments: ${log.stringify(args)}`,
          { verbose: true }
        );
        electron = execa('electron', args, { windowsHide: false });
        electron.stdout.on('data', (message) => {
          log.info(message, { label: 'electron' });
        });
        electron.stderr.on('data', (message) => {
          log.error(message, { label: 'electron' });
        });
        electron.on('close', () => {
          if (restarting) {
            startElectron();
            restarting = false;
          } else {
            process.exit(0);
          }
        });
        electron.on('error', () => process.exit(1));
      };

      const startESBuild = async () => {
        const cfg = await getESBuildConfig({
          watch: {
            onRebuild(error) {
              if (error) {
                log.error(`watch build failed:\n${log.stringify(error)}`, { label: 'esbuild' });
              } else {
                restarting = true;
                if (electron) electron.kill();
              }
            },
          },
        });
        log.info(
          `Starting ${chalk.bold('esbuild')} build with config: ${log.stringify(cfg, true)}`,
          { verbose: true }
        );
        esbuild = await esBuild(cfg);
      };

      await startESBuild();
      startElectron();
    },
  };
};

const getRenderer = () => {
  let snowpack;

  return {
    kill: async () => {
      if (snowpack) await snowpack.shutdown();
    },
    dev: async () => {
      const cfg = await getSnowpackConfig();
      log.info(
        `Starting ${chalk.bold('Snowpack')} server with config: ${log.stringify(cfg, true)}`,
        { verbose: true }
      );
      snowpack = await startSnowpackServer({ config: cfg });
    },
  };
};

module.exports = async (electronArgs) => {
  const main = getMain();
  const renderer = getRenderer();

  onExit(async (code) => {
    if (code === 1) {
      log.error('🚨 An unexpected error has occurred!');
    } else {
      log.info('🔌 Shutting down gracefully...');
    }

    try {
      await Promise.all([main.kill(), renderer.kill()]);
    } finally {
      process.exit(code);
    }
  });

  try {
    await renderer.dev();
    await main.dev(electronArgs);
  } catch (err) {
    log.error(err);
    process.exit(1);
  }
};
