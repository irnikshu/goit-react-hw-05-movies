import axios from "axios"

const API_KEY = 'd69968ee858c93c3dbc043339ed72979'
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/day`;
const ID_URL = `${BASE_URL}/movie/`;
const SEARCH_URL = `${BASE_URL}search/movie`;

export const fetchTrendingFilms = async (page = 1) => {
  return await axios.get(
    `${TREND_URL}?api_key=${API_KEY}&page=${page}`
  );
};

export const fetchFilmsById = async id => {
  return await axios.get(
    `${ID_URL}${id}?api_key=${API_KEY}`
  );
};

export const fetchSearchFilms = async (searchQuery, page = 1) => {
  return await axios.get(
    `${SEARCH_URL}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
  );
};