import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function Account(props) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(result => {
                setFriends(result.data)
            })
            .catch(error => {
                console.log(error)
                throw(error)
            })
    }, [])

    return (
        <div>
            <div className="user">
                <h1>My Lambda Profile</h1>
                <button className="edit">Edit Profile</button>
            </div>
            <div className="friends-list">
                <h2>My Friends</h2>
                {friends.map(item => (
                    <div key={item.id} className="friends">
                        <div className="friends-details">
                            <h3>{item.name}</h3>
                            <h3>{item.age}</h3>
                            <h3 className="email">{item.email}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Account;