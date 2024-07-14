import mongoose from "mongoose";

export const dbConnection=()=>{
  mongoose.connect(process.env.MONGO_URI,{
    dbName:"HOSPITAL_MANAGENEMT_SYSTEM"
  })
  .then(()=>{
    console.log("Database Connected Succesfully")
  })
  .catch((err)=>{
    console.log(`Error while connecting to Database:${err}`)
  })
}