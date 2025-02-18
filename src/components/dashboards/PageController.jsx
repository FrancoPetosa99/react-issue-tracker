import React from 'react';

function PageController({ useTable }) {
    return(
        <div className="d-flex justify-content-between align-items-center mt-3">
            <button
                className="btn btn-primary"
                onClick={() => useTable.previousPage()}
                disabled={!useTable.getCanPreviousPage()}
                >
                <i className="bi bi-arrow-left"></i>
            </button>

            <span>
                Página{" "}
            <strong>
                {useTable.getState().pagination.pageIndex + 1} de{" "}
                {useTable.getPageCount()}
            </strong>
            </span>

            <button
                className="btn btn-primary"
                onClick={() => useTable.nextPage()}
                disabled={!useTable.getCanNextPage()}
                >
                <i className="bi bi-arrow-right"></i>
            </button>
      </div>
    );
}

export default PageController;