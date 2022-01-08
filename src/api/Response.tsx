import { AxiosResponse } from 'axios';

// return response or response data
export function handleResponse(response: AxiosResponse<any, any>) {
  if (response.data) {
    return response.data;
  }
  return response;
}

// throw error
export function handleError(error: any) {
  throw error;
}
