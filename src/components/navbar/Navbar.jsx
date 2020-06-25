import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    backgroundColor: '#575757',
  };

  return (
    <nav
      style={{
        marginBottom: '2rem',
      }}
    >
      <div className="nav-wrapper nav-extended grey darken-2">
        <NavLink
          to="/home"
          className="brand-logo"
          style={{
            marginLeft: '2rem',
          }}
        >
          <i className="material-icons"> hotel </i>HAMS{' '}
        </NavLink>{' '}
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/home" activeStyle={activeStyle}>
              Home{' '}
            </NavLink>{' '}
          </li>{' '}
          <li>
            <NavLink to="/bookroom" activeStyle={activeStyle}>
              Book Room{' '}
            </NavLink>{' '}
          </li>{' '}
          <li
            style={{
              marginRight: '5rem',
            }}
          >
            <NavLink to="/guests" activeStyle={activeStyle}>
              Guests{' '}
            </NavLink>{' '}
          </li>{' '}
          <li>
            <div> User </div>{' '}
          </li>{' '}
          <li>
            <a className="waves-effect waves-light btn"> Sign Out </a>{' '}
          </li>{' '}
        </ul>{' '}
      </div>{' '}
    </nav>
  );
};

export default Navbar;
