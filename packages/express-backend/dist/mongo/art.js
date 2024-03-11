"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var art_exports = {};
__export(art_exports, {
  default: () => art_default
});
module.exports = __toCommonJS(art_exports);
var import_mongoose = require("mongoose");
const artSchema = new import_mongoose.Schema(
  {
    artId: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    artist: { type: String, trim: true },
    description: String,
    genres: [String],
    mediums: [String],
    image: String
  },
  { collection: "art" }
);
const ArtModel = (0, import_mongoose.model)("Art", artSchema);
var art_default = ArtModel;
