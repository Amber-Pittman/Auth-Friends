import axios from "axios";

export function axiosWithAuth() {
    return localStorage.getItem("token");
}

export default function() {
    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: axiosWithAuth,
            //Authorization: `Bearer ${token}`, - another way when API requires it
        }
    });
};