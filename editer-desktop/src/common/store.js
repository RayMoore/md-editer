const Store = window.require("electron-store");
const KEYS = {
  FILES: "files",
  DEFUALT_PATH: "default-path",
  LOCALE: "language"
};
const store = new Store({ name: "store", encryptionKey: "molinz9183" });

const saveFilesToStore = (files = []) => {
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
  store.set(KEYS.DEFUALT_PATH, path);
};

const getFilesFromStore = () => {
  return store.get(KEYS.FILES);
};

const getDefaultPathFromStore = () => {
  return store.get(KEYS.DEFUALT_PATH);
};

const saveLocaleToStore = locale => {
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
  getLocaleFromStore
};
