(document.getElementById('counter') as HTMLParagraphElement).innerHTML =
  'Edit the files and save to reload.';

let count: number = 0;

const render = (): void => {
  (document.getElementById(
    'counter'
  ) as HTMLParagraphElement).innerHTML = `Page has been open for <code>${count}</code> seconds.`;
};

render();

setInterval((): void => {
  count += 1;
  render();
}, 1000);
