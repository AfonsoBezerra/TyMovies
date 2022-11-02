import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const tvType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

const requestsApi = {
  getMoviesList: (type: any, params: any) => {
    const url = `movie/${type}`;
    return axiosClient.get(url, params);
  },
  getVideos: (cate: any, id: any) => {
    const url = `${cate}/${id}/videos`;
    return axiosClient.get(url, { params: {} });
  },
  getTvList: (type: any, params: any) => {
    const url = `tv/${type}`;
    return axiosClient.get(url, params);
  },
  detail: (cate: any, id: any) => {
    const url = `${cate}/${id}`;
    return axiosClient.get(url, { params: {} });
  },
  credits: (cate: any, id: any) => {
    const url = `${cate}/${id}/credits`;
    return axiosClient.get(url, { params: {} });
  },
};

export default requestsApi;
