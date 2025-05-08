import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const LoginPage = () => {
  const {login} = useContext(AppContext);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccess(null);

    // try {
    //   const response = await axios.post("http://localhost:5000/api/v1/users/login", formData);
    //   setMessage(response.data.message);
    //   setSuccess(response.data.success);
    // } catch (error) {
    //   setMessage(error.response?.data?.message || "Something went wrong");
    //   setSuccess(false);
    // }

    login(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>
        {message && (
          <p className={`text-center mb-4 ${success ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
