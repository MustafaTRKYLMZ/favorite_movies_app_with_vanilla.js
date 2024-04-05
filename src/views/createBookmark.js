import bookmarkView from "./bookmarkView.js";
import { setResult } from "./setResult.js";

export const createBookmark = (event) => {
  const movies = JSON.parse(localStorage.getItem("moviesList")) || [];
  const selectedMovie = movies.filter(
    (movie) => Number(movie.id) === Number(event.target.value)
  );
  console.log("selectedMovie", selectedMovie);
  const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
  const newBookmarkList = [...bookmarkList, ...selectedMovie];
  const bookmarkDiv = document.querySelector(".bookmark");
  const mobilSidebarContent = document.querySelector(".mobil-sidebar-content");

  if (selectedMovie.length > 0) {
    const isBookmarked = bookmarkList.find(
      // eslint-disable-next-line comma-dangle
      (movie) => movie.id === selectedMovie[0].id
    );

    if (isBookmarked) {
      const error = `${isBookmarked.title} is already bookmarked`;
      setResult(".error", error);
      throw new Error(`${isBookmarked.title} is already bookmarked`);
    }
    setResult(".info", `${selectedMovie[0].title} is bookmarked`);
    bookmarkDiv.innerHTML = "";
    localStorage.setItem("bookmarkList", JSON.stringify(newBookmarkList));
    bookmarkView(newBookmarkList, bookmarkDiv);
    // mobil bookmark list
    mobilSidebarContent.innerHTML = "";
    bookmarkView(newBookmarkList, mobilSidebarContent);
  } else {
    setResult(".info", `${selectedMovie[0].title} is bookmarked`);
    bookmarkDiv.innerHTML = "";
    localStorage.setItem("bookmarkList", JSON.stringify(selectedMovie));
    mobilSidebarContent.innerHTML = "";
    // mobil bookmark list
    bookmarkView(newBookmarkList, bookmarkDiv);
    bookmarkView(newBookmarkList, mobilSidebarContent);
  }
};
