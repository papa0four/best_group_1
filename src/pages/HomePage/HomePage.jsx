import React, { Fragment } from 'react';
import './HomePage.styles.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Fragment>
      <div className="home-page-container">
        <h1> Humble Abode Management System </h1>
        <div className="links">
          <h2>
            <Link className="custom-button" to={'/login'}>
              Login
            </Link>
          </h2>
          <h2>
            <Link className="custom-button" to={'/register'}>
              Register Account
            </Link>
          </h2>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
