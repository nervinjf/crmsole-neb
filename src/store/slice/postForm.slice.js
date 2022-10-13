import { createSlice } from '@reduxjs/toolkit';

export const postFormSlice = createSlice({
    name: "registros",
    initialState: [],
    reducers: {
         postRegistros: () => {

        }
    }
})

export const { getRegistros } = postFormSlice.actions;



export default postFormSlice.reducer;
