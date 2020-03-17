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
    <Router>
      <nav>
          <div>
            <h2 className='logo'>Lambda Friends</h2>
          </div>
          <div>
            <Link to='/' className='link'>Home</Link>

            {!loggedIn && 
              <Link to="/login" className="link">Log In</Link>}
          </div>
      </nav>
      <Route exact path='/login' component={Login} />
      <Route exact path='/account' />
    </Router>
  )
};

export default withRouter(App);
