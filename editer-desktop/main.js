const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const menuBuilder = require("./menu-builder");

const ICON_PATH = path.join(__dirname, "/icon.png");
const TITLE = "Cokee";

let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 768,
    minWidth: 1024,
    minHeight: 600,
    icon: ICON_PATH,
    title: TITLE,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });
  const urlLocation = isDev ? "http://localhost:8080" : "";
  mainWindow.loadURL(urlLocation);
  ipcMain.on("locale-changed", (event, args) => {
    const menu = Menu.buildFromTemplate(menuBuilder(args));
    Menu.setApplicationMenu(menu);
  });
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
