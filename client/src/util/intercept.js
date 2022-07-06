import axios from 'axios';

function intercept(token) {
  axios.interceptors.request.use((config) => {
    const bearer = `Bearer ${token}`;

    config.headers.Authorization = bearer;
    return config;
  });
}

export default intercept;
