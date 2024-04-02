"use-strict";
import { movieCard } from "./movieCard.js";
import { fetchData } from "../data/fetchData.js";

export const movieListView = (movies) => {
  //movie list
  const movieList = document.querySelector(".movie-list");
  movieList.innerHTML = "";

  movies?.forEach(async (movie) => {
    let genresArray = [];
    movie.genre_ids.map((genre) => {
      if (!genresArray.includes(genre)) {
        return genresArray.push(genre);
      }
    });
    const response = await fetchData(
      "https://api.themoviedb.org/3/genre/movie/list"
    );
    let categories;
    if (response) {
      categories = response.genres.filter((category) => {
        return genresArray.includes(category.id);
      });
    } else {
      throw new Error(
        `HTTP network error ${response.status} ${response.statusText}`
      );
    }
    movieCard(movie, movieList, categories);
  });
};
