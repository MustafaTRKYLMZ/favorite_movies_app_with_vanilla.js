import { apiKey } from "./key.js";

export const getImageUrl = (imageURL) => {
  const rootURL = `https://image.tmdb.org/t/p/`;
  const imageSize = "w400";
  const fullURL = rootURL + imageSize + imageURL + apiKey;
  return fullURL;
};
