const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'e22d61c4de902614e57843b3819b5ebc',
  originalImage: (imgPath: string) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
