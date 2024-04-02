import { categoryListView } from "./categoryListView.js";

export const leftSidebarView = async (categories) => {
  const leftSidebarDiv = document.querySelector(".left-sidebar");
  const categoryListDiv = document.createElement("div");
  categoryListDiv.classList.add("category-list");
  // category list
  categoryListView(categories, categoryListDiv);

  leftSidebarDiv.append(categoryListDiv);
};
