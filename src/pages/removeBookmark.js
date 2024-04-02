import { bookmarkView } from "../views/index.js";

export const removeBookmark = (id) => {
  console.log("remove >>>>", id);
  const bookmarkDiv = document.querySelector(".bookmark");
  bookmarkDiv.innerHTML = "";
  const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
  const newBookmarkList = bookmarkList.filter(
    (bookmarkItem) => parseInt(bookmarkItem.id) !== parseInt(id)
  );
  localStorage.setItem("bookmarkList", JSON.stringify(newBookmarkList));
  bookmarkView(newBookmarkList, bookmarkDiv);

  const mobilSidebarContent = document.querySelector(".mobil-sidebar-content");
  mobilSidebarContent.innerHTML = "";

  bookmarkView(newBookmarkList, mobilSidebarContent);
};
