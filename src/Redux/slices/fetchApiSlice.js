import { createSlice } from '@reduxjs/toolkit'
import axios from '../axios'

const initialState = {
  data:[],
}
 const fetchApiSlice= createSlice({
  name: 'Api',
  initialState,
  reducers: {
    addData:(state,action)=>{
      return {...state,data:action.payload}
    },
  },
})
export const fetchData=()=> async (dispatch)=>{
    try{
        let response = await axios.get('/products')
        dispatch(addData(response.data))

    }catch(e){
        console.log(e)
    }
}
export const {addData}=fetchApiSlice.actions;
export default fetchApiSlice.reducer;