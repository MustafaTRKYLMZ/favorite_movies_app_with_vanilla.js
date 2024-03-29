'use strict'

import { refreshMovies } from '../data/refreshMovies.js';
import { headerView,leftSidebarView,contentBodyView ,movieListView} from '../views/index.js'


export const welcomePage= async () => {
     const localMovies=JSON.parse(localStorage.getItem('moviesList'))
    
    headerView()
    contentBodyView()
   
    leftSidebarView(localMovies)
     movieListView(localMovies)

    if(!localMovies){
        console.log(">>>>")
        const newMovies=await refreshMovies()
        //TODO view movies to movie list
    } else {
    // TODO //TODO view movies to movie list
    console.log("local movies ............\n\n",localMovies)
    }

    //TODO get category list and set them to left side bar
    //TODO get bookmarked list and set them to right side bar
};