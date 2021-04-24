import mwp, { ModuleOutput } from 'module-with-process';

const os = require('os');

document.getElementById('os-type').innerHTML = os.type();

const log = (fn: () => ModuleOutput): void => {
  console.log('mwp :>> ', fn);

  console.log(import.meta.env.NODE_ENV);
};

log(mwp);

document.getElementById('content').innerHTML = 'Edit the files and save to reload.';

let count = 0;

const render = () => {
  document.getElementById(
    'counter'
  ).innerHTML = `Page has been open for <code>${count}</code> seconds.`;
};

render();

setInterval(() => {
  count += 1;
  render();
}, 1000);
