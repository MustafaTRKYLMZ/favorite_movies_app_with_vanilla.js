"use strict";

import { refreshMovies } from "../data/refreshMovies.js";
import {
  headerView,
  leftSidebarView,
  contentBodyView,
  movieListView,
  bookmarkView,
} from "../views/index.js";

export const welcomePage = async () => {
  const localMovies = JSON.parse(localStorage.getItem("moviesList"));

  headerView();
  contentBodyView();

  if (!localMovies) {
    console.log(">>>>");
    const newMovies = await refreshMovies();
    //TODO send here cagetorys
    leftSidebarView(newMovies);
    movieListView(newMovies);
    //TODO view movies to movie list
  } else {
    // TODO //TODO view movies to movie list
    console.log("local movies ............\n\n", localMovies);
    //TODO send here cagetorys
    leftSidebarView(localMovies);
    movieListView(localMovies);
  }
  bookmarkView();
  // createBookmark()
  //TODO get category list and set them to left side bar
  //TODO get bookmarked list and set them to right side bar
};
