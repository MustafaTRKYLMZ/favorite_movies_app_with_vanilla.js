import { getCategoriesByMovies, getImageUrl } from "../data/index.js";

export const movieDetailView = async (movie) => {
  const {
    title,
    overview,
    release_date,
    vote_average,
    original_language,
    backdrop_path,
    popularity,
    poster_path,
  } = movie[0];

  const movieList = document.querySelector(".movie-list");
  movieList.innerHTML = "";

  const heroImgUrl = getImageUrl(backdrop_path);
  const movieDetailDiv = document.createElement("div");
  movieDetailDiv.classList.add("movie-detail-top-rightside-content");

  // movie detail header
  const movieDetailHeader = document.createElement("div");
  movieDetailHeader.classList.add("movie-detail-header");
  // back button
  const backButton = document.createElement("i");
  backButton.classList.add("material-icons");
  backButton.append("arrow_back");
  backButton.addEventListener("click", () => {
    window.location.reload();
  });
  movieDetailHeader.append(backButton);
  movieList.append(movieDetailHeader);

  // hero image
  const movieHeroDiv = document.createElement("div");
  movieHeroDiv.classList.add("movie-hero");
  const movieHero = document.createElement("img");
  movieHero.classList.add("movie-hero");
  movieHero.setAttribute("src", heroImgUrl);
  const movieContentDiv = document.createElement("div");
  movieContentDiv.classList.add("movie-detail");

  // poster image
  const posterImage = document.createElement("img");
  posterImage.classList.add("poster-image");
  posterImage.setAttribute("src", getImageUrl(poster_path));

  // append back buuton, hero image and poster image
  movieHeroDiv.append(movieHero);
  movieList.append(movieHeroDiv);
  // movie content left side
  const movieContentRightside = document.createElement("div");
  movieContentRightside.classList.add("movie-detail-top-rightside");
  // movie detail content
  const movieTitle = document.createElement("h3");
  movieTitle.classList.add("movie-title");
  movieTitle.append(title);
  movieDetailDiv.append(movieTitle);

  // movie category
  const genresDiv = document.createElement("div");
  genresDiv.classList.add("genres");
  const moiveCategory = await getCategoriesByMovies(movie);

  moiveCategory.forEach((category) => {
    const categoryP = document.createElement("p");
    categoryP.append(category.name);
    genresDiv.append(categoryP);
  });
  movieDetailDiv.append(genresDiv);

  // movie overview
  const movieOverviewP = document.createElement("p");
  movieOverviewP.classList.add("movie-overview");
  movieOverviewP.append(overview);
  // original language
  const originalLanguage = document.createElement("p");
  originalLanguage.append("Original Language: ", original_language);
  // vote average
  const voteAverage = document.createElement("p");
  voteAverage.append("Vote Average: ", vote_average);
  // release date
  const releaseDate = document.createElement("p");
  releaseDate.append("Release Date: ", release_date);
  movieDetailDiv.append(originalLanguage, voteAverage, releaseDate);
  movieContentRightside.append(movieDetailDiv);

  // movie popularity
  const popularityDiv = document.createElement("div");
  popularityDiv.classList.add("popularity");
  // star icon
  const starIcon = document.createElement("i");
  starIcon.append("star");
  starIcon.classList.add("material-icons");

  const popularityP = document.createElement("p");
  popularityP.append(popularity);
  popularityDiv.append(starIcon, popularityP);
  // movie content top
  const movieContentTop = document.createElement("div");
  movieContentTop.classList.add("movie-detail-top");
  movieContentRightside.append(popularityDiv);
  movieContentTop.append(posterImage, movieContentRightside);

  movieContentDiv.append(movieContentTop);

  movieDetailDiv.append(movieOverviewP);
  movieContentDiv.append(movieOverviewP);
  movieList.append(movieContentDiv);
};
