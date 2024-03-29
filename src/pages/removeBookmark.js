export const removeBookmark = (id) => {
  const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
  const newBookmarkList = bookmarkList.filter(
    (bookmarkItem) => parseInt(bookmarkItem.id) !== parseInt(id)
  );
  localStorage.setItem("bookmarkList", JSON.stringify(newBookmarkList));
};
