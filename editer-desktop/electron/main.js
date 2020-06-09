const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const menuBuilder = require("./menu-builder");

const ICON_PATH = path.join(__dirname, "/assets/icon.png");
const TITLE = "Cokee";

let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 768,
    minWidth: 1024,
    minHeight: 600,
    title: TITLE,
    icon: ICON_PATH,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });
  const urlLocation = `file://${__dirname}/index.html`;
  mainWindow.loadURL(urlLocation);
  // default menu
  const locale = app.getLocale() || "en-US";
  const menu = Menu.buildFromTemplate(menuBuilder(locale));
  Menu.setApplicationMenu(menu);
  ipcMain.on("locale-changed", (event, args) => {
    // menu rebuild on locale change
    const newMenu = Menu.buildFromTemplate(menuBuilder(args));
    Menu.setApplicationMenu(newMenu);
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
