import { useState } from 'react';
import { AuthContext } from '../../context';
import Navbar from '../Navbar';

function Auth({ children }) {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <Navbar />
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
