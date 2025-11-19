import axios from "axios";
import type {IMovie} from "../models/IMovie.ts";
import type {IMovieResponse} from "../models/IMovieResponse.ts";
import type {IMovieExpanded} from "../models/IMovieExpanded.ts";
import {API_KEY, BASE_URL} from "../urls/urls.ts";
import type {IGenres} from "../models/IGenres.ts";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    params: {api_key: API_KEY},
    headers: {}
});

export const getMovies = async (): Promise<IMovie[]> => {
    const {data: {results}} = await axiosInstance.get<IMovieResponse>('/discover/movie');
    return results;
};

export const getMovieById = async (id: string): Promise<IMovieExpanded>=> {
    const {data: movie} = await axiosInstance.get<IMovieExpanded>(`/movie/${id}`);
    return movie;
}

export const getGenres = async (): Promise<IGenres[]> => {
    const {data: {genres}} = await axiosInstance.get('/genre/movie/list');
    return genres;
};

export const getMoviesByGenres = async (genreId: string): Promise<IMovie[]> => {
    const {data: genreById} = await axiosInstance.get<IMovieResponse>('/discover/movie', {
        params: {with_genres: genreId},
    });
    return genreById.results;
};
