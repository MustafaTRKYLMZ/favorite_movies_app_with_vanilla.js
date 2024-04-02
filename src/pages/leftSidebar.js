import { leftSidebarView } from "../views/index.js";
import { getCategoriesByMovies } from "../data/index.js";
export const leftSidebar = async (movies) => {
  const categories = await getCategoriesByMovies(movies);
  leftSidebarView(categories);
};
