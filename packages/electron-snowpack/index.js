const url = require('url');
const path = require('path');

exports.getAssetURL = (asset) => {
  return process.env.NODE_ENV !== 'production'
    ? new URL(asset, `http://localhost:${process.env.SNOWPACK_PORT}/`).toString()
    : url.format({
        pathname: path.join(__dirname, asset),
        protocol: 'file',
        slashes: true,
      });
};
