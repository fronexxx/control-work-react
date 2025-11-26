import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {movieActions} from "../../redux/slices/MovieSlice.ts";
import MovieCard from "./MovieCard.tsx";
import '../../css/MovieCard.css';
import {useSearchParams} from "react-router";
import {genreActions} from "../../redux/slices/GenreSlice.ts";


const MovieList = () => {
    const dispatch = useAppDispatch();
    const {moviesByGenre, selectedGenre} = useAppSelector(state => state.genreStoreSlice);
    const movies = useAppSelector(state => state.movieStoreSlice.movies);
    const moviesToShow = selectedGenre ? moviesByGenre : movies;
    const [searchParams] = useSearchParams({page: '1'});
    useEffect(() => {
        const page = searchParams.get('page') || '1';
        if(selectedGenre){
            dispatch(genreActions.loadMoviesByGenres({genreId: selectedGenre, page}))
        }else {
            dispatch(movieActions.loadMovies(page));
        }

    }, [searchParams, selectedGenre]);
    return (
        <div className="movie-grid">
            {moviesToShow.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieList;
