import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [activeButton, setActiveButton] = useState("accedi");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        loginData
      );
      const { token } = response.data;
      console.log(response.data);
      localStorage.setItem("jwt", token);
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        registerData
      );
      console.log(response.data);
      const { token } = response.data;
      localStorage.setItem("jwt", token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="login" className="text-neutral-100 bg-neutral-800">
      <div className="h-screen flex justify-center items-center">
        {/* img */}
        <div className="w-1/2 h-full hidden lg:block">
          <img
            src="/bee.jpg"
            alt="login-img"
            className="w-full h-full object-cover object-bottom block"
          />
        </div>

        {/* Forms */}
        <div className="flex flex-col gap-5 justify-center items-center w-1/2">
          {/* Logo */}
          <Link to="/" className="text-yellow-400 text-3xl font-bold">
            API Posts
          </Link>

          {/* switch */}
          <div className="flex gap-4 bg-neutral-200 rounded-3xl p-1 text-neutral-900">
            <button
              className={`border rounded-3xl px-5 py-2 ${
                activeButton === "accedi" ? "bg-yellow-400" : "bg-transparent"
              }`}
              onClick={() => handleClick("accedi")}
            >
              Login
            </button>
            <button
              className={`border rounded-3xl px-5 py-2 ${
                activeButton === "registrati"
                  ? "bg-yellow-400"
                  : "bg-transparent"
              }`}
              onClick={() => handleClick("registrati")}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleLoginSubmit}
            className={`flex flex-col gap-5 ${
              activeButton === "accedi" ? "" : "hidden"
            }`}
          >
            {/* Email */}
            <div className="flex-col flex">
              <label htmlFor="login-email">Email</label>
              <input
                type="text"
                name="email"
                id="login-email"
                value={loginData.email}
                onChange={handleLoginChange}
                className="p-1 border bg-neutral-50 text-neutral-900 hover:border-yellow-400 rounded-md outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Password */}
            <div className="flex-col flex">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                name="password"
                id="login-password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="p-1 border bg-neutral-50 text-neutral-900 hover:border-yellow-400 rounded-md outline-none focus:border-yellow-400 transition"
              />
            </div>

            <button
              type="submit"
              className="bg-neutral-800 rounded-3xl text-neutral-100 py-1 hover:bg-yellow-400 transition"
            >
              <Link to="/">Login</Link>
            </button>
          </form>

          {/* Register Form */}
          <form
            onSubmit={handleRegisterSubmit}
            className={`flex flex-col gap-5 ${
              activeButton === "registrati" ? "" : "hidden"
            }`}
          >
            {/* Name */}
            <div className="flex-col flex">
              <label htmlFor="register-name">Name</label>
              <input
                type="text"
                name="name"
                id="register-name"
                value={registerData.name}
                onChange={handleRegisterChange}
                className="p-1 border bg-neutral-50 text-neutral-900 hover:border-yellow-400 rounded-md outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Email */}
            <div className="flex-col flex">
              <label htmlFor="register-email">Email</label>
              <input
                type="text"
                name="email"
                id="register-email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="p-1 border bg-neutral-50 text-neutral-900 hover:border-yellow-400 rounded-md outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Password */}
            <div className="flex-col flex">
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                name="password"
                id="register-password"
                value={registerData.password}
                onChange={handleRegisterChange}
                className="p-1 border bg-neutral-50 text-neutral-900 hover:border-yellow-400 rounded-md outline-none focus:border-yellow-400 transition"
              />
            </div>

            <button
              type="submit"
              className="bg-neutral-800 rounded-3xl text-neutral-100 py-1 hover:bg-yellow-400 transition"
            >
              {/* <Link to="/">Register</Link> */}
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
