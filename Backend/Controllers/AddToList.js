const toDo=require('../Models/toDo')
const AddToList=async(req,res)=>{
  console.log("backend tak pahuch gya -> try se pehle")
    try{
      console.log("backend tak pahuch gya -> try ke andar")
      console.log("body -> ",req.body)
      const toAdd=req.body;
      console.log("data jo frontend se aara h -> " ,toAdd)
       const newData=await toDo.create(toAdd);
       console.log("data added successfully")

       res.status(200).json({
         success:true,
         message:"data added successfully",
         newData:newData
       })
    }
    catch (error) {
      console.log("error aagya")
      console.error("Error adding data:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error while adding data",
        error: error.message, // Send the error message for debugging.
      });
    }
    

}

module.exports=AddToList;