import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "e720a02c340d8692cc03255828b02f7d";

const requestToken = () => {
  return axios.get(
    `${API_BASE_URL}authentication/token/new?api_key=${API_KEY}`
  );
};

const login = (props) => {
  return axios.post(
    `${API_BASE_URL}authentication/token/validate_with_login?api_key=${API_KEY}`,
    props
  );
};
//https://api.themoviedb.org/3/discover/movie?api_key=e720a02c340d8692cc03255828b02f7d&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

const getPopularMovies = () => {
  return axios.get(
    `${API_BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  );
};

const searchMovies = (query) => {
  return axios.get(
    `${API_BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
};
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/940829?api_key=e720a02c340d8692cc03255828b02f7d
const getMovieDetail = (movieId) => {
  return axios.get(`${API_BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
};

export { requestToken, login, getPopularMovies, searchMovies, getMovieDetail };
