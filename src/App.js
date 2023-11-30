// App.js
import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux"; 
import { fetchData } from "./Redux/slices/fetchApiSlice";
import ActionAreaCard from "./components/ActionAreaCard";
import { Box } from "@mui/material";

const App = () => {
  const dispatch=useDispatch()
  const data = useSelector((state) => state.fetchApiSlice.data)
  useEffect(() => {
    dispatch(fetchData())
  }, []);

  return (
    <div>
      
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'10px',padding:'10px'}} >
      {data.map((e)=>{
        return (
          <ActionAreaCard img={e.image} title={e.title} key={e.id} />
          )
        })}
        </Box>
    </div>
  );
};

export default App;
