import { movieCard } from "./movieCard.js";
import { fetchData } from "../data/fetchData.js";
import { setResult } from "./setResult.js";

export const movieListView = async (movies) => {
  // movie list
  const movieList = document.querySelector(".movie-list");
  movieList.innerHTML = "";

  try {
    const response = await fetchData(
      "https://api.themoviedb.org/3/genre/movie/list"
    );

    movies?.forEach((movie) => {
      const genreSet = new Set();
      movie.genre_ids.forEach((genre_id) => genreSet.add(genre_id));

      const categories = response.genres.filter(
        (genre) => genre.id === genreSet.has(genre.id)
      );
      movieCard(movie, movieList, categories);
    });
  } catch (error) {
    setResult(".error", `HTTP network error ${error.message}`);
    throw new Error("HTTP network error");
  }
};
