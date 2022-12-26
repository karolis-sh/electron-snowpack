import { ENTRY_FILE } from '@/commons';

(document.getElementById('content') as HTMLParagraphElement).innerHTML =
  'Edit the files (public/' +
  ENTRY_FILE +
  ', src/renderer/*) and save to reload.';

let count: number = 0;

const render = (): void => {
  (
    document.getElementById('counter') as HTMLParagraphElement
  ).innerHTML = `Page has been open for <code>${count}</code> seconds.`;
};

render();

setInterval((): void => {
  count += 1;
  render();
}, 1000);
