import '../css/Header.css';
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {genreActions} from "../redux/slices/GenreSlice.ts";
import {movieActions} from "../redux/slices/MovieSlice.ts";

const HeaderComponent = () => {
    const genres = useAppSelector(state => state.genreStoreSlice.genres);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.loadGenres())
    }, []);
    return (
        <header className="header">
            <select onChange={(e) => {
                const genreId = e.target.value;
                if (genreId === '') {
                    dispatch(genreActions.clearSelectedGenre());
                    dispatch(movieActions.loadMovies());
                } else {
                    dispatch(genreActions.loadMoviesByGenres(genreId))
                }
            }}>
                <option value="">All Genres</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
        </header>
    );
};

export default HeaderComponent;
