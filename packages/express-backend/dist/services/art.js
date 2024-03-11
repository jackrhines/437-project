"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var art_exports = {};
__export(art_exports, {
  default: () => art_default
});
module.exports = __toCommonJS(art_exports);
var import_art = __toESM(require("../mongo/art"));
function index() {
  return import_art.default.find();
}
function get(artId) {
  return import_art.default.find({ artId }).then((list) => list[0]).catch((err) => {
    throw `${artId} Not Found`;
  });
}
function create(art) {
  const p = new import_art.default(art);
  return p.save();
}
function update(artId, art) {
  return new Promise((resolve, reject) => {
    import_art.default.findOneAndUpdate({ artId }, art, {
      new: true
    }).then((profile) => {
      if (art)
        resolve(art);
      else
        reject("Failed to update art");
    });
  });
}
var art_default = { index, get, create, update };
