import mwp from 'module-with-process';

const os = require('os');
const v8 = require('v8');

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

window.mwp = mwp;

console.log('mwp :>> ', mwp);

const stats = v8.getHeapStatistics();

document.getElementById('heap-stats').innerHTML = JSON.stringify(
  {
    os_type: os.type(),
    heap_size_limit: formatBytes(stats.heap_size_limit),
    total_available_size: formatBytes(stats.total_available_size),
  },
  null,
  2
);

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
