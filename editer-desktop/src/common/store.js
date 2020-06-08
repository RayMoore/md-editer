const Store = window.require("electron-store");
const KEYS = {
  FILES: "files",
  DEFUALT_PATH: "default-path",
  LOCALE: "language",
  FONT: "font"
};
const store = new Store({ name: "store", encryptionKey: "molinz9183" });

const saveFilesToStore = (files = []) => {
  //console.log("save files");
  let filesObj = files.reduce((result, file) => {
    const { id, path, title, createdAt, updatedAt } = file;
    result[id] = {
      id,
      path,
      title,
      createdAt,
      updatedAt
    };
    return result;
  }, {});
  store.set(KEYS.FILES, filesObj);
};

const saveDefaultPathToStore = path => {
  //console.log("save path");
  store.set(KEYS.DEFUALT_PATH, path);
};

const getFontFromStore = () => {
  return store.get(KEYS.FONT);
};

const saveFontToStore = font => {
  store.set(KEYS.FONT, font);
};

const getFilesFromStore = () => {
  return store.get(KEYS.FILES);
};

const getDefaultPathFromStore = () => {
  return store.get(KEYS.DEFUALT_PATH);
};

const saveLocaleToStore = locale => {
  //console.log("save locale");
  store.set(KEYS.LOCALE, locale);
};

const getLocaleFromStore = () => {
  return store.get(KEYS.LOCALE);
};

export {
  saveFilesToStore,
  getFilesFromStore,
  saveDefaultPathToStore,
  getDefaultPathFromStore,
  saveLocaleToStore,
  getLocaleFromStore,
  getFontFromStore,
  saveFontToStore
};
