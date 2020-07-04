import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <Link className='nav-brand' to='/'>
          PhotoSearch
        </Link>
        <ul className='nav-links'>
          <li className='nav-item'>
            <Link to='/' className='nav-a'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-a'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
