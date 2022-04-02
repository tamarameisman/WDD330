import {MyMoviesController} from './mymoviescontroller.js';
import { SearchMoviesController } from "./searchmoviescontroller.js";
import MyMovies from './mymovies.js';

// import * as store from 'store2';
//const store = require("store2");

const myMovies = new MyMovies();
const searchMoviesController = new SearchMoviesController('#searchMoviesList',myMovies);
const myMoviesController = new MyMoviesController('#myMoviesList',myMovies);
searchMoviesController.init();
myMoviesController.init();

const addButton = document.querySelector('#addMovies');
addButton.addEventListener('click', (event) => {
    console.log(event)
    const slideShelf = document.querySelector('#slideShelf');
    const container = document.querySelector('#container');
    if(container.classList.contains('addActive')){
        event.currentTarget.innerHTML = 'Add Movies'; 
    } else {
        event.currentTarget.innerHTML = 'Hide Add Movies'; 
    }
    container.classList.toggle('addActive');
    slideShelf.classList.toggle('addActive');
});

