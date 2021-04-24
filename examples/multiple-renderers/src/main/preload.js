import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('_preload_', {
  ping: (...args) => ipcRenderer.send(...args),
});
