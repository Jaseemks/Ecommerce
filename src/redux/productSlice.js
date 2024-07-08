import {createSlice} from '@reduxjs/toolkit';

const initialState={
    data:[],
}

const productSlice=createSlice({
    name:'productSlice',
    initialState,
    reducers :{
        getProducts: (state,action)=>{
            state.products=action.payload
        }
    }
});

export const {getProducts} =productSlice.actions;
export default productSlice.reducer;