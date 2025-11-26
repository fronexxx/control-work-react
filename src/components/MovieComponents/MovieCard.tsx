import type {IMovie} from "../../models/IMovie.ts";
import '../../css/MovieCard.css';
import {Link} from "react-router";
import {posterUrl} from "../../urls/urls.ts";
import {useAppSelector} from "../../redux/store.ts";
import GenreBadge from "../../Badges/GenreBadge.tsx";


interface MovieCardProps {
    movie: IMovie;
}


const MovieCard = ({movie}: MovieCardProps) => {
    const AllGenres = useAppSelector(state => state.genreStoreSlice.genres);
    const movieGenres = movie.genre_ids?.map(id => AllGenres.find(genre => genre.id === id)?.name)
        .filter(Boolean);

    return (
        <div className="movie-card">
            <Link to={`/movies/${movie.id}`}>
                <img
                    className="movie-card__poster"
                    src={posterUrl + movie.poster_path}
                    alt={movie.title}
                />

                <div className="movie-card__info">
                    <h2 className="movie-card__title">{movie.title}</h2>

                    <p className="movie-card__date">📅 {movie.release_date}</p>

                    <p className="movie-card__rating">
                        ⭐ {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)
                    </p>
                    <div className='movie-card__genres'>
                        {movieGenres?.map((name, index) => (
                            <GenreBadge key={index} name={name!}/>
                            ))}
                    </div>
                </div>
            </Link>
        </div>


    );
};

export default MovieCard;
