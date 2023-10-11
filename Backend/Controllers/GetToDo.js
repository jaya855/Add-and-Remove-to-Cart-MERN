const toDo=require('../Models/toDo')
const GetToDo=async(req,res)=>{
    try{
        const result= await toDo.find();
        res.status(200).json({
            success:true,
            message:"all todo data sent from backend",
            allData:result
        })
    }
    catch(error){
       res.status(500).json({
          success:false,
          message:"something went wrong while senting todos",
          
       })
    }

}

module.exports=GetToDo;