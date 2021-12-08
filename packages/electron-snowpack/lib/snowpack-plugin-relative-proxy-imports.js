const path = require('path');
const { promisify } = require('util');
const fs = require('fs');
const readline = require('readline');
const glob = require('glob');

const PROXY_SUFFIX = '.proxy.js';

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
    name: '@electron-snowpack/snowpack-plugin-relative-proxy-import',
    async optimize({ buildDirectory }) {
      const proxies = await promisify(glob)(path.join(buildDirectory, `**/*${PROXY_SUFFIX}`));
      await Promise.all(
        proxies.map(async (filePath) => {
          const firstLine = await readFirstLine(filePath);
          const relativeProxyImport = path.relative(buildDirectory, filePath);
          const relativeImport = relativeProxyImport.substring(
            0,
            relativeProxyImport.length - PROXY_SUFFIX.length
          );
          if (firstLine === `export default "${path.posix.join('/', relativeImport)}";`) {
            await writeFirstLine(filePath, `export default "${relativeImport}";`);
          }
        })
      );
    },
  };
};
