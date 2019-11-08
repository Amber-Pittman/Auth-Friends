import React, { useState } from "react"

// #3 Define some routes by importing from rrd
import { Link, Route, withRouter } from "react-router-dom";
// #7 import the SignIn component that was created
import Signin from "./Signin";


function App(props) {
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
				{signedIn && <Link to='/account' className='link'>Account</Link>}
			</div>
		</nav>

		{/* #5 Define some routes */}
		{/* #8 Add Signin component to signin Route */}
		<Route exact path='/signin' component={Signin} />
		<ProtectedRoute exact path='/account' component={Account} />
  </div>
);
}

export default App