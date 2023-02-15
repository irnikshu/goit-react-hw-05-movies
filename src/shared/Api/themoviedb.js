import axios from "axios"

const API_KEY = '53f2c47317a563cd2628c68ceb6a6673';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const ID_URL = `${BASE_URL}/movie/`;

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