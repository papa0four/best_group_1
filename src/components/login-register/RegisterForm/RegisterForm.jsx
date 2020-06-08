import React from 'react';
import '../form-styles/LoginRegister.styles.css';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div>
      <div className="form-container">
        <h2> Register to HAMS </h2>
        <form>
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="password" name="confirm-password" placeholder="Confirm Password" required />
          <input type="submit" name="submit" value="Register" />
        </form>
        <Link className="register" to={'/login'}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
