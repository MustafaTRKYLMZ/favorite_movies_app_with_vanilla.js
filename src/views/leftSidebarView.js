export const leftSidebarView =(categorys) =>{

const leftSidebarDiv=document.querySelector('.left-sidebar')

 const categoryListDiv=document.createElement('div')
 categoryListDiv.classList.add('category-list')
categorys.forEach ((category) =>{
  const categoryButton=document.createElement('BUTTON')
   categoryButton.setAttribute('onclick',"getMoviesByCategory()")
   categoryButton.setAttribute('id',category.id)
    categoryButton.append(category.title)
    categoryListDiv.append(categoryButton)
})
leftSidebarDiv.append(categoryListDiv)


}