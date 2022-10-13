import { createSlice } from '@reduxjs/toolkit';

export const getFormSlice = createSlice({
    name: 'getregistros',
    initialState: [],
    reducers: {
        getRegistros: (status, action) => {
            const registros = action.payload
            return registros
        }
    }
})

export const { getRegistros } = getFormSlice.actions;

export default getFormSlice.reducer;
