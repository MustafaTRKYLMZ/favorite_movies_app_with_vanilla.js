"use strict";
import { fetchData } from "./fetchData.js";

//get movies and set to local storage
export const refreshMovies = async () => {
  const response = await fetchData(
    "https://api.themoviedb.org/3/movie/now_playing"
  );
  const movies = response.results;
  localStorage.setItem("moviesList", JSON.stringify(movies));
  return movies;
};
