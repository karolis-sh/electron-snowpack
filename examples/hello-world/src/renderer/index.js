document.getElementById('content').innerHTML =
  'Edit the files and save to reload.';

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
