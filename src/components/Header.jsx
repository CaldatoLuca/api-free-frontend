// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" bg-yellow-300 text-black drop-shadow-2xl ">
      <div className="container mx-auto py-6 flex justify-between items-center">
        {/* Title */}
        <div className=" flex items-center justify-center">
          <img
            src="/bee.jpg"
            alt="bee"
            width={100}
            height={100}
            className=" rounded-2xl mr-5"
          />
          <h1 className=" text-4xl">API Posts</h1>
        </div>

        {/* NAV */}
        <nav>
          <ul className="flex gap-3 justify-center">
            <li className="flex justify-center items-center group">
              <img
                src="/bee.jpg"
                alt="bee"
                width={30}
                height={30}
                className="rounded-xl mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              />
              <Link
                to="/"
                className="text-lg hover:text-yellow-900 relative z-10"
              >
                Home
              </Link>
            </li>

            <li className="flex justify-center items-center group">
              <img
                src="/bee.jpg"
                alt="bee"
                width={30}
                height={30}
                className="rounded-xl mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              />
              <Link
                to="/add-post"
                className="text-lg hover:text-yellow-900 relative z-10"
              >
                Add Post
              </Link>
            </li>

            <li className="flex justify-center items-center group">
              <img
                src="/bee.jpg"
                alt="bee"
                width={30}
                height={30}
                className="rounded-xl mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              />
              <Link
                to="/login"
                className="text-lg hover:text-yellow-900 relative z-10"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <nav>
        <ul className="flex gap-3 justify-center">
          <li>
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/page-one" className="hover:text-orange-500">
              Page One
            </Link>
          </li>
          <li>
            <Link to="/page-two" className="hover:text-orange-500">
              Page Two
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
