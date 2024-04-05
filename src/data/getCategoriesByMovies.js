import { setResult } from "../views/setResult.js";
import { fetchData } from "./fetchData.js";
import { getGenres } from "./getGenres.js";

export const getCategoriesByMovies = async (movies) => {
  let genres;
  if (movies) {
    genres = getGenres(movies);
  }
  // fetch category
  try {
    const response = await fetchData(
      "https://api.themoviedb.org/3/genre/movie/list"
    );

    return response.genres.filter((genre) => genres.includes(genre.id));
  } catch (error) {
    setResult(".error", `HTTP network error ${error.message}`);
    throw new Error(`HTTP network error ${error.message}`);
  }
};
