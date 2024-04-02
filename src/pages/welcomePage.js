import { refreshMovies } from "../data/index.js";
import { headerView, contentBodyView, movieListView } from "../views/index.js";
import { leftSidebar } from "./leftSidebar.js";
import { bookmark } from "./bookmark.js";
import { setResult } from "./setResult.js";

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
