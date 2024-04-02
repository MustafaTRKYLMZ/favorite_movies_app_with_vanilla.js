import { bookmarkView } from "../views/index.js";

export const createBookmark = (event) => {
  console.log("create bookmark", event.target.id);
  const movies = JSON.parse(localStorage.getItem("moviesList")) || [];
  const selectedMovie = [];
  movies.filter((movie) => {
    if (Number(movie.id) === Number(event.target.value)) {
      selectedMovie.push(movie);
    }
    return movie.id === event.target.value;
  });
  const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
  const newBookmarkList = [...bookmarkList, ...selectedMovie];
  const bookmarkDiv = document.querySelector(".bookmark");
  const mobilSidebarContent = document.querySelector(".mobil-sidebar-content");

  if (selectedMovie.length > 0) {
    const isBookmarked = bookmarkList.find(
      (movie) => movie.id === selectedMovie[0].id
    );
    if (isBookmarked) {
      throw new Error("Movie is already bookmarked");
    }
    bookmarkDiv.innerHTML = "";
    localStorage.setItem("bookmarkList", JSON.stringify(newBookmarkList));
    bookmarkView(newBookmarkList, bookmarkDiv);
    //mobil bookmark list
    mobilSidebarContent.innerHTML = "";
    bookmarkView(newBookmarkList, mobilSidebarContent);
  } else {
    bookmarkDiv.innerHTML = "";
    localStorage.setItem("bookmarkList", JSON.stringify(selectedMovie));
    mobilSidebarContent.innerHTML = "";
    //mobil bookmark list
    bookmarkView(newBookmarkList, bookmarkDiv);
    bookmarkView(newBookmarkList, mobilSidebarContent);
  }
};
