import React from "react";

// #3 Define some routes by importing from rrd
import { Link, Route, withRouter } from "react-router-dom";
// #62 Import getToken from API
import { getToken } from "./utils/api";
// #50 import ProtectedRoute instead of Route
import ProtectedRoute from "./components/ProtectedRoute";
// #7 import the SignIn component that was created
import Signin from "./components/Signin";
// #47 import the Account component
import Account from "./components/Account";


function App() {
  const signedIn = getToken();
  	
	return (
    <div className="wrapper">
		{/*  #4 Let's create a nav tag and create some links */}
		<nav>
			<div>
				<h2 className='logo'>Lambda Friends</h2>
			</div>
			<div>
				<Link to='/' className='link'>Home</Link>
				
				{/* #19 Add a SignIn Link to the Navigation */}
				{!signedIn && <Link to='/signin' className='link'>Sign In</Link>}
				
				{/* #43 Add an Account Link to the Navigation */}
				{signedIn && <Link to='/account' className='link'>Account</Link>}
			</div>
		</nav>

		{/* #5 Define some routes */}
		{/* #8 Add Signin component to signin Route */}
		<Route exact path='/signin' component={Signin} />

		{/* #44 Create Link for Account
			#45 Add Account component to account Route
			#51 Change Route to ProtectedRoute */}
		<ProtectedRoute exact path='/account' component={Account} />
  </div>
);
}

export default withRouter(App);