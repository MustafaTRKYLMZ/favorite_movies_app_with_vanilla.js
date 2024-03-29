'use-strict'

export const contentBodyView =() =>{
const contentBodyDiv=document.createElement('div')
contentBodyDiv.classList.add('content-body')
//left sidebar
const leftSidebarDiv = document.createElement('div')
leftSidebarDiv.classList.add('left-sidebar')
//movie list sidebar
const movieListDiv = document.createElement('div')
movieListDiv.classList.add('movie-list')
//bookmark list
const bookmarkListDiv = document.createElement('div')
bookmarkListDiv.classList.add('bookmark-list')

contentBodyDiv.append(leftSidebarDiv,movieListDiv,bookmarkListDiv)
document.body.append(contentBodyDiv)

}