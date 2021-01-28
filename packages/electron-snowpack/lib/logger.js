const chalk = require('chalk');

const log = (fn, level) => (name, message) => {
  fn(`${chalk[{ info: 'dim', warn: 'yellow', error: 'red' }[level]](`[${name}]`)} ${message}`);
};

module.exports = {
  /* eslint-disable no-console */
  info: log(console.log, 'info'),
  warn: log(console.warn, 'warn'),
  error: log(console.error, 'error'),
  /* eslint-enable */
};
