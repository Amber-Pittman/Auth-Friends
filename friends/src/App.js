import React, { useState } from "react"
import api from "../utils/api"

function App(props) {
  const signedIn = getToken();
  // const [error, setError] = useState()
	// const [data, setData] = useState({
	// 	email: "",
	// 	password: "",
	// })

	// const handleChange = (event) => {
	// 	setData({
	// 		...data,
	// 		[event.target.name]: event.target.value,
	// 	})
	// }

	// const handleSubmit = (event) => {
	// 	event.preventDefault()

	// 	// We are using are axios instance with predefined values,
	// 	// rather than just plain old axios
	// 	api()
	// 		.post("/signin", data)
	// 		.then(result => {
	// 			// Store our new token in local storage so it persists
	// 			localStorage.setItem("token", result.data.token)
	// 			// Redirect the user to their account page after logging in
	// 			props.history.push("/account")
	// 		})
	// 		.catch(err => {
	// 			setError(err.response.data.message)
	// 		})
	}
	
	return (
    <div className="App">
    <nav>
      <div>
        <h2 className='logo'>Lambda Friends</h2>
      </div>
      <div>
        <Link to='/' className='link'>Home</Link>
        {!signedIn && <Link to='/signin' className='link'>Sign In</Link>}
        {signedIn && <Link to='/account' className='link'>Account</Link>}
      </div>
    </nav>

    <Route exact path='/signin' component={Signin} />
    <ProtectedRoute exact path='/account' component={Account} />
  </div>
);
}

export default App