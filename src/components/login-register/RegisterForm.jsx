import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import './LoginRegister.styles.css';
import { Link } from 'react-router-dom';

const RegisterForm = ({ registerUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  const onSubmit = () => {
    if (password === confirmPassword) {
      const newUser = {
        username,
        email,
        password
      };
      registerUser(newUser);
    } else {
      alert('Passwords do not match');
    }
  }
  return (
    <div>
      <div className="form-container">
        <h2> Register to HAMS </h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="username" onChange={e => setUsername(e.target.value)} placeholder="User Name" required />
          <input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required />
          <input type="password" name="confirm-password" onChange={e => setconfirmPassword(e.target.value)} placeholder="Confirm Password" required />
          <input type="submit" name="submit" value="Register" />
        </form>
        <Link className="register" to={'/'}>
          Login
        </Link>
      </div>
    </div>
  );
};



export default connect(null, {
  registerUser,
  })(RegisterForm);
