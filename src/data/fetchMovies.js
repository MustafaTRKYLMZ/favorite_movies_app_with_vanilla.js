'use strict'

const apiKey = '023355b94bf23acecb09880fb168a0d4';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjMzNTViOTRiZjIzYWNlY2IwOTg4MGZiMTY4YTBkNCIsInN1YiI6IjY2MDE3Y2I1MDQ3MzNmMDE3ZGVmMzVkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bCo8vTERQHTA3YpnJqa41MMHPtk7I2FVuVMSm7ji2fE';

export const fetchMovies=async ()=>{
    const response=await  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
         },
    }) 
    if(!response.ok) {
        throw new Error ('HTTP network error')
    }
    return await response.json()
}
