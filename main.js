const {app, BrowserWindow, ipcMain } = require("electron");
const path = require("path")

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
        titleBarStyle: "hidden",
        titleBarOverlay: {
            color: "#333",
            symbolColor: "#ddd",
        },
    });

    win.loadFile("index.html");

    ipcMain.on("hide-me", () => {
        win.minimize();
    });
}

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});