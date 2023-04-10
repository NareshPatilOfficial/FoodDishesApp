import { configureStore } from "@reduxjs/toolkit";
import FavouriteReducer from '../components/FavouriteSlice';

export default configureStore({
    reducer: {
        Favourite: FavouriteReducer
    }
});