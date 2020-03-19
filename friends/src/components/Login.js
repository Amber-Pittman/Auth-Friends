import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function Login(props) {
    const [error, setError] = useState()

    const [data, setData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (event) => 
        setData({
            ...data, //make obj immutable by spreading data
            [event.target.name]: event.target.value,
        })

    const handleSubmit = (event) => {
        event.preventDefault()

        axiosWithAuth()
            .post("/login", data)
            .then(result => {
               localStorage.setItem("token", result.data.payload)
               props.history.push("/account")
               console.log(result);
            })
            .catch(err => {
                setError(err.response.data.message)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}

            <input
                type="text"
                autoComplete="username"
                name="username"
                placeholder="Username"
                value={data.username}
                onChange={handleChange} />

            <input
                type="password"
                autoComplete="current-password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange} />

            <button type="submit">Sign In</button>
        </form>
    )
}

export default Login;