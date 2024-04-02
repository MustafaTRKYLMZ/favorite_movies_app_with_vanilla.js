import { bookmarkView } from "../views/index.js";

export const bookmark = async () => {
  const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
  const bookmarkDiv = document.querySelector(".bookmark");
  bookmarkDiv.innerHTML = "";
  bookmarkView(bookmarkList, bookmarkDiv);
};
