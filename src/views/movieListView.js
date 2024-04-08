import { movieCard } from "./movieCard.js";
import { setResult } from "./setResult.js";

export const movieListView = async (movies, categories) => {
  // movie list
  const movieList = document.querySelector(".movie-list");
  movieList.innerHTML = "";

  try {
    movies?.forEach((movie) => {
      const genreSet = new Set();
      movie.genre_ids.forEach((genre_id) => genreSet.add(genre_id));
      const filteredCategories = categories.filter((genre) =>
        genreSet.has(genre.id)
      );
      movieCard(movie, movieList, filteredCategories);
    });
  } catch (error) {
    setResult(".error", `HTTP network error ${error.message}`);
    throw new Error("HTTP network error");
  }
};
