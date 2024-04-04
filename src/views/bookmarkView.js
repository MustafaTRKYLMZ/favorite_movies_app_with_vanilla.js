import { bookmarkCard } from "./bookmarkCard.js";
import { removeBookmark } from "./removeBookmark.js";

const onRemoveBookmark = (id) => {
  const newBookmarkList = removeBookmark(id);
  const bookmarkDiv = document.querySelector(".bookmark");
  bookmarkDiv.innerHTML = "";
  bookmarkView(newBookmarkList, bookmarkDiv);
  const mobilSidebarContent = document.querySelector(".mobil-sidebar-content");
  mobilSidebarContent.innerHTML = "";
  bookmarkView(newBookmarkList, mobilSidebarContent);
};

function bookmarkView(bookmarkList, bookmarkDiv) {
  // bookmark title
  const bookmarkTitle = document.createElement("h2");
  bookmarkTitle.classList.add("bookmark-title");
  bookmarkTitle.innerText = "Bookmarks";
  bookmarkDiv.append(bookmarkTitle);
  const bookmarkListDiv = document.createElement("div");
  bookmarkListDiv.classList.add("bookmark-list");
  bookmarkList.forEach((bookmark) => {
    bookmarkCard(bookmark, bookmarkListDiv, onRemoveBookmark);
  });
  bookmarkDiv.append(bookmarkListDiv);
}

export default bookmarkView;
