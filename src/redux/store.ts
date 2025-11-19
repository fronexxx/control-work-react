import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {MovieSlice} from "./slices/MovieSlice.ts";
import {GenreSlice} from "./slices/GenreSlice.ts";

export const store = configureStore({
    reducer: {
        movieStoreSlice: MovieSlice.reducer,
        genreStoreSlice: GenreSlice.reducer,
        // filterStoreSlice: FilterSlice.reducer
    },

});
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
