import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('_preload_', {
  onMainRenderWindowInitialized: () =>
    ipcRenderer.send('main-window-initialized'),
});
