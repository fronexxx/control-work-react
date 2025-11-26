import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getMovieTrailerById} from "../../services/api.services.ts";

const MovieTrailerComponent = () => {
    const {id} = useParams();
    const [trailer, setTrailer] = useState<string | null>(null);
    useEffect(() => {
        if(id) {
           getMovieTrailerById(id).then(videos => {
               const foundTrailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');
               if (foundTrailer) setTrailer(foundTrailer.key);
           })
        }
    }, [id]);
    return (
        <div>
            {trailer ? (
                <iframe
                    className="movie-trailer"
                    src={`https://www.youtube.com/embed/${trailer}`}
                    title="YouTube trailer"
                    allowFullScreen
                ></iframe>
            ) : (
                <p className="no-trailer">No trailer found</p>
            )}
        </div>
    );
};

export default MovieTrailerComponent;
