import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count : 0
}


const counterSlice = createSlice({
    name : 'counter',
    initialState : initialState,

    reducers:{
        increment : (s) => {
            s.count = s.count + 1
        },
        decrement : (s) => {
            s.count = s.count - 1
        },
        reset: (s) => {
            s.count = 0
        } 
    }

})


export const {increment, decrement, reset} = counterSlice.actions

export default counterSlice.reducer