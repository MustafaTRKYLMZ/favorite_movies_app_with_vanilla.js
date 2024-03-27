'use strict'
import { fetchMovies} from './fetchMovies.js'

//get movies and set to local storage
export const refreshMovies=async () => {
     const response= await fetchMovies()
     const movies=response.results
     localStorage.setItem('moviesList',JSON.stringify(movies))
     return movies
}
