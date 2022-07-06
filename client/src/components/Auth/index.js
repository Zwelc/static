import { useState } from 'react';
import { AuthContext } from '../../context';

function Auth({ children }) {
  const [token, setToken] = useState(null);
  console.log('Auth Container:', token);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
