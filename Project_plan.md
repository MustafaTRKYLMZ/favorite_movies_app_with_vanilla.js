# Project plan

## Description:

I am planing to build my favorities movies web app. 
I wil use https://api.themoviedb.org/ (checked the api before) api for taking latest movies. 
In this web app people can see latest films. In de left side bar person can see categories. In this right side, person can see bookmarked movies. 
With movies card, person can bookmark and buy. Buy meaning, he/she has to go external website for buying film. 
With search button, person can search films.
Here is the coding structure. 

## Futures

(must have) see latest movies

(must have) create, delete bookmark

(must have) search movies

(must have) look details of the movies

(nice to have) create own favorites movies list

(nice to have) create watched movie list.
 According to this list, begining of app, we can filter this films or we can show with different style. 

## Project structure

public

src
    app.js
pages
    welcomePage.js

    header.js

    footer.js

    leftSidebar.js

    rightSidebar.js

    bookmarkedMovieList.js

    createBookmark.js

    movieDetailPage.js

    removeBookmark.js

    searchMovies.js

    readMore.js

views

    headerView.js

    leftSidebar

        leftSidebarView.js

    rightSidebar

        rightSidebarView.js

    bookmarks

        bookmarkedMovieListView.js

        bookmarkedMovieItemView.js

        bookmarkedMovieCard.js

    movieListView.js

    movieCardView.js

    movieDetailPageView.js

    footerView.js


data
    getMovies.js

    searchMovie.js

    getBookmarkedMovieList.js

    getMovieCategories.js

    setBookmarkedMovie.js

    getMovieListFromLocal.js

    setMovieListToLocal.js

index.html

## Functions and pages details

public

src
    app.js

        window load page
        welcomePage()

pages

    welcomePage.js

        header(), leftSidebar(), rightSidebar(),bookmarkMovieList(), footer()
    
    header.js

        headerView()

    footer.js

        footerView()

    leftSidebar.js

        getMovieCategories(), leftSidebarView()

    rightSidebar.js

        getMovieList(), movieListView()

    bookmarkedMovieList.js

        getBookmarkedMovieList(), bookmarkedMovieListView(),

    createBookmark.js

        getBookmarkedMovie(), setBookmarkedMovie()

    movieDetailPage.js

        movieDetailPageView()

    removeBookmark.js

        getBookmarkedMovie(), setBookmarkedMovie()

    searchMovies.js

        searchMovie(), movieListView()

    readMore.js

        getMovieListFromLocal(),movieDetailPage(), movieDetailPageView()

views

    headerView.js

        create element title p "My favorites movies"

    leftSidebar

        leftSidebarView.js

            categoryListView(),

            categoryListView.js

                categoryItemView()
                    title p

    rightSidebar

        rightSidebar.js

                movieListView(),

    bookmarks

        bookmarkedMovieListView.js

            bookmarkedMovieItemView(),

        bookmarkedMovieItemView.js

            bookmarkedMovieCard()

        bookmarkedMovieCard.js

            poster img, title p, popularity, bookmark button, buy button

    movieListView.js

        movieCardView()

    movieCardView.js

        poster img, title p, popularity, bookmark button, buy button  

    movieDetailPageView.js

        movieCardView()

    footerView.js

data

    getMovies.js

    searchMovie.js

    getBookmarkedMovieList.js

    getMovieCategories.js

    setBookmarkedMovie.js

    getMovieListFromLocal.js
    
    setMovieListToLocal.js
