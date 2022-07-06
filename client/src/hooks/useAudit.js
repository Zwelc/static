import useSWR from 'swr';
import { fetcher } from '../util/fetcher';

export function useAudit() {
  const { data, error } = useSWR('/api/audit', fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
