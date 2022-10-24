import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface movieState {
  moviesList: Array<object[]>;
    movieFullList: Array<object[]>;
    movie: number,
    crew: Array<object[]>;
    movieMostPopular: Array<object[]>;
    Upcoming_movie: Array<object[]>
}

const initialState: movieState = {
  moviesList: [],
  movieFullList: [],
  movie: 0,
  crew: [],
  movieMostPopular: [],
  Upcoming_movie: []
}


const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getUpcomingMovie(category) {
      return category;
    },
    setUpcomingMovie: (state, { payload }: PayloadAction) => {
      state.Upcoming_movie = payload;
    },
    getCategoryMovies(category) {
      return category;
    },
    setCategoryMovies: (state, { payload }: PayloadAction) => {
      state.movieFullList = payload;
    },
    getTheMostPopular(category) {
      return category;
    },
    setTheMostPopular: (state, { payload }: PayloadAction) => {
      state.movieMostPopular = payload;
    },
    getMovies(name) {
      return name;
    },
    setMovies: (state, { payload }: PayloadAction) => {
      state.moviesList = payload;
    },
    getMovie(id) {
      return id;
    },
    setMovie: (state, { payload }: PayloadAction) => {
      state.movie = payload;
    },
    getCrew(id) {
      return id;
    },
    setCrew: (state, { payload }: PayloadAction) => {
      state.crew = payload;
    },
  },
});

export const {
  getUpcomingMovie,
  setUpcomingMovie,
  getTheMostPopular,
  setTheMostPopular,
  getCrew,
  setCrew,
  getMovies,
  setMovies,
  setMovie,
  getMovie,
  getCategoryMovies,
  setCategoryMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
