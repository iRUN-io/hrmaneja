import axios from 'axios';

// export const API_URL = 'http://127.0.0.1:8000/api/v1/'
export const API_URL = 'https://www.management.irunauto.com/api/v1/'

export default axios.create({
    baseURL: API_URL
});
