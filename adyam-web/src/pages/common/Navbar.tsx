import React, { useState } from "react";
import "./Navbar.css";
import LanguageSwitcher from "../../language/languageSwitcher";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAuth();

  return (
    <nav className="navbar">
      <div className="logo flex ">
        <img className="circled" src="/adyam-logo.png" width='60' alt="Logo" />
        <h2>Adyam Engineering</h2>
      </div>
     
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href ="#blog">Blogs</a>
        {user ? <a href ="#blog">Logout</a> : <a href ="#blog">Login</a>}
      </div>
      <div  className="flex">
        <LanguageSwitcher/>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
