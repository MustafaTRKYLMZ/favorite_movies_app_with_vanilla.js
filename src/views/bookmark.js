import bookmarkView from "./bookmarkView.js";

export const bookmark = async () => {
  const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
  const bookmarkDiv = document.querySelector(".bookmark");
  bookmarkDiv.innerHTML = "";
  bookmarkView(bookmarkList, bookmarkDiv);
};
