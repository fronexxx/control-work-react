import {useSearchParams} from "react-router";
import '../../css/Pagination.css';

const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});

    let currentPage = Number(searchParams.get('page') || '1');

    const onPrevClick = () => {
        setSearchParams({page: (--currentPage).toString()})
    };

    const onNextClick = () => {
        setSearchParams({page: (++currentPage).toString()})
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
