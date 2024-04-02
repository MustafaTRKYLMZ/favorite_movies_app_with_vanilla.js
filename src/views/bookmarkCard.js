import { removeBookmark, movieDetail } from "../pages/index.js";
import { getImageUrl } from "../data/getImageUrl.js";

export const bookmarkCard = (bookmark, bookmarkListDiv) => {
  const bookmarkCardDiv = document.createElement("div");
  bookmarkCardDiv.classList.add("bookmark-card");
  // bookmark image
  const imageUrl = getImageUrl(bookmark.poster_path);

  const bookmarkImage = document.createElement("IMG");
  bookmarkImage.src = imageUrl;
  // bookmark title
  const bookmarkCardTitle = document.createElement("h3");
  bookmarkCardTitle.classList.add("bookmark-card-title");
  bookmarkCardTitle.innerText = bookmark.title;
  // button group
  const buttonGroupDiv = document.createElement("div");
  buttonGroupDiv.classList.add("button-group");
  const detailIcon = document.createElement("i");
  detailIcon.classList.add("material-icons");
  detailIcon.addEventListener("click", movieDetail);
  detailIcon.append("more");
  detailIcon.value = bookmark.id;

  // book mark button
  const removeBookmarkButton = document.createElement("i");
  removeBookmarkButton.classList.add("material-icons");
  removeBookmarkButton.classList.add("remove-bookmark");
  removeBookmarkButton.innerText = "delete";
  removeBookmarkButton.addEventListener("click", () => {
    removeBookmark(bookmark.id);
  });
  buttonGroupDiv.append(detailIcon, removeBookmarkButton);
  // line
  const line = document.createElement("hr");
  line.classList.add("bookmark-line");
  bookmarkCardDiv.append(bookmarkImage, bookmarkCardTitle, buttonGroupDiv);
  bookmarkListDiv.append(bookmarkCardDiv, line);
};
