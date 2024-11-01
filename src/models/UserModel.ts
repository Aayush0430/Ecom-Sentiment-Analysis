import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: [true, "give usernmae"],
    unique: true,
  },
  password: {
    type: String,
    // required: [true, "give password"],
  },
  email:{
    type:String,
    unique:true
  }
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);