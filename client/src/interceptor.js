import { useContext, useEffect } from 'react';
import { AuthContext } from './context';
import axios from 'axios';

const RequestInterceptor = ({ children }) => {
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      axios.interceptors.request.use(async (config) => {
        const bearer = `Bearer ${token}`;
        config.headers.Authorization = bearer;

        return config;
      });
    }
  }, [token]);

  return <>{children}</>;
};

export default RequestInterceptor;
