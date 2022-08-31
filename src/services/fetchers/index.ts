import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
});

export const fetcher = {
  get: async (url: string) => {
    return instanceAxios.get(url).then((res) => res.data);
  },
  post: async (url: string, data: any) => {
    return instanceAxios.post(url, data).then((res) => res.data);
  },
  put: async (url: string, data: any) => {
    return instanceAxios.put(url, data).then((res) => res.data);
  },
  delete: async (url: string) => {
    return instanceAxios.delete(url).then((res) => res.data);
  },
};
