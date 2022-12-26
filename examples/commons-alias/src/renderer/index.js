// eslint-disable-next-line import/no-unresolved
import { ENTRY_FILE } from '@/commons';

document.getElementById(
  'content',
).innerHTML = `Edit the files (public/${ENTRY_FILE}, src/renderer/*) and save to reload.`;

let count = 0;

const render = () => {
  document.getElementById(
    'counter',
  ).innerHTML = `Page has been open for <code>${count}</code> seconds.`;
};

render();

setInterval(() => {
  count += 1;
  render();
}, 1000);
