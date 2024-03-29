import { bookmarkCard } from "./bookmarkCard.js";

export const bookmarkView = () => {
  const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
  const bookmarkDiv = document.querySelector(".bookmark");
  bookmarkDiv.innerHTML = "";
  //bookmark title
  const bookmarkTitle = document.createElement("h2");
  bookmarkTitle.classList.add("bookmark-title");
  bookmarkTitle.innerText = "Bookmarks";
  bookmarkDiv.append(bookmarkTitle);
  const bookmarkListDiv = document.createElement("div");
  bookmarkListDiv.classList.add("bookmark-list");
  bookmarkList.forEach((bookmark) => {
    bookmarkCard(bookmark, bookmarkListDiv);
  });
  bookmarkDiv.append(bookmarkListDiv);
};
