import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: localStorage.getItem('token')
     //Authorization: `Bearer ${token}`, - another way when API requires it
    }
  });
};