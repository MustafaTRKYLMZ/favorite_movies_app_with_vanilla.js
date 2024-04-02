import { fetchData } from "./fetchData.js";
import { getGenres } from "./getGenres.js";

export const getCategoriesByMovies = async (movies) => {
  let genres;
  if (movies) {
    genres = await getGenres(movies);
  }

  //const categories = await getCategoriesByMovies(genres);

  const response = await fetchData(
    "https://api.themoviedb.org/3/genre/movie/list"
  );

  if (response) {
    const categories = response.genres.filter((category) => {
      return genres.includes(category.id);
    });
    return categories;
  } else {
    throw new Error(
      `HTTP network error ${response.status} ${response.statusText}`
    );
  }
};
