import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
      setCount(count + 1);
  };

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>BookFinder</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
            <button className="custom-button" onClick={handleButtonClick}>Cliccami </button>
            </li>
            <li className='nav-item'>
              <span className="count-badge">{count}</span>
            </li>
            <li className='nav-item'>
              <Link to = "/Home-redux" className='nav-link'>Redux home</Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar