// import { mobilCategoriesView } from "./mobilCategoriesView.js";
// import { mobilBookmarksView } from "./mobilBookmarksView.js";
import { categoryListView } from "./categoryListView.js";
import { bookmarkView } from "./bookmarkView.js";
import { getCategoriesByMovies } from "../data/index.js";
import { setResult } from "../pages/setResult.js";

export const mobilSidebarView = async (headerDiv) => {
  // mobil navbar
  const mobilSidebar = document.createElement("div");

  mobilSidebar.classList.add("mobil-sidebar");
  headerDiv.append(mobilSidebar);
  mobilSidebar.style.width = "250px";
  document.querySelector(".mobil-header-menu").style.marginRight = "250px";
  // close button
  const closeButtonDiv = document.createElement("div");
  closeButtonDiv.classList.add("close-button");

  const closeButton = document.createElement("i");
  closeButton.classList.add("material-icons");
  closeButton.append("close");
  closeButton.addEventListener("click", () => {
    mobilSidebar.style.width = 0;
    document.querySelector(".mobil-header-menu").style.marginRight = "0";
    mobilSidebar.remove();
  });
  closeButtonDiv.append(closeButton);
  mobilSidebar.append(closeButtonDiv);

  // categories
  const movies = JSON.parse(localStorage.getItem("moviesList"));

  let categories = [];

  try {
    categories = await getCategoriesByMovies(movies);
  } catch (error) {
    setResult(".error", error);
    throw new Error(error);
  }
  // tabs
  const tabsDiv = document.createElement("div");
  tabsDiv.classList.add("tabs");
  const categoryTabButton = document.createElement("button");
  categoryTabButton.append("Categories");

  const bookmarkTabButton = document.createElement("button");
  bookmarkTabButton.append("Bookmarks");
  const tabs = [categoryTabButton, bookmarkTabButton];
  tabsDiv.append(categoryTabButton, bookmarkTabButton);
  // content div
  const mobilSidebarContentDiv = document.createElement("div");
  mobilSidebarContentDiv.classList.add("mobil-sidebar-content");
  // category list

  mobilSidebar.append(tabsDiv);
  // bookmark list

  tabs.forEach((tab) => {
    // navListDiv.append(tab);
    tab.addEventListener("click", () => {
      // mobilSidebarContentDiv.remove();

      if (tab.innerText === "Categories") {
        // categories
        mobilSidebarContentDiv.innerHTML = "";
        categoryListView(categories, mobilSidebarContentDiv);
      } else {
        // bookmarks
        const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")) || [];
        mobilSidebarContentDiv.innerHTML = "";
        bookmarkView(bookmarkList, mobilSidebarContentDiv);
      }
    });
  });
  // mobilSidebarContentDiv.append(categoryListDiv);
  mobilSidebar.append(mobilSidebarContentDiv);
  headerDiv.append(mobilSidebar);
};
