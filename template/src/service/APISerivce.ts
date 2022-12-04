import {create} from 'apisauce';

//TODO: Укажите base URL api-сервера
const baseURL = 'https://your-api-url.com';

const client = create({baseURL});

export default client;
