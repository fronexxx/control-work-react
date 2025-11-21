import '../css/Header.css';
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {type ChangeEvent, useEffect} from "react";
import {genreActions} from "../redux/slices/GenreSlice.ts";
import {movieActions} from "../redux/slices/MovieSlice.ts";

const HeaderComponent = () => {
    const genres = useAppSelector(state => state.genreStoreSlice.genres);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.loadGenres())
    }, []);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const genreId = e.target.value;
        if (genreId === '') {
            dispatch(genreActions.clearSelectedGenre());
            dispatch(movieActions.loadMovies());
        } else {
            dispatch(genreActions.loadMoviesByGenres(genreId));
        }
    };
    return (
        <header className="header">
            <select className="genre-select" onChange={onChange}>
                <option value="">All Genres</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
            <div className='header-user'>
                <p>Igor Botsii</p>
                <img src="https://www.shutterstock.com/image-illustration/avatar-vector-illustration-gender-neutral-260nw-2587614499.jpg" alt="user-info"/>
            </div>
        </header>
    );
};

export default HeaderComponent;
