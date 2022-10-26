export const apiKey = {
  key: process.env.NEXT_PUBLIC_TMDB_MOVIE_API_KEY,
}

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3",
  the_most_popular: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey.key}`,
  Upcoming_movie: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey.key}`,
  Top_rated_movie: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey.key}`,
  category: `http://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey.key}`,
  API_ENDPOINT: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey.key}`,
  originalImage: (imgPath: any) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: any) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};


export default apiConfig;
