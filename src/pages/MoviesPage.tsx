import MovieList from "../components/MovieList.tsx";
import HeaderComponent from "../components/HeaderComponent.tsx";

const MoviesPage = () => {
    return (
        <div>
            <HeaderComponent/>
            <MovieList/>
        </div>
    );
};

export default MoviesPage;
