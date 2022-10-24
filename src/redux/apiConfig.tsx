const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3",
  apiKey: process.env.NEXT_PUBLIC_TMDB_MOVIE_API_KEY,
  the_most_popular: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_API_KEY}&language=en-US&page=1`,
  Upcoming_movie: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_API_KEY}`,
  Top_rated_movie: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_API_KEY}&language=en-US&page=1`,
  category: `http://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_API_KEY}`,
  API_ENDPOINT: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_API_KEY}`,
  originalImage: (imgPath: any) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: any) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
