import { combineReducers } from "@reduxjs/toolkit";
import fetchApiSlice from "./fetchApiSlice";

const rootReducer=combineReducers({
    fetchApiSlice:fetchApiSlice
})

export default rootReducer