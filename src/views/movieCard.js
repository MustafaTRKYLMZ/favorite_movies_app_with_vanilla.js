import { getImageUrl } from "../data/index.js";

export const movieCard=(movie)=>{
   
    const movieList=document.querySelector('.movie-list')

    const imageUrl=getImageUrl(movie)
    console.log("movie in card image url ",imageUrl)
    const movieCardDiv=document.createElement('div')
    movieCardDiv.classList.add('movie-card')  

    const image=document.createElement('IMG')
    movieCardDiv.append(image)
    image.src=imageUrl
    image.setAttribute('alt','Movie poster is not visible')
    movieCardDiv.append(image)
    //movie card content
    const movieContentLeft=document.createElement('div')
    movieContentLeft.classList.add('movie-content-left')
    const movieRightDiv=document.createElement('div')
    movieRightDiv.classList.add('movie-right')
    //movie header
    const movieTitleH3=document.createElement('h3')
    movieTitleH3.classList.add('movie-title')
    movieTitleH3.append(movie.title)
    movieContentLeft.append(movieTitleH3)
    //TODO Add category
    // movie category
    const categoryP=document.createElement('p')
    categoryP.append('category')
    // movie release date
    const releaseDateP=document.createElement('p')
    releaseDateP.append(movie.release_date)
    movieContentLeft.append(categoryP)
    movieContentLeft.append(releaseDateP)
    //button group
    const buttonGroupDiv=document.createElement('div')
    buttonGroupDiv.classList.add('button-group')
    // buy link
    const linkA=document.createElement('a')
    linkA.setAttribute('href','#')
    linkA.append("Buy")
    linkA.setAttribute('href','https://www.moviemeter.nl/film/1153939')
    // bookmark
    const bookmarkIcon=document.createElement('i')
    bookmarkIcon.setAttribute('onclick', 'createBookmark()')
    bookmarkIcon.classList.add('material-icons')
    bookmarkIcon.append("bookmark")
    
    const detailIcon=document.createElement('i')
    detailIcon.classList.add('material-icons')
    detailIcon.setAttribute('onclick', 'movieDetail()')
    detailIcon.append('more')
    buttonGroupDiv.append(linkA,bookmarkIcon,detailIcon)
    
    //movie popularity
    const popularityDiv=document.createElement('div')
    popularityDiv.classList.add('popularity')
    const starIcon=document.createElement('i')
    starIcon.append('star')
    starIcon.classList.add('material-icons')

    const popularityP=document.createElement('p')
    popularityP.append(movie.popularity)
    popularityDiv.append(starIcon,popularityP)
    //line 
    const lineDiv=document.createElement('div')
    lineDiv.classList.add('line')
    //append parent
    const movieContentDiv=document.createElement('div')
    movieContentDiv.classList.add('movie-content')
    movieContentDiv.append(movieContentLeft,popularityDiv)
    movieRightDiv.append(movieContentDiv)
    movieRightDiv.append(buttonGroupDiv)
    movieCardDiv.append(movieRightDiv)
    
    movieList.append(movieCardDiv)
    movieList.append(lineDiv)

// image, title, bookmark button, buy button, popularity p, details button
}