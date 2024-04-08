import { bookmarkCard } from "./bookmarkCard.js";

function bookmarkView(bookmarkList, bookmarkDiv) {
  // bookmark title
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
}

export default bookmarkView;
