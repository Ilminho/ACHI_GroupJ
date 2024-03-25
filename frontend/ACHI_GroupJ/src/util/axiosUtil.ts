import axios, { AxiosResponse, AxiosError } from 'axios';

export const dummyImport = async () => {
    const response = await axios.get('http://localhost:3000/');
    return response.data;
}