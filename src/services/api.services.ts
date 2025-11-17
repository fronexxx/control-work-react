import axios from "axios";
import type {IMovie} from "../models/IMovie.ts";
import type {IMovieResponse} from "../models/IMovieResponse.ts";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a0b1bb8cdc46acbb55369f4e97b106ca';


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    params: {api_key: API_KEY},
    headers: {}
});

export const getMovies = async (): Promise<IMovie[]> => {
    const {data: {results}} = await axiosInstance.get<IMovieResponse>('/discover/movie');
    return results;
};
