import './App.css';
import 'simplebar/dist/simplebar.min.css';
import { message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsFillXCircleFill, BsPlusCircleFill } from "react-icons/bs";

function App() {
  const [inputData, setInputData] = useState("");
  const [toDoList, setToDoList] = useState([]);
  
  const deleteTodo=async(id)=>{
    console.log("id is", id)
    try{
     await axios.delete(`http://localhost:4000/api/v1/deleteItem/${id}`)
    
     console.log("item deleted successfully")
     message.success("item deleted successfully")
     dbToList();
    }
    catch(error){
      console.log("error in deletion")
      message.error("error in deletion")
    }
  }
  


  const dbToList=async()=>{
    try{
      const response=await axios.get('http://localhost:4000/api/v1/getItem');
      console.log(response.data.allData)
    setToDoList(response.data.allData)
    
    console.log("useState list me add hogya")

    }
    catch(error){
      console.log(error);
      message.error("error")
       
    }
  }

   useEffect(()=>{
    dbToList()
   },[])

  const dataChangeHandler = (e) => {
    setInputData(e.target.value);
  };

  const addToListHandler = async () => {
    if (inputData.trim() === "") {
      message.error("Input cannot be empty!");
      return;
    }
     // Check if inputData already exists in toDoList
     const isItemAlreadyAdded = toDoList.some(item => item.toAdd === inputData);

     if (isItemAlreadyAdded) {
      
      message.error("Item already added");
      console.log(isItemAlreadyAdded); 
     } 
    else{

    try {
      const response = await axios.post('http://localhost:4000/api/v1/addItem', { toAdd: inputData });
     
      console.log("Data added to the database:", response.data);
      message.success("data added successfully")
      dbToList();
      
      setInputData("");
    } catch (error) {
      console.error("Error in adding data:", error);
      message.error(error);
    }
  };
}

  return (
    <div className='flex justify-center shadow-2xl shadow-cyan-500/50 bg-[#A78BFA] items-center h-screen'>
      <div className="h-[30rem] rounded-[1rem] w-[20rem] bg-[#e9d5ff] text-white">
        <div className='flex justify-center items-center h-[3rem] bg-[#86198F] mt-[2rem] mb-[1rem] text-[2rem] font-bold'>Add to Cart</div>
        <div className='flex justify-center items-center'>
          <input
            className='border-b-[3px] border-[#86198F] bg-[#e9d5ff] text-[1.5rem] h-[3rem] w-[12rem] ml-[1.5rem] mt-[1rem] mb-[1rem] flex justify-center items-center text-center placeholder-[#86198F] text-black'
            type='text'
            placeholder='Add an Item'
            value={inputData}
            onChange={dataChangeHandler}
          />
          <div className='text-[#86198F] text-5xl' onClick={addToListHandler}><BsPlusCircleFill /></div>
        </div>
        <div className='mt-8 h-[17rem] overflow-y-auto'>
        {toDoList.map(({ _id, toAdd }) => (
          <div className='flex items-center mb-7 ml-12 pl-4 pr-4 space-x-4' key={_id}>
            <div className='text-[#86198F] text-2xl flex items-center' onClick={()=>{deleteTodo(_id)}}>
              <BsFillXCircleFill />
            </div>
            <div className='text-[#86198F] font-bold text-2xl'>{toAdd}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
