"use strict";
import { accessToken, apiKey } from "./key.js";

//const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

export const fetchData = async (apiUrl) => {
  const response = await fetch(`${apiUrl}?api_key=${apiKey}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error(`HTTP Error ${response.status}:  ${response.statusText}`);
};
