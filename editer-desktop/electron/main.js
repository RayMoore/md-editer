const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const menuBuilder = require("./menu-builder");
const title = "Cokee";
let mainWindow = null;
let windowOption = {
  width: 1440,
  height: 768,
  minWidth: 1024,
  minHeight: 600,
  title,
  frame: false,
  center: true,
  show: false,
  webPreferences: {
    nodeIntegration: true,
    enableRemoteModule: true,
  },
};

const createWindow = () => {
  if (process.platform === "darwin") {
    windowOptions["titleBarStyle"] = "hidden";
  }
  mainWindow = new BrowserWindow(windowOption);
  const urlLocation = `file://${__dirname}/index.html`;
  mainWindow.loadURL(urlLocation);
  // default menu
  const locale = app.getLocale();
  const menu = Menu.buildFromTemplate(menuBuilder(locale, false));
  Menu.setApplicationMenu(menu);
  ipcMain.on("locale-changed", (event, args) => {
    // menu rebuild on locale change
    const newMenu = Menu.buildFromTemplate(menuBuilder(args, false));
    Menu.setApplicationMenu(newMenu);
  });
  ipcMain.on("close-app", () => {
    ipcMain.removeAllListeners();
    mainWindow.destroy();
  });
  mainWindow.on("ready-to-show", function () {
    mainWindow.show();
  });
  mainWindow.on("close", function (event) {
    event.preventDefault();
    mainWindow.webContents.send("app-will-close");
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
