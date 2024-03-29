'use strict';

//import { createBookmark } from './pages/createBookmark.js';
import { welcomePage } from './pages/welcomePage.js';

const loadApp =()=>{
 welcomePage()
 //let event = new Event('click')
// createBookmark(event)
}


window.addEventListener('load',loadApp)