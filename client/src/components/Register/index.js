import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.status === 201) {
      navigate('/login');
    }
  };
  return (
    <>
      <div className=" pt-28 h-screen flex items-center justify-center px-24 max-w-screen mx-auto bg-gray-300 bg-gradient-to-b from-gray-300 to-gray-100">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
          <div className="absolute bottom-8 -right-8 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
          <form onSubmit={handleSubmit}>
            <div className="relative m-8 space-y-4">
              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1">
                  <div className="mb-6 flex justify-center items-center">
                    <div className="text-xl font-semibold p-">
                      Please Register{' '}
                    </div>
                  </div>
                  <div className="mb-6 flex-1 flex justify-center items-center">
                    <label
                      htmlFor="username"
                      class="block mb-2 text-sm font-medium text-gray-900  mr-4"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={user.username}
                      onChange={handleChange}
                      name="username"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      required
                    />
                  </div>

                  <div className="mb-6 flex-1 flex justify-center items-center">
                    <label
                      htmlFor="password"
                      class="block mb-2 text-sm font-medium text-gray-900  mr-11"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      required
                    />
                  </div>
                  <div className="mb-6 flex-1 flex justify-center items-center">
                    <label
                      htmlFor="password"
                      class="block mb-2 text-sm font-medium text-gray-900  mr-4"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1 flex items-center justify-between">
                  <Link to="/">
                    <button
                      type="submit"
                      className="focus:outline-none text-gray-500 bg-gray-200 hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      Go back to Home
                    </button>
                  </Link>

                  <button
                    type="submit"
                    className="focus:outline-none text-white bg-amber-600 hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
