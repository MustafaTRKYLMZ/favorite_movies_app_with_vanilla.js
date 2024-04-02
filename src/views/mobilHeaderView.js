import { mobilSidebarView } from "./mobilSidebarView.js";

export const mobilHeaderView = (header) => {
  const mobilHeaderMenu = document.createElement("div");
  mobilHeaderMenu.classList.add("mobil-header-menu");
  const mobilHeaderMenuIcon = document.createElement("i");
  mobilHeaderMenuIcon.classList.add("material-icons");
  mobilHeaderMenuIcon.addEventListener("click", () => mobilSidebarView(header));
  mobilHeaderMenuIcon.append("menu");
  mobilHeaderMenu.append(mobilHeaderMenuIcon);
  header.append(mobilHeaderMenu);
};
