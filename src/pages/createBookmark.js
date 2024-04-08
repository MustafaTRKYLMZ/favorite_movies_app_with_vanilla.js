import { bookmarkView } from "../views/index.js";
import { setResult } from "./setResult.js";

export const createBookmark = (event) => {
  const movies = JSON.parse(localStorage.getItem("moviesList")) || [];
  const selectedMovie = movies.filter((movie) => {
    if (Number(movie.id) === Number(event.target.value)) {
      return movie;
    }
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
      const error = `${isBookmarked.title} is already bookmarked`;
      setResult(".error", error);
      throw new Error(`${isBookmarked.title} is already bookmarked`);
    }
    setResult(".info", `${selectedMovie[0].title} is bookmarked`);
    bookmarkDiv.innerHTML = "";
    localStorage.setItem("bookmarkList", JSON.stringify(b));
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

const convertData = (data) => {
  const { results } = data;
  let cats = [];
  let dogs = [];

  results.forEach((result) => {
    if (result.type === "cat") {
      const catList = document.getElementById("catlist");
      const cat = document.createElement("li");
      cat.innerText = result.name;
      catList.appendChild(cat);
      cats.push(result);
    } else {
      const dogList = document.getElementById("doglist");
      const dog = document.createElement("li");
      dog.innerText = result.name;
      dogList.appendChild(dog);
      dogs.push(result);
    }
  });
  return {
    cats,
    dogs,
  };
};
