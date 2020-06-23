import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Customers from './pages/customers/Customers';
import Navbar from './components/navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import BookRoom from './pages/book-room/BookRoom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/home" component={Home} />
            <Route path="/customers" component={Customers} />
            <Route path="/bookroom" component={BookRoom} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
