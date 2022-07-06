import { useAudit } from '../../hooks/useAudit';
import DataTable from '../Datatable';
import Spinner from '../Loading/Spinner';

const AuditTable = () => {
  const { data, isLoading, isError } = useAudit();

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }
  return (
    <>
      <DataTable data={data} />
    </>
  );
};

export default AuditTable;
