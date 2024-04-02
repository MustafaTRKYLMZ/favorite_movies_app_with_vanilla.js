import { setResult } from "../pages/setResult.js";
import { accessToken, apiKey } from "./key.js";

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
  setResult(
    ".error",
    `HTTP network error ${response.status} ${response.statusText}`,
  );
  throw new Error(`HTTP Error ${response.status}:  ${response.statusText}`);
};
