import React from "react";
import { Link,} from "react-router-dom";
import siteLogo from "../../assets/site-logo.jpg"
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center flex-wrap ">
        {/* Logo */}
        <div className="flex items-center">
          <Link to={"/"}><img src={siteLogo} alt="JobPortal Logo" className="h-15"/></Link>
        </div>

        {/* Navigation Links */}
        <nav className=" md:flex space-x-8">
          <Link to={"/"} className="text-gray-700 hover:text-blue-500">
            Dashboard
          </Link>
          <Link to={"/post-job"} className="text-gray-700 hover:text-blue-500">
            Post a Job
          </Link>
        </nav>

        {/* User Profile Dropdown */}
        <div className="flex items-center space-x-4 ">
          <Link to={"/login"} className="text-gray-700 hover:text-blue-500">Login</Link>
          <Link to={"/signUp"} className="text-gray-700 hover:text-blue-500">
            Sign Up
          </Link>

          {/* Dropdown Menu */}
          <div className="relative">
            <button className="flex items-center focus:outline-none">
              <img
                src="https://placehold.co/40x40?text=User"
                alt="User"
                className="h-10 w-10 rounded-full"
              />
            </button>
            {/* Dropdown Content */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden">
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;