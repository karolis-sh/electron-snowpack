import * as path from 'path';
import { app, BrowserWindow } from 'electron';
import { getAssetURL } from 'electron-snowpack';

import { ENTRY_FILE } from './constants';

let mainWindow: BrowserWindow | null | undefined;

function createMainWindow(): BrowserWindow {
  const window = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (process.env.MODE !== 'production') {
    window.webContents.openDevTools();
  }

  window.loadURL(getAssetURL(ENTRY_FILE));

  window.on('closed', (): void => {
    mainWindow = null;
  });

  window.webContents.on('devtools-opened', (): void => {
    window.focus();
    setImmediate((): void => {
      window.focus();
    });
  });

  return window;
}

// quit application when all windows are closed
app.on('window-all-closed', (): void => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', (): void => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', (): void => {
  mainWindow = createMainWindow();
});
