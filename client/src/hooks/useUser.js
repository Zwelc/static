import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export function useUser() {
  const { data, mutate } = useSWR('/api/profile', fetcher);

  const loading = !data;
  const user = data?.username;
  return [user, { mutate, loading }];
}
