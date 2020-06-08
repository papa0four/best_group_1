import React from 'react';
import '../form-styles/LoginRegister.styles.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="form-container">
      <h2>Login to HAMS</h2>
      <form>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" name="submit" value="Log In" />
      </form>
      <Link className="register" to={'/register'}>
        Register Account
      </Link>
    </div>
  );
};

export default LoginForm;
