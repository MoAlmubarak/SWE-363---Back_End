import mongoose, { mongo } from "mongoose";
 
const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });


const UserModel = mongoose.model("users" , UserSchema)
//module.exports = UserModel
export default UserModel;