// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-center">
      <h1 className=" text-6xl mb-5">Vite + React + Tailwind</h1>
      <h2 className="text-4xl mb-4">Template</h2>
      <nav>
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
      </nav>
    </header>
  );
}

export default Header;
