import { setResult } from "../pages/setResult.js";
import { fetchData } from "./fetchData.js";

// get movies and set to local storage
export const refreshMovies = async () => {
  const response = await fetchData(
    "https://api.themoviedb.org/3/movie/now_playing",
  );
  if (!response.ok) {
    setResult(
      ".error",
      `HTTP network error ${response.status} ${response.statusText}`,
    );
    throw new Error(
      `HTTP network error ${response.status} ${response.statusText}`,
    );
  }
  const movies = response.results;
  localStorage.setItem("moviesList", JSON.stringify(movies));
  return movies;
};
