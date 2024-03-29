'use-strict'
import { movieCard } from "./movieCard.js"
export const movieListView =(localMovies) =>{
    //movie list
    localMovies?.forEach ((movie) =>{
        movieCard(movie)
})


}