import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import { useUser } from '../../hooks/useUser';

export default function Navbar() {
  const [user] = useUser();
  const { setToken } = useContext(AuthContext);

  const handleSignOut = (e) => {
    setToken(null);
  };
  return (
    <nav className="fixed h-24 flex flex-row justify-between items-center bg-gray-300 w-full px-8">
      <Link to="/">
        <span className="text-3xl">Static</span>
      </Link>
      {user ? (
        <div>
          <a
            href="/api/docs"
            target="_blank"
            className="focus:outline-none text-gray-500 bg-gray-200 hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Documentation
          </a>
          <button
            className="text-white bg-amber-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={handleSignOut}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/register">
            <button className="focus:outline-none text-gray-500 bg-gray-200 hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="focus:outline-none text-white bg-amber-600 hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
