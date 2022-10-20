import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  const [click, setclick] = useState(true);
  function handle() {
    setclick(!click);
  }
  return (
    <header>
      <div className="container">
        <nav className="navigation">
          <Link to="/">
            <img src="./images/logo.png" alt="Logo" className="logo" />
          </Link>
          <div className="mobile_menu_icon" onClick={handle}>
            <ion-icon
              name={click ? 'menu-outline' : 'close-outline'}
            ></ion-icon>
          </div>
          <ul className={click ? 'nav_menu' : 'nav_menu active'}>
            <li className="nav_list">
              <NavLink to="/about" className="nav_link" onClick={handle}>
                About
              </NavLink>
            </li>
            <li className="nav_list">
              <NavLink to="/portfolio" className="nav_link" onClick={handle}>
                Portfolio
              </NavLink>
            </li>
            <li className="nav_list">
              <NavLink to="/contact" className="nav_link" onClick={handle}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
