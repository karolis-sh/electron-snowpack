import mwp from 'module-with-process';

const os = require('os');

window.mwp = mwp;

console.log('mwp :>> ', mwp);

document.getElementById('content').innerHTML = 'Edit the files and save to reload.';

document.getElementById('os-type').innerHTML = os.type();

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
