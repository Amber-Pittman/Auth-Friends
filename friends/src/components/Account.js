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
	const [friends, setFriends] = useState([])

    // #39 Create a side effect with useEffect
	useEffect(() => {
		// #41 Make that axios call using api
		api().get("/friends")
			.then(result => {
				// #42 set user to an object
				setFriends(result.data)
			})
			.catch(error => {
                console.log(error)
                throw(error)
			})
	}, [])
    
    // #35 Build out the Account Page for Display
	return (
		<div className="account-wrapper">
            <div className="user">
			    <h1>My Lambda Profile</h1>
                <button className="edit">Edit Profile</button>
            </div>
            <div className='friends-list'>
                <h2>My Friends</h2>
                {friends.map(item => (
                        <div key={item.id} className='friends'>
                            <div className='friends-details'>
                            <h3>{item.name}</h3>
                            <h3>{item.age}</h3>
                            <h3 className='email'>{item.email}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

export default Account;

