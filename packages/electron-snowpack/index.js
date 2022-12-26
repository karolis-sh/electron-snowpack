const path = require('path');

exports.getAssetURL = (asset) => {
  return process.env.NODE_ENV !== 'production'
    ? new URL(
        asset,
        `http://localhost:${process.env.SNOWPACK_PORT}/`,
      ).toString()
    : new URL(`file:///${path.join(__dirname, asset)}`).href;
};
