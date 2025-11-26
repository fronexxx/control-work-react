import {useAppDispatch} from "../../redux/store.ts";
import {movieActions} from "../../redux/slices/MovieSlice.ts";
import type {ChangeEvent} from "react";
import '../../css/Search.css';

const SearchMovieComponent = () => {
    const dispatch = useAppDispatch();
    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(value.trim() === '') {
            dispatch(movieActions.loadMovies('1'))
        }else {
            dispatch(movieActions.searchMoviesThunk(value));
        }

    };
    return (
        <div>
            <input type="text" placeholder="Search Movie..." onChange={onSearch} className='search-input'/>
        </div>
    );
};

export default SearchMovieComponent;
