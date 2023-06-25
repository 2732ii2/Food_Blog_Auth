// console.log("hello ");

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./routes/user.js";

const app=express();


app.use(express.json());
app.use(cors());
app.use("/",userRouter);

const Db="mongodb+srv://Mkhan:Ashad123@cluster0.uydprj9.mongodb.net/?retryWrites=true&w=majority";
async function caller(){
  try{
      mongoose.connect(Db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log("connected");

  }
  catch(e){
    console.log(e.message);
  }
}
caller();
app.get("/",(req,res)=>{
  res.send("hello");
})
const Port = process.env.Port || "3300";
app.listen(Port, () => {
  console.log("hello world today");
});


// db+srv://Mkhan:Ashad123@cluster0.uydprj9.mongodb.net/?retryWrites=true&w=majority