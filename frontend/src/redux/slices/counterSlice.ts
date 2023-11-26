import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
  }
const initialState:CounterState={
    value:0
}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        inc:(state)=>{
            state.value++
        },
        dec:(state)=>{
            state.value--
        },
    }

})

export const {inc,dec}=counterSlice.actions
export default counterSlice.reducer;