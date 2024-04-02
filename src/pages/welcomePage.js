"use strict";

import { refreshMovies } from "../data/index.js";
import { headerView, contentBodyView, movieListView } from "../views/index.js";
import { leftSidebar } from "./leftSidebar.js";
import { bookmark } from "./bookmark.js";

export const welcomePage = async () => {
  const localMovies = JSON.parse(localStorage.getItem("moviesList"));

  headerView();
  contentBodyView();

  if (!localMovies) {
    const newMovies = await refreshMovies();
    //TODO send here categories
    leftSidebar(newMovies);
    movieListView(newMovies);
    //TODO view movies to movie list
  } else {
    // TODO //TODO view movies to movie list
    //TODO send here cagetorys
    leftSidebar(localMovies);
    movieListView(localMovies);
  }
  bookmark();

  // createBookmark()
  //TODO get category list and set them to left side bar
  //TODO get bookmarked list and set them to right side bar
};
