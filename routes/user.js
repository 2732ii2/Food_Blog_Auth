import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserModel from "../Schema.js";
import Recmodel from "../recipe/RecSchema.js";


const router =express.Router();


router.post("/register",async(req,res)=>{
    const {username, password}=req.body;
    console.log(username,password);
    try{
      const user = await UserModel.findOne({username});
        console.log(user);
      if (user) {
        return res.json({ message: "user already exists!" });
      }
      // hashing of password

      const hashedpassword = await bcrypt.hash(password, 10);

      const newuser = await UserModel({ username, password: hashedpassword });
      await newuser.save();

      res.json({"message":"user registered"});
    }    
    catch(e)
    {
        console.log(e.message);
    }
})
router.post('/login',async(req,res)=>{
     const { username, password } = req.body;
     try{
        const user = await UserModel.findOne({ username: username });

      if (!user) {
        return res.json({ message: "user doesn't exists!" });
      }
      const isvalidpassword=await bcrypt.compare(password,user.password);

      if(!isvalidpassword){
        return res.json({message:"Username or password is incorrect"});
      }
      const token =jwt.sign({id:user._id},"secret");
      res.json({token,userID:user._id});
     }
     catch(e){
        console.log(e.message);
     }
})

router.post("/sendrecipe", async (req, res) => {
  const values = req.body;
  console.log(values);
  var validaterecp=await Recmodel(values);
  await validaterecp.save();
  console.log("valide recipe",validaterecp);
  res.json({message:"Data Submitted"});
});
router.get("/getrecipe", async (req, res) => {
  // const values = req.body;
  // console.log(values);
  var validaterecp =await Recmodel.find();
  // await validaterecp.save();
  console.log("valide recipe", validaterecp);
  res.json({ message: validaterecp });
});

export {router as userRouter};