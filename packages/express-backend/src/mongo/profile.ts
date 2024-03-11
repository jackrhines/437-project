import { Schema, Model, Document, model } from "mongoose";
import { Profile } from "../models/profile";

const profileSchema = new Schema<Profile>(
    {
        userid: { type: String, required: true, trim: true },
        name: { type: String, required: true, trim: true },
        nickname: { type: String, trim: true },
        city: { type: String, trim: true },
        genres: [String],
        mediums: [String],
        artists: [String],
        avatar: String,
        color: String,
    },
    { collection: "user_profiles" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;