const toDo=require('../Models/toDo')
const RemoveFromList=async(req,res)=>{
try{
    console.log(req.body)
   const id= req.params.id;
   console.log("backend tak pahuch gya and id ->" , id)
   await toDo.findByIdAndDelete(id)
   res.status(200).json({
    success:true,
    message:"data deleted successfully"
   })
}
catch(error){
    res.status(500).json({
        success:false,
        message:"something went wrong while deleting"
       })
}
}
module.exports=RemoveFromList