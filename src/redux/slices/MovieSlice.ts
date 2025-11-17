import type {IMovie} from "../../models/IMovie.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getMovies} from "../../services/api.services.ts";

type MovieStateType = {
    movies: IMovie[]
};
const initMovieSliceState: MovieStateType = {movies: []};

const loadMovies = createAsyncThunk("loadMovies", async (_, thunkApi) => {
    try {
        const movies = getMovies();
        return thunkApi.fulfillWithValue(movies);
    } catch (e){
        console.log(e);
        return thunkApi.rejectWithValue(e);
    }
})

export const MovieSlice = createSlice({
    name: 'MovieSlice',
    initialState: initMovieSliceState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
                state.movies = action.payload
            })
});

export const movieActions = {...MovieSlice.actions, loadMovies};
