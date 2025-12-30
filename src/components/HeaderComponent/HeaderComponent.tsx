    import '../../css/Header.css';
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {type ChangeEvent, useEffect} from "react";
import {genreActions} from "../../redux/slices/GenreSlice.ts";
import {movieActions} from "../../redux/slices/MovieSlice.ts";
import {useSearchParams} from "react-router";
    import SearchMovieComponent from "../SearchComponent/SearchMovieComponent.tsx";

const HeaderComponent = () => {
    const genres = useAppSelector(state => state.genreStoreSlice.genres);
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    const genreFromUrl = searchParams.get('genre');
    useEffect(() => {
        dispatch(genreActions.loadGenres())
    }, []);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const genreId = e.target.value;

        setSearchParams({page: '1'});

        if (genreId === '') {
            setSearchParams({page: '1'});

            dispatch(genreActions.clearSelectedGenre());
            dispatch(movieActions.loadMovies('1'));
        } else {
            setSearchParams({page: '1', genre: genreId});
            dispatch(genreActions.loadMoviesByGenres({genreId, page: '1'}));
        }
    };
    return (
        <header className="header">
            <select className="genre-select" value={genreFromUrl || ''} onChange={onChange}>
                <option value="">All Genres</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
            <button
                className="back-btn-icon"
                onClick={() => setSearchParams({ page: '1' })}
                title="Back to page 1"
            >
                ⟵
            </button>

            <SearchMovieComponent/>

            <div className='header-user'>
                <p>Igor Botsii</p>
                <img src="https://www.shutterstock.com/image-illustration/avatar-vector-illustration-gender-neutral-260nw-2587614499.jpg" alt="user-info"/>
            </div>
        </header>
    );
};

export default HeaderComponent;
