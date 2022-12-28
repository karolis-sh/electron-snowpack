const path = require('path');
const { promisify } = require('util');

const rimraf = require('rimraf');

const config = require('../../config');
const log = require('../log');

module.exports = async () => {
  try {
    const dir = path.join(process.cwd(), config.outputDir);
    await promisify(rimraf)(dir);
    log.info(`Removed directory: ${log.stringify(dir)}`, { verbose: true });
  } catch (err) {
    log.error(err);
    process.exit(1);
  }
};
