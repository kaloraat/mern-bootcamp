import mongoose from "mongoose";
const { Schema } = mongoose;

// schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
    },
    email: {
      type: String,
      trim: true,
      unique: "Email already exists",
      required: "Email is required",
    },
    password: {
      type: String,
      required: "Password is required",
      min: 6,
      max: 64,
    },
    secret: {
      type: String,
      required: true,
      lowercase: true,
    },
    about: {},
    photo: {
      data: Buffer,
      contentType: String,
    },
    following: [{ type: Schema.ObjectId, ref: "User" }],
    followers: [{ type: Schema.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
