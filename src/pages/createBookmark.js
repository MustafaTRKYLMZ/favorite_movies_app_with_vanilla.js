import { bookmarkView } from "../views/index.js";

export const createBookmark = (event) => {
  console.log("create bookmark", event.target.id);
  const movies = JSON.parse(localStorage.getItem("moviesList")) || [];
  let selectedMovie = [];
  movies.filter((movie) => {
    if (Number(movie.id) === Number(event.target.id)) {
      selectedMovie.push(movie);
    }
  });
  const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
  if (selectedMovie.length > 0) {
    const isBookmarked = bookmarkList.find(
      (movie) => movie.id === selectedMovie[0].id
    );
    if (isBookmarked) {
      throw new Error("Movie is already bookmarked");
    }

    const newBookmarkList = [...bookmarkList, ...selectedMovie];
    localStorage.setItem("bookmarkList", JSON.stringify(newBookmarkList));
    bookmarkView(newBookmarkList);
  } else {
    localStorage.setItem("bookmarkList", JSON.stringify(selectedMovie));
    bookmarkView(newBookmarkList);
  }
};
