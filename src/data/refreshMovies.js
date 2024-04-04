import { setResult } from "../pages/setResult.js";
import { fetchData } from "./fetchData.js";

// get movies and set to local storage
export const refreshMovies = async () => {
  try {
    const response = await fetchData(
      "https://api.themoviedb.org/3/movie/now_playing"
    );
    const movies = response.results;

    localStorage.setItem("moviesList", JSON.stringify(movies));
    return movies;
  } catch (error) {
    setResult(".error", `HTTP network error ${error}`);
    throw new Error(`HTTP network error ${error}`);
  }
};
