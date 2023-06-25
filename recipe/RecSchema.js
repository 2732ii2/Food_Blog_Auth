
import mongoose, {Schema,model} from "mongoose";

var recipesch=new Schema({
    Name:String,
    ImgURL:String,
    UserId:String,
    Recipe:String
});
var Recmodel=model("Recipemodel",recipesch);

export default Recmodel;



// var obj_ = {
//   Name: "",
//   ImgURL: "",
//   UserID: window.localStorage.getItem("userID"),
//   Recipe: "",
// };