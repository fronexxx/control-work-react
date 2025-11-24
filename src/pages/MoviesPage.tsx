import MovieList from "../components/MovieList.tsx";
import HeaderComponent from "../components/HeaderComponent.tsx";
import PaginationComponent from "../components/PaginationComponent.tsx";

const MoviesPage = () => {
    return (
        <div>
            <HeaderComponent/>
            <MovieList/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;
