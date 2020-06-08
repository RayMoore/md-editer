const fs_promise = window.require("fs").promises;
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
  return fs_promise.readFile(path, { encoding: "utf8" });
};

const writeFile = (path, content) => {
  return fs_promise.writeFile(path, content, { encoding: "utf8" });
};

const renameFile = (path, newPath) => {
  return fs_promise.rename(path, newPath);
};

const deleteFile = path => {
  return fs_promise.unlink(path);
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
