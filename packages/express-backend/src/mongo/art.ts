import { Schema, Model, Document, model } from "mongoose";
import { Art } from "ts-models";

const artSchema = new Schema<Art>(
  {
    artId: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    artist: { type: String, trim: true },
    description: String,
    genres: [String],
    mediums: [String],
    image: String,
  },
  { collection: "art" }
);

const ArtModel = model<Art>("Art", artSchema);

export default ArtModel;