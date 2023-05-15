import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex   md:flex-row gap-2 justify-between w-full h-[8rem]  lg:h-[6rem] items-start py-8 px-4 mb-6  md:ml-0 bg-blue-400">
      <h1 className="flex justify-center font-extrabold text-2xl">
        Movie Repository
      </h1>
      <nav className="">
        <ul className="flex flex-col sm:flex-row gap-2  ">
          <li className="hover:underline hover:underline-offset-2">
            <Link to="/">Movies</Link>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <Link to="/create-movie">Add </Link>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
