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
var import_express = __toESM(require("express"));
var import_art = __toESM(require("../services/art"));
var import_uuid = require("uuid");
const router = import_express.default.Router();
router.post("/", (req, res) => {
  const artId = (0, import_uuid.v4)();
  const newArt = req.body;
  newArt.artId = artId;
  import_art.default.create(newArt).then((a) => res.status(201).send(a)).catch((err) => res.status(500).send(err));
});
router.get("/:artId", (req, res) => {
  const { artId } = req.params;
  import_art.default.get(artId).then((a) => {
    if (!a)
      throw "Not found";
    else
      res.json(a);
  }).catch((err) => res.status(404).end());
});
router.get("/", (req, res) => {
  import_art.default.index().then((a) => {
    if (!a)
      throw "Not found";
    else
      res.json(a);
  }).catch((err) => res.status(404).end());
});
router.put("/:artId", (req, res) => {
  const { artId } = req.params;
  const newArt = req.body;
  import_art.default.update(artId, newArt).then((a) => res.json(a)).catch((err) => res.status(404).end());
});
var art_default = router;
