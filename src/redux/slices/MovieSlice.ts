import type {IMovie} from "../../models/IMovie.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getMovieById, getMovies} from "../../services/api.services.ts";
import type {IMovieExpanded} from "../../models/IMovieExpanded.ts";

type MovieStateType = {
    movies: IMovie[],
    selectedMovie: IMovieExpanded | null;
};
const initMovieSliceState: MovieStateType = {
    movies: [],
    selectedMovie: null,
};

const loadMovies = createAsyncThunk("loadMovies", async (page: string, thunkApi) => {
    try {
        const movies = await getMovies(page);
        return thunkApi.fulfillWithValue(movies);
    } catch (e){
        return thunkApi.rejectWithValue(e);
    }
})

const loadSelectedMovie = createAsyncThunk("loadSelectedMovie", async (id: string, thunkAPI) => {
    try {
        const movie = await getMovieById(id);
        return thunkAPI.fulfillWithValue(movie);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const MovieSlice = createSlice({
    name: 'MovieSlice',
    initialState: initMovieSliceState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
                state.movies = action.payload
            })
            .addCase(loadSelectedMovie.fulfilled, (state, action: PayloadAction<IMovieExpanded>) => {
                state.selectedMovie = action.payload
            }),

});

export const movieActions = {...MovieSlice.actions, loadMovies, loadSelectedMovie};
