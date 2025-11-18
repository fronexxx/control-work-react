import {useParams} from "react-router";
import {useEffect} from "react";

const MovieInfo = () => {
    const {id} = useParams();
    useEffect(() => {

    }, [id]);
    return (
        <div>

        </div>
    );
};

export default MovieInfo;
