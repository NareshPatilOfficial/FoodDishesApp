import { createSlice } from "@reduxjs/toolkit";

export const FavouriteSlice = createSlice({
    name:'favourite',
    initialState:{
        favouriteMealIds:[]
    },
    reducers:{
        addInFavourite: (state, action) => {
            state.favouriteMealIds.push(action.payload)
        },
        removeFromFavourite: (state, action) => {
            state.favouriteMealIds = state.favouriteMealIds.filter(mealId => mealId !== action.payload)
        }
    }
})

export const {addInFavourite, removeFromFavourite} = FavouriteSlice.actions;

export default FavouriteSlice.reducer;