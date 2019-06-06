import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:5000",
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});