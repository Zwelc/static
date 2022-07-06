const TablePagination = ({ count, page, rowsPerPage, onPageChange }) => {
  const handleFirstPageButtonClick = (e) => {
    onPageChange(e, 0);
  };

  const handleBackPageButtonClick = (e) => {
    onPageChange(e, page - 1);
  };

  const handleNextPageButtonClick = (e) => {
    onPageChange(e, page + 1);
  };

  const handleLastPageButtonClick = (e) => {
    onPageChange(e, Math.max(Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className="flex justify-between rounded-md shadow-sm px-6 py-3">
      <div className="px-6 py-3">
        {count > 0 && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {page * rowsPerPage + 1} - {page * rowsPerPage + rowsPerPage} of{' '}
            {count}
          </span>
        )}
      </div>
      <div>
        <button
          type="button"
          disabled={page === 0}
          onClick={handleFirstPageButtonClick}
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-amber-700 focus:z-10 focus:ring-2 focus:ring-amber-700 focus:text-amber-700"
        >
          First
        </button>
        <button
          type="button"
          disabled={page === 0}
          onClick={handleBackPageButtonClick}
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-amber-700 focus:z-10 focus:ring-2 focus:ring-amber-700 focus:text-amber-700"
        >
          Previous
        </button>
        <button
          type="button"
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          onClick={handleNextPageButtonClick}
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-amber-700 focus:z-10 focus:ring-2 focus:ring-amber-700 focus:text-amber-700"
        >
          Next
        </button>
        <button
          type="button"
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          onClick={handleLastPageButtonClick}
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-amber-700 focus:z-10 focus:ring-2 focus:ring-amber-700 focus:text-amber-700"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
