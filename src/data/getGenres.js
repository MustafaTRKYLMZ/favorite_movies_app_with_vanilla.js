export const getGenres = (movies) => {
  const genreSet = new Set();
  movies?.forEach((movie) => {
    movie.genre_ids.forEach((genre_id) => genreSet.add(genre_id));
  });
  return [...genreSet];
};
