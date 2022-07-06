import DataTableRow from './TableRow';
import TablePagination from './Pagination';
import { useState } from 'react';

const DataTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const defaultSort = (a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }

    return 0;
  };
  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - data.length);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Customer
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort(defaultSort)
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <DataTableRow key={row.id} data={row} />
            ))}
          {emptyRows > 0 && (
            <tr
              className="bg-white border-b "
              style={{ height: 53 * emptyRows }}
            >
              <td className="px-6 py-3" colSpan={4}></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr className="bg-white border-b  w-full">
            <td colSpan={4}>
              <TablePagination
                count={data.length}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DataTable;
