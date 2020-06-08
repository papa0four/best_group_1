import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginForm from './components/login-register/LoginForm/LoginForm';
import RegisterForm from './components/login-register/RegisterForm/RegisterForm';

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </Fragment>
  );
}

export default App;
