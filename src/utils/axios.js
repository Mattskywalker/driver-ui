import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://limitless-spire-62381.herokuapp.com/api'
  });

export default instance;