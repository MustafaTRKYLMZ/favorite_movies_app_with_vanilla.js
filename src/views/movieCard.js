import { getImageUrl } from "../data/index.js";
import { createBookmark, movieDetail } from "../pages/index.js";

export const movieCard = async (movie, movieList, categories) => {
  // const categories = await getCategoriesByMovies(movie);
  // image url
  const imageUrl = getImageUrl(movie.poster_path);
  // movie card
  const movieCardDiv = document.createElement("div");
  movieCardDiv.classList.add("movie-card");
  // movie image
  const image = document.createElement("IMG");
  movieCardDiv.append(image);
  image.src = imageUrl;
  image.setAttribute("alt", "Movie poster is not visible");
  movieCardDiv.append(image);
  // movie card content
  const movieContentLeft = document.createElement("div");
  movieContentLeft.classList.add("movie-content-left");
  const movieRightDiv = document.createElement("div");
  movieRightDiv.classList.add("movie-right");
  // movie header
  const movieTitleH3 = document.createElement("h3");
  movieTitleH3.classList.add("movie-title");
  movieTitleH3.append(movie.title);
  movieContentLeft.append(movieTitleH3);
  // movie category
  const genresDiv = document.createElement("div");
  genresDiv.classList.add("genres");
  categories.forEach((category) => {
    const categoryP = document.createElement("p");
    categoryP.append(category.name);
    genresDiv.append(categoryP);
  });

  const categoryP = document.createElement("p");
  categoryP.append("category");
  // movie release date
  const releaseDateP = document.createElement("p");
  releaseDateP.append(movie.release_date);
  movieContentLeft.append(genresDiv);
  movieContentLeft.append(releaseDateP);
  // button group
  const buttonGroupDiv = document.createElement("div");
  buttonGroupDiv.classList.add("button-group");

  // bookmark
  const bookmarkIcon = document.createElement("i");
  bookmarkIcon.addEventListener("click", createBookmark);
  bookmarkIcon.value = movie.id;
  bookmarkIcon.setAttribute("id", "bookmark-button");
  bookmarkIcon.classList.add("material-icons");
  bookmarkIcon.append("bookmark");

  const detailIcon = document.createElement("i");
  detailIcon.classList.add("material-icons");
  detailIcon.addEventListener("click", movieDetail);
  detailIcon.append("more");
  detailIcon.value = movie.id;
  bookmarkIcon.setAttribute("id", "detail-button");
  buttonGroupDiv.append(bookmarkIcon, detailIcon);

  // movie popularity
  const popularityDiv = document.createElement("div");
  popularityDiv.classList.add("popularity");
  const starIcon = document.createElement("i");
  starIcon.append("star");
  starIcon.classList.add("material-icons");

  const popularityP = document.createElement("p");
  popularityP.append(movie.popularity);
  popularityDiv.append(starIcon, popularityP);
  // append parent
  const movieContentDiv = document.createElement("div");
  movieContentDiv.classList.add("movie-content");
  movieContentDiv.append(movieContentLeft, popularityDiv);
  movieRightDiv.append(movieContentDiv);
  movieRightDiv.append(buttonGroupDiv);
  movieCardDiv.append(movieRightDiv);
  movieList.append(movieCardDiv);
};
