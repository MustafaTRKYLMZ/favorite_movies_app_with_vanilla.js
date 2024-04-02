import { bookmarkView } from "../views/index.js";
import { setResult } from "./setResult.js";

export const removeBookmark = (id) => {
  const bookmarkDiv = document.querySelector(".bookmark");
  bookmarkDiv.innerHTML = "";
  const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
  const newBookmarkList = bookmarkList.filter(
    (bookmarkItem) => parseInt(bookmarkItem.id) !== parseInt(id),
  );
  setResult(".info", "Bookmark removed");
  localStorage.setItem("bookmarkList", JSON.stringify(newBookmarkList));
  bookmarkView(newBookmarkList, bookmarkDiv);
  const mobilSidebarContent = document.querySelector(".mobil-sidebar-content");
  mobilSidebarContent.innerHTML = "";

  bookmarkView(newBookmarkList, mobilSidebarContent);
};
