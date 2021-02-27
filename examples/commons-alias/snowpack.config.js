/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: 'electron-snowpack/config/snowpack.js',
  mount: {
    'src/commons': '/commons',
  },
  alias: {
    '@/': './src/',
  },
};
