import axios from 'axios';
import { handleResponse, handleError } from './Response';

const BASE_URL = 'https://frontend-take-home.fetchrewards.com';

// Get request to API with specified path
const getAll = (resource: string): Promise<object> => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

// Post request to API with specified path and data
const post = (resource: string, data: any): Promise<object> => {
  return axios
    .post(`${BASE_URL}/${resource}`, data)
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getAll,
  post
};
