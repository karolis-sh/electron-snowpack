/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: 'electron-snowpack/config/snowpack.js',
  plugins: ['@snowpack/plugin-react-refresh'],
};
