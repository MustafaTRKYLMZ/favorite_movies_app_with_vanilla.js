'use strict'
import { apiKey,accessToken } from "./key.js"

export const fetchMovies=async ()=>{
    const response=await  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
         },
    }) 
    if(!response.ok) {
        throw new Error ('HTTP network error')
    }
    return await response.json()
}
