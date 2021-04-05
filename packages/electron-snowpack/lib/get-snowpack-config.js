const { loadConfiguration } = require('snowpack');

module.exports = async () => {
  const dev = process.env.NODE_ENV !== 'production';

  return loadConfiguration(dev ? { devOptions: { hmr: true } } : {});
};
