const DataTableRow = ({ data }) => {
  return (
    <tr className="border-b  odd:bg-white even:bg-gray-50 ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
      >
        {new Date(data.date).toLocaleString()}
      </th>
      <td className="px-6 py-4">{data.user.username} </td>
      <td className="px-6 py-4">{data.user.email}</td>
      <td className="px-6 py-4">{data.action}</td>
    </tr>
  );
};

export default DataTableRow;
