
const mongoose=require('mongoose')

const toDoSchema=new mongoose.Schema({
    toAdd:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports=mongoose.model('toDo',toDoSchema);