const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const path=require('path')
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
// app.use
app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', false);

mongoose.connect(MONGO_URI)
.then(()=>{
  console.log("Mongodb Connected")
})
.catch(e=>{
  console.log("Failed", e)
})

const newSchema=new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String,required:true}
})
const user=mongoose.model("user", newSchema)
module.exports=user;
app.get('/',cors(),(req, res)=>{
  res.json("Hello")
})

app.post("/login", async (req, res)=>{
const {name, email}=req.body
try{
  const check=await user.findOne({email:email})
  if(check){
    res.json("exists")
  }
  else{
    res.json("notexist")
  }
}
catch(e){
res.json("Not exist")
}
})

app.post('/signin',async (req,res)=>{
  const{name, email}=req.body
  const data={
    name:name,
    email:email
  }
  try{
const check=await user.findOne({email:email})
if(check){
  res.json("exist")
}
else{
  res.json("not exist")
  await user.insertMany([data])
  
}
  }
  catch(e){
res.json("NotExist")
  }
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
