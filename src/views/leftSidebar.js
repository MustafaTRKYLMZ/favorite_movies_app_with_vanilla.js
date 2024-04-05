import { leftSidebarView } from "./leftSidebarView.js";
import { getCategoriesByMovies } from "../data/index.js";
import { setResult } from "./setResult.js";

export const leftSidebar = async (movies) => {
  try {
    const categories = await getCategoriesByMovies(movies);
    leftSidebarView(categories);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error >>>>", error);
    setResult(".error", error.message);
    throw new Error(error);
  }
};
