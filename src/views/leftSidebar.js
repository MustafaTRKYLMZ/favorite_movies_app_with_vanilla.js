import { leftSidebarView } from "./leftSidebarView.js";
import { getCategoriesByMovies } from "../data/index.js";
import { setResult } from "./setResult.js";

export const leftSidebar = async (movies) => {
  try {
    let categories = await getCategoriesByMovies(movies);
    leftSidebarView(categories);
  } catch (error) {
    console.log("error >>>>", error);
    setResult(".error", error.message);
    throw new Error(error);
  }
};
