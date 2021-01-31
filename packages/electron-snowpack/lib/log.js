const chalk = require('chalk');

const { name } = require('../package.json');

let measurement = 0;
const measurements = {};

const log = (fn, level) => (message, options = {}) => {
  const verbose = options.verbose || false;
  const label = options.label || name;
  const { measure } = options;

  let output;
  let elapsed = -1;
  if (measure === true) {
    measurement += 1;
    output = measurement;
    measurements[measurement] = Date.now();
  } else if (typeof measure === 'number' && measurements[measure] != null) {
    elapsed = Date.now() - measurements[measure];
  }

  if (process.env.QUIET || (verbose && !process.env.VERBOSE)) return output;
  fn(
    `${chalk[{ info: 'dim', warn: 'yellow', error: 'red' }[level]](`[${label}]`)} ${message}${
      elapsed >= 0 ? chalk.dim(` [${(elapsed / 1000).toFixed(2)}s]`) : ''
    }`
  );

  return output;
};

module.exports = {
  /* eslint-disable no-console */
  info: log(console.log, 'info'),
  warn: log(console.warn, 'warn'),
  error: log(console.error, 'error'),
  /* eslint-enable */
  stringify: (obj, multiline) =>
    chalk.cyanBright(JSON.stringify(obj, ...(multiline ? [null, 2] : []))),
};
