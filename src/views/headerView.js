export const headerView =()=>{
    const headerDiv=document.createElement('header');
    //header title
    const h1 =document.createElement('h1')
    h1.append('Favorites Movies')
    headerDiv.append(h1)
    document.body.append(headerDiv)
}