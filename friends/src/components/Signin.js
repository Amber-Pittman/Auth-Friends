// #11 Import useState
import React, { useState } from "react"
// #24 Instead of importing axios, we'll import api, axios can be removed
import api from "../utils/api";

// #6 Create Signin Component
function Signin(props) {
    // #20 Set up error state for error component/message
    const [error, setError] = useState()

    // #12 Set up some initial state
    const [data, setData] = useState({
        username: "",
        password: "",
    })

    // #13 Create handleChange function for the inputs
    const handleChange = (event) => {
        // #14 set new state
        setData({ // #15 Pass a new object
            // #16 make object IMMUTABLE by spreading the data
            ...data, 
            // #17 Pass in new value
            [event.target.name]: event.target.value,
        })
    }

    // #22 We need a handle submit function for our button.
    const handleSubmit = (event) => {
        event.preventDefault()

        // #23 We need to make an axios call. 
        //     Instead of calling axios post, we'll use api as a function in place of axios
                // We are using are axios instance with predefined values,
                // rather than just plain old axios
        api()
            .post("/login", data)
            .then(result => {
                // #26 Store our new token in local storage so it persists
                localStorage.setItem("token", result.data.token)
                // #57 Redirect the user to their account page after logging in
                props.history.push("/account")
            })
            .catch(err => {
                setError(err.response.data.message)
            })
        }

        return (
            // #9 Return a form tag
            // #25 Don't forget to add handleSubmit to the form!
            <form onSubmit={handleSubmit}>
                {/* #21 Inside the component, we can write a simple ternary that says
                if error exists or something is in there that is undefined, show
                a div with className of error, and display the error */}
                {error && <div className="error">{error}</div>}
    
                {/* #10 Create some input fields and a button for the form */}
                <input 
                    type="text" 
                    autoComplete="username" 
                    name="username" 
                    placeholder="Username" 
                    // #18A Attach these values and the handleChange function to 
                    //    each one of our inputs
                    value={data.username} 
                    onChange={handleChange} />
                <input 
                    type="password" 
                    autoComplete="current-password" 
                    name="password" 
                    placeholder="Password" 
                    // #18B Attach these values and the handleChange function to 
                    //    each one of our inputs
                    value={data.password} 
                    onChange={handleChange} />
    
                <button type="submit">Sign In</button>
            </form>
        )
    }

export default Signin;