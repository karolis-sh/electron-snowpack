import { contextBridge } from 'electron';
import { dialog } from '@electron/remote';
import storage from 'electron-json-storage';

contextBridge.exposeInMainWorld('_preload_', {
  dialog: {
    showErrorBox: (...args) => dialog.showErrorBox(...args),
    showMessageBox: (...args) => dialog.showMessageBox(...args),
  },
  storage,
});
