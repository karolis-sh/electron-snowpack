import path from 'path';

import { app, BrowserWindow, ipcMain } from 'electron';
import { getAssetURL } from 'electron-snowpack';

let mainWindow;
let mainWindowInitialized = false;
let loadingWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (process.env.MODE !== 'production') {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadURL(getAssetURL('index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.on('devtools-opened', () => {
    mainWindow.focus();
    setImmediate(() => {
      mainWindow.focus();
    });
  });

  ipcMain.on('main-window-initialized', () => {
    if (!mainWindowInitialized) {
      mainWindowInitialized = true;
      mainWindow.show();
      mainWindow.focus();
      if (loadingWindow) {
        loadingWindow.close();
      }
    }
  });
}

function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 300,
    height: 180,
    show: false,
    parent: mainWindow,
    frame: false,
  });

  loadingWindow.loadURL(getAssetURL('loading.html'));
  loadingWindow.on('closed', () => {
    loadingWindow = null;
  });
  loadingWindow.webContents.on('did-finish-load', () => {
    loadingWindow.show();
  });
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindowInitialized = false;
    createMainWindow();
    createLoadingWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  createMainWindow();
  createLoadingWindow();
});
