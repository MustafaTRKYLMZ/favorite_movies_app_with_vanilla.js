import { mobilHeaderView } from "./mobilHeaderView.js";
import { searchMovie } from "../data/index.js";

export const headerView = () => {
  const headerDiv = document.createElement("header");
  // header title
  const h1 = document.createElement("h1");
  h1.append("Favorites Movies");
  headerDiv.append(h1);
  document.body.append(headerDiv);
  // button group
  const buttonGroup = document.createElement("div");
  buttonGroup.classList.add("header-button-group");
  // search input
  const searchInputDiv = document.createElement("div");
  searchInputDiv.classList.add("search-input");
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search...";
  searchInput.append("search");
  searchInput.addEventListener("input", (e) => searchMovie(e));
  searchInputDiv.append(searchInput);
  buttonGroup.append(searchInputDiv);
  headerDiv.append(buttonGroup);
  mobilHeaderView(buttonGroup);
};
