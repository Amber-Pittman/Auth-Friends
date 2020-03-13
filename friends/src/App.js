import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  return (
    <Router>
      <div className="App">
       <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to "/protected">Friends Only!</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Account} />
          <Route path="login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
