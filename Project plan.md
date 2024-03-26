# Project plan

Description:
I am planing to build my favorities movies web app. 
I wil use https://api.themoviedb.org/ api for taking latest movies. 
In this web app people can see latest films. In de left side bar person can see categories. In this right side, person can see bookmarked movies. 
With movies card, person can bookmark and buy. Buy meaning, he/she has to go external website for buying film. 
With search button, person can search films.
Here is the coding structure. 

# /*-------API------*/

api key=''
access token=''

-> get films
    fetch(url)

-> searchFilms(searchItem)
    url=;
    fetch(url)

-> getFilmCategories()
    fetch(url)

### /* ........Bookmarks

createBookmark(bookmarkItem)
    check local storage => local Bookmarks
    const bookMark=JSON.stringify(bookmarkItem)
    if not {
        setItemToLocalStorage('bookmarks',bookMark)
    }
    update bookmarks from local storage

removeBookmark(bookmarkId)
    getMovies From local
    filter movies
    setItemToLocalStorage

### /* .............upload movies to body

--> Movies header
    title My Favorites Movies

--> left side bar
    --->categoriesList()
        categoryItem()
            title h3

--> latest movies body()
    --> movies card()
        movie title h3, poster img, popularity p, release date p, buy movie button, read more button
    --> moviesList()
        use forEach

--> right side bar()
    --> bookmark list()
        --> bookmarkedMovieCard()
            title h3, poster img, removeMovie button, 
        --> moviesList()

### /* ......utils ......

    -->readMore(id)
    --> films details page()
        title p, descrion(summary of the film) p, poster img, 