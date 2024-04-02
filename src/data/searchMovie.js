export const searchMovie = async (e) => {
  const movieList = document.querySelectorAll(".movie-card");
  movieList.forEach((movie) => {
    if (
      !movie
        .querySelector("h3")
        .innerText.toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      movie.style.display = "none";
    } else {
      movie.style.display = "flex";
    }
  });
};
