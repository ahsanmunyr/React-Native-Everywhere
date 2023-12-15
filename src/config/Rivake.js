import axios from 'axios';
import config from './config';
const POSSystem = axios.create({
  baseURL: config.base_url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default POSSystem;
