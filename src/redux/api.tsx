import axios from "axios";
import apiConfig, {apiKey} from "./apiConfig";



const { baseUrl, API_ENDPOINT, category, the_most_popular, Upcoming_movie } = apiConfig

export const fetchMovies = async (movieName: string, language: string) =>
  axios.get(`${API_ENDPOINT}&query=${movieName}&language=${language}`);

export const fetchAllMovie = async (categoryID: number, language: string) =>
  axios.get(
    `${baseUrl}/discover/movie?api_key=${apiKey.key}&language=${language}S&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=${categoryID}`
  );


  export const fetchTheMostPopularMovie = async (categoryID: string, language: string) =>
  axios.get(
    `${the_most_popular}&language=${language}`
    );

    export const fetchUpcomingMovie = async (language: string) =>
    axios.get(`${apiConfig.Upcoming_movie}&language=${language}`);

export const fetchMovie = async (movieId: number, language: string) =>
  axios.get(
    `${baseUrl}/movie/${movieId}?api_key=${apiKey.key}&language=${language}`
  )

export const fetchCrew = async (movieId: number, language: string) =>
  axios.get(
    `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey.key}&language=${language}`
  )

  export const fetchCategory = async ( language: string) =>
  axios.get(
    `${category}&language=${language}`
  )