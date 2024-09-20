/*const { contextBridge, ipcRenderer } = require('electron');

// Exposing APIs to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
    runOctave: (command) => ipcRenderer.send('run-octave', command),
    receiveOctaveResult: (callback) => ipcRenderer.on('octave-result', (event, result) => {
        console.log("Result received in renderer:", result); // Log to check the result in renderer
        callback(result);
    }),
});*/
