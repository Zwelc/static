import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className=" pt-32 h-screen flex justify-between px-24 max-w-screen mx-auto bg-gray-300 bg-gradient-to-b from-gray-300 to-gray-100">
        <div className="max-w-md">
          <span className="font-medium text-amber-600">Lorem ipsum dolor</span>
          <p className="text-6xl font-bold tracking-tighter leading-tight">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="pt-8 text-lg font-normal text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            blanditiis facilis, magnam explicabo illo expedita laborum neque aut
            pariatur quae sapiente repudiandae recusandae vitae sint sed
            praesentium mollitia, nobis ducimus? Sunt odio recusandae excepturi
            quia eius molestiae harum voluptas dolore veniam corrupti minima
            perferendis nemo distinctio atque, tempora ea sapiente ex corporis
            praesentium, laborum expedita. Quo sed dolorum nostrum nesciunt. Non
            distinctio eligendi illo aut a quo sed tempora temporibus incidunt,
            ratione saepe repellat perferendis? Non vel, alias optio fugiat,
            quas nobis maxime quo assumenda aperiam, minus excepturi veritatis
            natus!
          </p>
          <Link to="/login">
            <button className="focus:outline-none text-white bg-amber-600 hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 my-2">
              Get Started{' '}
            </button>
          </Link>
        </div>
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute bottom-8 -right-8 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

          <div className="relative top-8 left-4 h-[712px] w-[350px] rounded-[60px] bg-black overflow-hidden shadow-xl border-[14px] border-black z-10">
            <div className="bg-amber-500 absolute inset-0 h-full w-full object-cover"></div>
          </div>
        </div>
      </div>
    </>
  );
}
