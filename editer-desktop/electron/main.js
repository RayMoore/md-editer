const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const menuBuilder = require("./menu-builder");

const TITLE = "Cokee";

let mainWindow = null;

let windowOption = {
  width: 1440,
  height: 768,
  minWidth: 1024,
  minHeight: 600,
  title: TITLE,
  webPreferences: {
    nodeIntegration: true,
    enableRemoteModule: true
  }
};

const createWindow = () => {
  if (process.platform === "win32") {
    windowOption["icon"] = path.join(__dirname, "/assets/icon.png");
  }
  mainWindow = new BrowserWindow(windowOption);
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
