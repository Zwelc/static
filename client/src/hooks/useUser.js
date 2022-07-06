import useSWR from 'swr';
import { fetcher } from '../util/fetcher';

export function useUser() {
  const { data, mutate } = useSWR('/api/profile', fetcher);

  const loading = !data;
  const user = data?.username;
  return [user, { mutate, loading }];
}
