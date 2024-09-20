const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
//const { exec } = require('child_process');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1380,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    mainWindow.loadURL('http://localhost:3000'); // URL of the React development server
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});


/*
ipcMain.on('run-octave', (event, arg) => {
    // Provide the full path to octave.exe if it's not in PATH
    const octavePath = 'C:\\Users\\assistenza\\AppData\\Local\\Programs\\GNU Octave\\Octave-8.4.0\\octave-launch.exe';
    
    exec(`${octavePath} --eval "${arg}"`, (error, stdout, stderr) => {
        if (error) {
            console.error("Error running Octave:", error);
            event.reply('octave-result', `Error: ${error.message}`);   ------------------> Tryed to implement the child_process to make octave work via React/Electron app
            return;
        }
        event.reply('octave-result', stdout);
    });
});

*/


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
