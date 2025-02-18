import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/site-logo.jpg";

const Header = () => {
  const [theme, setTheme] = useState("light-theme");
  const [isThemeMode, setIsThemeMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeThemeMode = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
      setIsThemeMode(true);
    } else {
      setTheme("dark-theme");
      setIsThemeMode(false);
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className="">
      <div className="container mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to={"/"}>
            <img src={siteLogo} alt="JobPortal Logo" className="h-10" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button 
          className="md:hidden text-2xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav
          className={`md:flex md:gap-5 absolute md:static top-16 left-0 w-full md:w-auto  md:flex-row flex-col items-center md:items-center p-4 md:p-0 transition-all ${menuOpen ? "flex" : "hidden"}`}
        >
          <Link to={"/"} className="block py-2 md:py-0">Dashboard</Link>
          <Link to={"/post-job"} className="block py-2 md:py-0">Post a Job</Link>
          <Link to={"/login"} className="block py-2 md:py-0">Login</Link>
          <Link to={"/signUp"} className="block py-2 md:py-0">Sign Up</Link>
        </nav>

        {/* Dark and Light Mode */}
        <button className="cursor-pointer ml-4" onClick={changeThemeMode}>
          {isThemeMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
