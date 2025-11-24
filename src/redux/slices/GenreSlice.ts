import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getGenres, getMoviesByGenres} from "../../services/api.services.ts";
import type {IMovie} from "../../models/IMovie.ts";
import type {IGenres} from "../../models/IGenres.ts";

type GenreStateType = {
    genres: IGenres[];
    moviesByGenre: IMovie[];
    selectedGenre: string | null;
}
const initGenreSliceState: GenreStateType = {genres: [], selectedGenre: null, moviesByGenre: []};

const loadGenres = createAsyncThunk("loadGenres", async (_, thunkApi) => {
    try {
        const genres = await getGenres();
        return thunkApi.fulfillWithValue(genres)
    }catch (e) {
        return thunkApi.rejectWithValue(e);
    }
})

const loadMoviesByGenres = createAsyncThunk(
    "loadMoviesByGenres",
    async ({genreId, page}: { genreId: string, page: string }, thunkAPI) => {
        try {
            const movies = await getMoviesByGenres(genreId, page);
            return thunkAPI.fulfillWithValue({genreId, movies})
        }catch (e){
            return thunkAPI.rejectWithValue(e);
        }
});

export const GenreSlice = createSlice({
    name: 'GenreSlice',
    initialState: initGenreSliceState,
    reducers: {
        clearSelectedGenre: (state) => {
            state.selectedGenre = null;
            state.moviesByGenre = [];
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(loadMoviesByGenres.fulfilled, (state, action) => {
                state.selectedGenre = action.payload.genreId;
                state.moviesByGenre = action.payload.movies
            })
})
export const genreActions = {...GenreSlice.actions, loadMoviesByGenres, loadGenres};
