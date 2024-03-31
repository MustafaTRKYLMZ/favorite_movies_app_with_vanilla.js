import { bookmarkView } from "./bookmarkView.js";
import { removeBookmark } from "../pages/index.js";
import { getImageUrl } from "../data/getImageUrl.js";

export const bookmarkCard = (bookmark, bookmarkListDiv) => {
  const bookmarkCardDiv = document.createElement("div");
  bookmarkCardDiv.classList.add("bookmark-card");
  // bookmark image
  const imageUrl = getImageUrl(bookmark);

  const bookmarkImage = document.createElement("IMG");
  bookmarkImage.src = imageUrl;
  // bookmark title
  const bookmarkCardTitle = document.createElement("h3");
  bookmarkCardTitle.classList.add("bookmark-card-title");
  bookmarkCardTitle.innerText = bookmark.title;
  // book mark button
  const removeBookmarkButton = document.createElement("button");
  removeBookmarkButton.classList.add("remove-bookmark");
  removeBookmarkButton.innerText = "Remove";
  removeBookmarkButton.addEventListener("click", () => {
    removeBookmark(bookmark.id);
    bookmarkView();
  });
  // line
  const line = document.createElement("hr");
  line.classList.add("bookmark-line");
  bookmarkCardDiv.append(
    bookmarkImage,
    bookmarkCardTitle,
    removeBookmarkButton
  );
  bookmarkListDiv.append(bookmarkCardDiv, line);
};
