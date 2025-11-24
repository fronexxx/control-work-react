import axios from "axios";
import type {IMovie} from "../models/IMovie.ts";
import type {IMovieResponse} from "../models/IMovieResponse.ts";
import type {IMovieExpanded} from "../models/IMovieExpanded.ts";
import {API_KEY, BASE_URL} from "../urls/urls.ts";
import type {IGenres} from "../models/IGenres.ts";
import type {ITrailer} from "../models/ITrailer.ts";
import type {ITrailerResponse} from "../models/ITrailerResponse.ts";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    params: {api_key: API_KEY},
    headers: {}
});

export const getMovies = async (page: string): Promise<IMovie[]> => {
    const {data: {results}} = await axiosInstance.get<IMovieResponse>('/discover/movie',{
        params: {page: page}
    });
    return results;
};

export const getMovieById = async (id: string): Promise<IMovieExpanded>=> {
    const {data: movie} = await axiosInstance.get<IMovieExpanded>(`/movie/${id}`);
    return movie;
}

export const getMovieTrailerById = async (id: string): Promise<ITrailer[]> => {
    const {data: {results: MovieTrailer}} = await axiosInstance.get<ITrailerResponse>(`/movie/${id}/videos`);
    return MovieTrailer;
}

export const getGenres = async (): Promise<IGenres[]> => {
    const {data: {genres}} = await axiosInstance.get('/genre/movie/list');
    return genres;
};

export const getMoviesByGenres = async (genreId: string, page: string): Promise<IMovie[]> => {
    const {data: genreById} = await axiosInstance.get<IMovieResponse>('/discover/movie', {
        params: {with_genres: genreId, page},
    });
    return genreById.results;
};
