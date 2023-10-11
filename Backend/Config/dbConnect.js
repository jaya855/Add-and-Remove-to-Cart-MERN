const mongoose=require('mongoose')
const dbConnect=async()=>{
try{
   await mongoose.connect(process.env.DBURL)
   console.log("db connected successfully")
}
catch(error){
   console.log("error in db connection")
}
}
module.exports=dbConnect;