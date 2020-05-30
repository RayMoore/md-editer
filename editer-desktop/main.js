const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  const urlLocation = isDev ? "http://localhost:8080" : "";
  mainWindow.loadURL(urlLocation);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
  if (!mainWindow) createWindow();
});
