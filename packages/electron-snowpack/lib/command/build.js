const chalk = require('chalk');
const { build: esBuild } = require('esbuild');
const { build: spBuild } = require('snowpack');

const log = require('../log');
const getESBuildConfig = require('../get-esbuild-config');
const getSnowpackConfig = require('../get-snowpack-config');

module.exports = async () => {
  const buildMain = async () => {
    const cfg = await getESBuildConfig();
    log.info(
      `Starting ${chalk.bold('esbuild')} with config: ${log.stringify(
        cfg,
        true,
      )}`,
      {
        verbose: true,
      },
    );
    const start = log.info(chalk.yellow('! building main files...'), {
      label: 'esbuild',
      measure: true,
    });
    await esBuild(cfg);
    log.info(`${chalk.green('✔')} build complete`, {
      label: 'esbuild',
      measure: start,
    });
  };
  const buildRenderer = async () => {
    const cfg = await getSnowpackConfig();
    log.info(
      `Starting ${chalk.bold('Snowpack')} with config: ${log.stringify(
        cfg,
        true,
      )}`,
      {
        verbose: true,
      },
    );
    await spBuild({ config: cfg });
  };

  try {
    await Promise.all([buildMain(), buildRenderer()]);
    log.info('🏁 Full build complete!');
  } catch (err) {
    log.error(err);
    process.exit(1);
  }
};
