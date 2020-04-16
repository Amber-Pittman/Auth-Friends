// #27 Create new file for authorization header

// #28 Import axios
import axios from "axios";

// #60 A helper function so we don't have to keep repeating this
export function getToken() {
	return localStorage.getItem("token");
}

// #29 export a default function of the file
export default function() {
	return axios.create({
		// #30 predefine the main url so you don't have to keep using the 
		//   entire url over and over		
		baseURL: "http://localhost:8080", // we'll never have to redefine it
		
		// #31 Predefine some headers to this axios instance
		headers: {
			// custom header
			// #61 Just call getToken for Authorization
			Authorization: getToken(),
		},
	})
}