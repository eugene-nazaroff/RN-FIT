import {create} from 'apisauce';

//TODO: Укажите base URL api-сервера
const baseURL = 'https://jsonplaceholder.typicode.com/';

const client = create({baseURL});

export default client;
