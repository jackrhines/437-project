import { Document } from "mongoose";
import { Art } from "packages/ts-models";
import ArtModel from "../mongo/art";

function index(): Promise<Art[]> {
  return ArtModel.find();
}

function get(artId: String): Promise<Art> {
  return ArtModel.find({ artId })
    .then((list) => list[0])
    .catch((err) => {
      throw `${artId} Not Found`;
    });
}

function create(art: Art): Promise<Art> {
  const p = new ArtModel(art);
  return p.save();
}

function update(
  artId: String,
  art: Art
): Promise<Art> {
  return new Promise((resolve, reject) => {
    ArtModel.findOneAndUpdate({ artId }, art, {
      new: true
    }).then((profile) => {
      if (art) resolve(art);
      else reject("Failed to update art");
    });
  });
}

export default { index, get, create, update };