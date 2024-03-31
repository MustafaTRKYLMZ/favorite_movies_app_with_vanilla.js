import { bookmarkView } from "../views/index.js";

const createBookmark = (event) => {
  console.log("create bookmark", event.target.id);
  const movies = JSON.parse(localStorage.getItem("moviesList")) || [];
  const selectedMovie = [];
  movies.filter((movie) => {
    if (Number(movie.id) === Number(event.target.id)) {
      selectedMovie.push(movie);
    }
    return movie.id === event.target.id;
  });
  const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
  const newBookmarkList = [...bookmarkList, ...selectedMovie];
  if (selectedMovie.length > 0) {
    const isBookmarked = bookmarkList.find(
      (movie) => movie.id === selectedMovie[0].id
    );
    if (isBookmarked) {
      throw new Error("Movie is already bookmarked");
    }

    localStorage.setItem("bookmarkList", JSON.stringify(newBookmarkList));
    bookmarkView(newBookmarkList);
  } else {
    localStorage.setItem("bookmarkList", JSON.stringify(selectedMovie));
    bookmarkView(newBookmarkList);
  }
};

export { createBookmark };
