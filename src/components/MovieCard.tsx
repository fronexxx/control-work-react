import type {IMovie} from "../models/IMovie";
import '../css/MovieCard.css';
import {Link} from "react-router";


interface MovieCardProps {
    movie: IMovie;
}

const MovieCard = ({movie}: MovieCardProps) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="movie-card">
            <Link to={`/movies/${movie.id}`}>
                <img
                    className="movie-card__poster"
                    src={imageBaseUrl + movie.poster_path}
                    alt={movie.title}
                />

                <div className="movie-card__info">
                    <h2 className="movie-card__title">{movie.title}</h2>

                    <p className="movie-card__date">📅 {movie.release_date}</p>

                    <p className="movie-card__rating">
                        ⭐ {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)
                    </p>
                </div>
            </Link>
        </div>


    );
};

export default MovieCard;
