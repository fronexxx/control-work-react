import {useParams} from "react-router";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {movieActions} from "../redux/slices/MovieSlice.ts";
import {backdropUrl, posterUrl} from "../urls/urls.ts";
import '../css/MovieInfo.css';

const MovieInfo = () => {
    const {id} = useParams();
    const movie = useAppSelector(state => state.movieStoreSlice.selectedMovie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(movieActions.loadSelectedMovie(id));
    }, [id]);

    if(!movie) return <div>Loading...</div>;
    return (
        <div className="movie-info-page" style={{backgroundImage: `url(${backdropUrl + movie.backdrop_path})`}}>
            <div className="movie-info-overlay">
                <div className="movie-info-container">
                    <img className="movie-info-poster" src={posterUrl + movie.poster_path} alt={movie.title}/>

                    <div className="movie-info-data">
                        <h1 className="movie-info-title">{movie.title}</h1>
                        <p className="movie-info-tagline">{movie.tagline}</p>
                        <p className="movie-info-overview">{movie.overview}</p>

                        <div className="movie-info-details">
                            <p><strong>Release:</strong> {movie.release_date}</p>
                            <p><strong>Runtime:</strong> {movie.runtime} min</p>
                            <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
                            <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
                            <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
                            <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
                            <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>
                        </div>

                        <div className="movie-info-extra">
                            <h2>Production</h2>
                            <ul>
                                {movie.production_companies.map(pc => (
                                    <li key={pc.id}>{pc.name}</li>
                                ))}
                            </ul>

                            <h2>Countries</h2>
                            <p>{movie.production_countries.map(c => c.name).join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
