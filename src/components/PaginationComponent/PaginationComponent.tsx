import {useSearchParams} from "react-router";
import '../../css/Pagination.css';
import {useAppSelector} from "../../redux/store.ts";

const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});

    const currentPage = Number(searchParams.get('page') || '1');

    const genre = useAppSelector(state => state.genreStoreSlice.selectedGenre);

    const updatePage = (page: number) => {
        const params: { page: string; genre?: string } = {
            page: page.toString()
        };

        if (genre) {
            params.genre = genre;
        }

        setSearchParams(params);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const onPrevClick = () => {
        updatePage(currentPage - 1);
    };

    const onNextClick = () => {
        updatePage(currentPage + 1);
    };

    return (
        <div className="pagination">
            <button
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={onPrevClick}
            >
                Prev
            </button>

            <span className="pagination-page">{currentPage}</span>

            <button
                className="pagination-btn"
                disabled={currentPage === 500}
                onClick={onNextClick}
            >
                Next
            </button>
        </div>
    );
};

export default PaginationComponent;
