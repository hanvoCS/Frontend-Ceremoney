import axios from 'axios';

export default axios.create({
    baseURL: 'https://ceremony-backend.herokuapp.com/ceremony'
});