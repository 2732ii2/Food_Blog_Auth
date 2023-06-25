import {Schema,model} from "mongoose";

var jwtuserschema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});
 const UserModel=model("jwtusers",jwtuserschema);

 export default UserModel;

