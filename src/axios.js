import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone2-f0a7a/us-central1/api' // THE API (cloud function) URL
});

export default instance;