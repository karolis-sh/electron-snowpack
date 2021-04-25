import { contextBridge } from 'electron';
import * as os from 'os';

contextBridge.exposeInMainWorld('_preload_', {
  getOS: () => os.type(),
});
