const express=require('express')
const router = express.Router();
const AddToList=require('../Controllers/AddToList')
const RemoveFromList=require('../Controllers/RemoveFromList')
const GetToDo= require('../Controllers/GetToDo')

router.post('/addItem',AddToList);
router.get('/getItem',GetToDo),
router.delete('/deleteItem/:id',RemoveFromList);

module.exports=router;