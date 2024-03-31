import { apiKey } from "./key.js";

export const getImageUrl = (movie) => {
  const imageURL = movie.poster_path;
  const rootURL = `https://image.tmdb.org/t/p/`;
  const imageSize = "w400";
  const fullURL = rootURL + imageSize + imageURL + apiKey;
  return fullURL;
};
