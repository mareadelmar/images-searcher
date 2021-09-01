import React from "react";

const Pagination = ({ previousPage, nextPage }) => {
    return (
        <div className="pagination py-3 flex">
            <button
                onClick={previousPage}
                className="btn btn-info mr-1"
                type="button"
            >
                Anterior &larr;
            </button>
            <button onClick={nextPage} className="btn btn-info" type="button">
                Siguiente &rarr;
            </button>
        </div>
    );
};

export default Pagination;
