import { refreshMovies } from "../data/index.js";
import { headerView } from "../views/headerView.js";
import { contentBodyView } from "../views/contentBodyView.js";
import { movieListView } from "../views/movieListView.js";
import { leftSidebar } from "../views/leftSidebar.js";
import { bookmark } from "../views/bookmark.js";
import { setResult } from "../views/setResult.js";

export const welcomePage = async () => {
  const localMovies = JSON.parse(localStorage.getItem("moviesList"));

  headerView();
  contentBodyView();

  if (!localMovies) {
    try {
      const newMovies = await refreshMovies();
      leftSidebar(newMovies);
      movieListView(newMovies);
    } catch (error) {
      setResult(".error", error.message);
      throw new Error(error);
    }
  }
  leftSidebar(localMovies);
  movieListView(localMovies);
  bookmark();
};
