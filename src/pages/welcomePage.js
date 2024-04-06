import { refreshMovies, getCategoriesByMovies } from "../data/index.js";
import { headerView } from "../views/headerView.js";
import { contentBodyView } from "../views/contentBodyView.js";
import { movieListView } from "../views/movieListView.js";
import { leftSidebarView } from "../views/leftSidebarView.js";
import { bookmark } from "../views/bookmark.js";
import { setResult } from "../views/setResult.js";

export const welcomePage = async () => {
  const localMovies = JSON.parse(localStorage.getItem("moviesList"));
  const categories = await getCategoriesByMovies(localMovies);

  headerView();
  contentBodyView();

  if (!localMovies) {
    try {
      const newMovies = await refreshMovies();
      leftSidebarView(categories);
      movieListView(newMovies, categories);
    } catch (error) {
      setResult(".error", error.message);
      throw new Error(error);
    }
  }
  // leftSidebar(localMovies);
  leftSidebarView(categories);
  movieListView(localMovies, categories);
  bookmark();
};
