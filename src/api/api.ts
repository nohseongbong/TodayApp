import {axiosInstance} from '.';

export class Api {
  getPostsList = (): Promise<any> => axiosInstance.get('/posts');
}

export const api = new Api();
