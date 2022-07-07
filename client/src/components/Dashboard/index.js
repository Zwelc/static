import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';
import { useUser } from '../../hooks/useUser';
import AuditTable from '../Audit';

export default function Dashboard() {
  let navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const [user] = useUser();

  const handleSignOut = (e) => {
    setToken(null);
  };

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });
  return (
    <>
      <div className=" pt-28 h-screen flex flex-col items-center justify-center px-24 max-w-screen mx-auto bg-gray-300 bg-gradient-to-b from-gray-300 to-gray-100">
        <div className="relative w-full mx-auto ">
          <div className="absolute top-0 -left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
          <div className="absolute bottom-8 -right-8 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
          <div className="absolute bottom-2 -right-2 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
          <div className="absolute -top-4 left-20 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
          <AuditTable />
        </div>
      </div>
    </>
  );
}
