// #32 Create an Account for the user

// #33 Import React
// #36 Import useState
// #38 Import useEffect
import React, { useState, useEffect } from "react";
// #40 Import api helper
import api from "../utils/api";

// #34 Start your new function and export it
function Account(props) {
	// #37 Create initial State with useState
	const [user, setUser] = useState({
		name: "",
		email: "",
    })

    // #39 Create a side effect with useEffect
	useEffect(() => {
		// #41 Make that axios call using api
		api().get("/me")
			.then(result => {
				// #42 set user to an object
				setUser({
					// while we could have done result.data, we want to be specific 
					  // due to unknown keys
					name: result.data.name,
					email: result.data.email,
				})
			})
			.catch(error => {
				console.log(error)
			})
	}, [])
    
    // #35 Build out the Account Page for Display
	return (
		<>
			<h1>My Account</h1>

			<div className="account-row">Name: {user.name}</div>
			<div className="account-row">Email: {user.email}</div>
		</>
	)
}

export default Account;

