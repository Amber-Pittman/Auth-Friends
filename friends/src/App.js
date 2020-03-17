import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";

import './App.css';

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  const loggedIn = token;

  return (
    <Router className="wrapper">
      <nav>
          <div>
            <h2 className='logo'>Lambda Friends</h2>
          </div>
          <div>
            <Link to='/' className='link'>Home</Link>

            {!loggedIn && 
              <Link to="/login" className="link">Log In</Link>}
            {loggedIn && 
              <Link to="/account" className="link">Account</Link>}
          </div>
      </nav>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/account' component={Account} />
    </Router>
  )
};

export default withRouter(App);
