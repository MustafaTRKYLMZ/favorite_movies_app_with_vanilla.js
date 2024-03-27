'use strict'

import { refreshMovies } from '../data/refreshMovies.js';

export const welcomePage= async () => {
    //TODO header view
    const localMovies=JSON.parse(localStorage.getItem('moviesList'))
    if(!localMovies){
        console.log(">>>>")
        const newMovies=await refreshMovies()
        //TODO view movies to movie list
    } else {
    // TODO //TODO view movies to movie list
    }

    //TODO get category list and set them to left side bar
    //TODO get bookmarked list and set them to right side bar
};