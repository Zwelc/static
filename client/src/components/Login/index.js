import { useState, useEffect, useContext } from 'react';

import { useUser } from '../../hooks/useUser';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context';
import intercept from '../../util/intercept';

export default function Login() {
  const { token, setToken } = useContext(AuthContext);
  let navigate = useNavigate();
  const [user, { mutate }] = useUser();
  const [sign, setSign] = useState({
    username: '',
    password: '',
  });
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSign((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const request = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sign),
      });

      if (request.status === 201) {
        const data = await request.json();
        console.log(`Setting token now: ${data.access_token}`);

        setToken(data.access_token);
        mutate('/api/profile');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <nav className="fixed z-50 h-24 w-full flex flex-row justify-between items-center px-12 py-2  bg-gray-400 text-gray-70">
        <div className="text-2xl underline decoration-amber-700  text-gray-70">
          <Link to="/">Static</Link>
        </div>
        <div>
          <Link to="/register">
            <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-200 hover:text-amber-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button
              className="text-white bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 cursor-not-allowed"
              disabled
            >
              Login
            </button>
          </Link>

          <div></div>
        </div>
      </nav>
      <div className="relative h-screen bg-gray-400 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold my-6">Please Sign in to Static</h1>
        <div className="w-60">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                id="username"
                name="username"
                value={sign.username}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your password
              </label>
              <input
                id="password"
                name="password"
                value={sign.password}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="mb-6">
              <Link to="/">
                <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-200 hover:text-amber-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                  Back to Home
                </button>
              </Link>

              <button
                type="submit"
                className="text-white bg-amber-800 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
