import { movieListView } from "./movieListView.js";
import { getMoviesByCategory } from "../pages/index.js";

export const categoryListView = (categorys, mobilSidebarContentDiv) => {
  const categoryListDiv = document.createElement("div");
  categoryListDiv.classList.add("category-list");
  // category list
  categoryListDiv.innerHTML = "";
  const localMovies = JSON.parse(localStorage.getItem("moviesList"));

  const allMoviesButton = document.createElement("button");

  allMoviesButton.append("All Movies");
  allMoviesButton.addEventListener("click", () => {
    movieListView(localMovies);
  });
  categoryListDiv.append(allMoviesButton);

  categorys.forEach((category) => {
    const categoryButton = document.createElement("BUTTON");
    categoryButton.addEventListener("click", getMoviesByCategory);
    categoryButton.setAttribute("id", category.id);
    categoryButton.append(category.name);
    categoryListDiv.append(categoryButton);
  });
  mobilSidebarContentDiv.append(categoryListDiv);
};
