export const getGenres = (movies) => {
  let genresArray = [];
  movies?.map((movie) => {
    return movie?.genre_ids.map((genre) => {
      if (!genresArray.includes(genre)) {
        genresArray.push(genre);
      }
    });
  });
  return genresArray;
};
