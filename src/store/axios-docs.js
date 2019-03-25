import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pocketmsg.ru',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default instance;
