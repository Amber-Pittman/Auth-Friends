// #46 Disallow user to be on the account page if they're not currently 
//   logged in

// #47 Import react
import React from "react";
// #49 Make ProtectedRoute a HOC by returning the Route component or
    //  or a different component called Redirect
import { Route, Redirect } from "react-router-dom";

// #48 Create a ProtectedRoute for components that require the token
function ProtectedRoute(props) {
	
	const {  // #53 Destructure from props
		component: Component,
        ...rest
    } = props
        
	return (
        // #52 add render to Route
		// #54 After destructuring from props, you can now spread the rest variable 
		// #55 Don't forget to add the value of renderProps to render in the cb 
		<Route {...rest} render={(renderProps) => {
			// #56 Write an if statement 
			if (localStorage.getItem("token")) {
				return <Component {...renderProps} />  // send all the props through
			} else {
				// We are not logged in, so redirect to the signin page
				return <Redirect to="/signin" />
			}
		}} />
	)
}

export default ProtectedRoute