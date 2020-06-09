const fs = window.require("fs");
import { EXT } from "./config";

const getSeparator = () => {
  return process.platform === "win32" ? "\\" : "/";
};

const getFilePath = (path, name) => {
  if (path.endsWith("\\") || path.endsWith("/")) {
    return `${path}${name}${EXT}`;
  } else {
    const separator = getSeparator();
    return `${path}${separator}${name}${EXT}`;
  }
};

const checkFileName = name => {
  const reg = /[\\\\/:*?\"<>|]/;
  return reg.test(name);
};

const checkFileAvailabel = (path, name) => {
  if (path.endsWith("\\") || path.endsWith("/")) {
    return !fs.existsSync(`${path}${name}${EXT}`);
  } else {
    const seperator = getSeparator();
    return !fs.existsSync(`${path}${seperator}${name}${EXT}`);
  }
};

const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "uft8" }, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

const writeFile = (path, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, { encoding: "utf8" }, err => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

const renameFile = (path, newPath) => {
  return new Promise((resolve, reject) => {
    fs.rename(path, newPath, err => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

const deleteFile = path => {
  return new Promise((resolve, reject) => {
    fs.unlink(path, err => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

export {
  checkFileName,
  checkFileAvailabel,
  readFile,
  writeFile,
  renameFile,
  deleteFile,
  getFilePath,
  getSeparator
};
