import MovieList from "../components/MovieComponents/MovieList.tsx";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent.tsx";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent.tsx";

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
