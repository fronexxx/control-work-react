import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {movieActions} from "../redux/slices/MovieSlice.ts";
import MovieCard from "./MovieCard.tsx";
import '../css/MovieCard.css';


const MovieList = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movieStoreSlice.movies);
    useEffect(() => {
        dispatch(movieActions.loadMovies());
    }, []);
    return (
        <div className="movie-grid">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
