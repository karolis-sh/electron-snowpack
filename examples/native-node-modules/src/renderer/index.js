const { app, dialog } = require('@electron/remote');
const path = require('path');
const sharp = require('sharp');

const inputEl = document.getElementById('input');
const generateEl = document.getElementById('generate');
const outputRedEl = document.getElementById('output-r');
const outputGreenEl = document.getElementById('output-g');
const outputBlueEl = document.getElementById('output-b');
const errorEl = document.getElementById('error');

const selectFile = async () => {
  const { filePaths } = await dialog.showOpenDialog({
    filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg'] }],
  });
  return filePaths[0];
};

const generate = async (src) => {
  const temp = app.getPath('temp');
  const extname = path.extname(src);
  const filename = path.basename(src).slice(0, -extname.length);

  const fileRed = path.join(temp, `${filename}-red${extname}`);
  const fileGreen = path.join(temp, `${filename}-green${extname}`);
  const fileBlue = path.join(temp, `${filename}-blue${extname}`);

  await Promise.all([
    sharp(src).flop().tint('red').toFile(fileRed),
    sharp(src).flop().flip().tint('green').toFile(fileGreen),
    sharp(src).flip().tint('blue').toFile(fileBlue),
  ]);

  outputRedEl.src = `file://${fileRed}`;
  outputRedEl.title = fileRed;
  outputGreenEl.src = `file://${fileGreen}`;
  outputGreenEl.title = fileGreen;
  outputBlueEl.src = `file://${fileBlue}`;
  outputBlueEl.title = fileBlue;
};

generateEl.addEventListener('click', async () => {
  let src;
  try {
    src = await selectFile();
    if (src) {
      inputEl.src = `file://${src}`;
      inputEl.title = src;
      generate(src);
    }
  } catch (err) {
    console.error(err);
    errorEl.innerHTML = `src="${src}"\n\n${err}`;
  }
});
