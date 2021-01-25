const path = require('path');
const { promisify } = require('util');
const fs = require('fs');
const readline = require('readline');
const glob = require('glob');

const PROXY_FILE_SUFFIX = '.proxy.js';

const readFirstLine = async (filePath) => {
  const readable = fs.createReadStream(filePath);
  const reader = readline.createInterface({ input: readable });
  const line = await new Promise((resolve) => {
    reader.on('line', (content) => {
      reader.close();
      resolve(content);
    });
  });
  readable.close();
  return line;
};

const writeFirstLine = async (filePath, content) => {
  const file = await promisify(fs.readFile)(filePath, 'utf-8');
  const lines = file.split('\n');
  lines[0] = content;
  await promisify(fs.writeFile)(filePath, lines.join('\n'), 'utf-8');
};

module.exports = () => {
  return {
    name: '@electron-snowpack/snowpack-plugin-relative-assets',
    async optimize({ buildDirectory }) {
      const proxies = await promisify(glob)(path.join(buildDirectory, `**/*${PROXY_FILE_SUFFIX}`));
      await Promise.all(
        proxies.map(async (filePath) => {
          const firstLine = await readFirstLine(filePath);
          const relativeAssetProxy = path.relative(buildDirectory, filePath);
          const relativeAsset = relativeAssetProxy.substring(
            0,
            relativeAssetProxy.length - PROXY_FILE_SUFFIX.length
          );
          if (firstLine === `export default "/${relativeAsset}";`) {
            await writeFirstLine(filePath, `export default "${relativeAsset}";`);
          }
        })
      );
    },
  };
};
