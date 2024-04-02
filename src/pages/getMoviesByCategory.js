import { movieListView } from "../views/movieListView.js";
export const getMoviesByCategory = (event) => {
  const categoryId = event.target.id;

  const movies = JSON.parse(localStorage.getItem("moviesList"));
  const filteredMovies = movies.filter((movie) => {
    return movie.genre_ids.includes(Number(categoryId));
  });

  movieListView(filteredMovies);
};
