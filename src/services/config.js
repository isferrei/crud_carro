import axios from 'axios'

export const http = axios.get('http://127.0.0.1:8000/carro');

axios.get('http://127.0.0.1:8000/carro')
.then(response => console.log(response))
.catch(error => console.log(error))
