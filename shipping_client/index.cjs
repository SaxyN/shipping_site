const { app, BrowserWindow } = require("electron");

let mainWindow;
app.on("ready", () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: "./src/assets/blackbird_logo_white.png"
    });
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.removeMenu();
})