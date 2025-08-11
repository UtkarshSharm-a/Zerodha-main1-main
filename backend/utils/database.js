const mongoose=require("mongoose")
require('dotenv').config({ path: "../.env" });

const dataBaseConnection=()=>{
  mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB connected successfully")
  }).catch((error)=>{
    console.log(error)
  })
}

module.exports={dataBaseConnection}

