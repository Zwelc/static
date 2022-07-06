import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <nav className="fixed z-50 h-24 w-full flex flex-row justify-between items-center px-12 py-2  bg-gray-400 text-gray-70">
        <div className="text-2xl underline decoration-amber-700  text-gray-70">
          Static
        </div>
        <div>
          <Link to="/register">
            <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-200 hover:text-amber-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="text-white bg-amber-800 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
              Login
            </button>
          </Link>

          <div></div>
        </div>
      </nav>

      <section className="bg-gray-400 text-gray-700  px-6 h-screen pt-24">
        <div className="grid grid-cols-6 p-4">
          <div className="col-span-4">
            <h1 className="text-4xl font-bold">Welcome to Static</h1>
            <p className="text-xl">Static is a simple bread browsing site.</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              aspernatur natus debitis corrupti harum similique mollitia aliquid
              facere sit dignissimos dolor sed, distinctio veniam placeat est
              quis, atque doloremque consequatur. Accusamus sapiente dolore
              culpa, in cupiditate architecto esse eveniet, modi, molestiae quam
              minima ipsam quas non eum distinctio odit possimus repudiandae?
              Quia quo nostrum odit magni similique, fuga eum error. Sapiente
              maxime quibusdam, aperiam culpa eaque cumque debitis incidunt
              nesciunt porro obcaecati eos autem! Unde fugit odio tenetur
              molestiae, amet repellendus, sit nam doloremque voluptas quo qui?
              Laboriosam, est quo. Est quae eius provident accusantium,
              blanditiis quam voluptate! Voluptate natus tempora eum
              voluptatibus hic, quo nobis porro deserunt officia fuga, cumque
              dolores tenetur libero recusandae quod
            </p>
          </div>
          <div></div>
        </div>
      </section>
      <section className="bg-gray-100 h-screen pt-24 px-6 ">
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="h-96 w-full shadow-md rounded py-4 px-3  flex flex-col justify-between items-center bg-white">
            <div className="text-xl font-semibold">Static</div>
            <div className="p-3 leading-6 mx-2 ">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              aspernatur natus debitis corrupti harum similique mollitia aliquid
              facere sit dignissimos dolor sed, distinctio veniam placeat est
              quis, atque doloremque consequatur. Accusamus sapiente dolore
              culpa, in cupiditate architecto
            </div>
            <button className="text-white bg-amber-800 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
              Learn More
            </button>
          </div>
          <div className="h-96 w-full shadow-md rounded py-4 px-3  flex flex-col justify-between items-center bg-white">
            <div className="text-xl font-semibold">Static</div>
            <div className="p-3 leading-6 mx-2 ">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              aspernatur natus debitis corrupti harum similique mollitia aliquid
              facere sit dignissimos dolor sed, distinctio veniam placeat est
              quis, atque doloremque consequatur. Accusamus sapiente dolore
              culpa, in cupiditate architecto
            </div>
            <button className="text-white bg-amber-800 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
              Learn More
            </button>
          </div>
          <div className="h-96 w-full shadow-md rounded py-4 px-3  flex flex-col justify-between items-center bg-white">
            <div className="text-xl font-semibold">Static</div>
            <div className="p-3 leading-6 mx-2 ">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              aspernatur natus debitis corrupti harum similique mollitia aliquid
              facere sit dignissimos dolor sed, distinctio veniam placeat est
              quis, atque doloremque consequatur. Accusamus sapiente dolore
              culpa, in cupiditate architecto
            </div>
            <button className="text-white bg-amber-800 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className=" h-24 w-full flex flex-row justify-between items-center px-12 py-2  bg-gray-400 text-gray-70 p-4 shadow">
        <span className="text-sm text-gray-800 sm:text-center ">
          © 2022 <span className="hover:underline">Static</span>. All Rights
          Reserved.
        </span>
        <div>
          <a
            href="/api/docs"
            target="_blank"
            className="mr-4 hover:underline md:mr-6 "
          >
            Documentation
          </a>
        </div>
      </section>
    </>
  );
}
