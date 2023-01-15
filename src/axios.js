import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:10334/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');