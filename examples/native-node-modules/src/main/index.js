import { app, BrowserWindow } from 'electron';
import { getAssetURL } from 'electron-snowpack';

require('@electron/remote/main').initialize();

let mainWindow;

function createMainWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false,
    },
  });

  if (process.env.MODE !== 'production') {
    window.webContents.openDevTools();
  }

  window.loadURL(getAssetURL('index.html'));

  window.on('closed', () => {
    mainWindow = null;
  });

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });

  return window;
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
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow();
});
