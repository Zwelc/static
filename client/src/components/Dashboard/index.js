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
    <div>
      <nav className="fixed z-50 h-24 w-full flex flex-row justify-between items-center px-12 py-2  bg-gray-400 text-gray-70">
        <div className="text-2xl underline decoration-amber-700  text-gray-70">
          Static
        </div>
        <div>
          <button
            className="text-white bg-amber-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={handleSignOut}
          >
            Log Out
          </button>
        </div>
      </nav>
      <div className="h-screen pt-28 bg-gray-100">
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
          <div className="text-xl font-semibold my-4 ">Welcome {user}</div>
          <div className="my-4 w-full">
            <AuditTable />
          </div>
        </div>
      </div>
    </div>
  );
}
