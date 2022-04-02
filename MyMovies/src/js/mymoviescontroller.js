import { getLocation } from './utilities.js';
import myMovies from './mymovies.js';
import MyMoviesView from './mymoviesview.js';

// myMovies controller
export class MyMoviesController {
  constructor(parent, myMovies) {
    this.parent = parent;
    this.parentElement = null;
    this.currentMovies = [];
    this.myMovies = myMovies;
    this.myMoviesView = new MyMoviesView();
  }
  async init() {
    this.parentElement = document.querySelector(this.parent);
    this.currentMovies = this.myMovies.getMyMovies();
    this.myMoviesView.renderMoviesList(this.currentMovies, this.parentElement); 
    this.assignEventListeners()   
  }
  assignEventListeners(){
    this.myMovies.addMovieChangeListener(this.renderMoviesList.bind(this));
    document.querySelectorAll('.watch_movie').forEach(button => {
      button.addEventListener('click', this.watchMovie.bind(this), false);
    });    
    document.querySelectorAll('.like_movie').forEach(button => {
      button.addEventListener('click', this.likeMovie.bind(this), false);
    });
    document.querySelectorAll('.remove_movie').forEach(button => {
      button.addEventListener('click', this.removeMovie.bind(this), false);
    });
  }
  renderMoviesList(newMovie) {
    console.log("rendering movieList");
    this.parentElement = document.querySelector(this.parent);
    this.myMoviesView.renderMoviesList(this.myMovies.getMyMovies(), this.parentElement);    
    const newMovieElement = document.getElementById("movie-Id-" + newMovie.imdbID);
    newMovieElement.classList.remove("show")
    newMovieElement.scrollIntoView({ behavior: 'smooth', block: 'end'});
    setTimeout(() => { 
      newMovieElement.classList.add("show");
      setTimeout(() => { 
        newMovieElement.scrollIntoView({ behavior: 'smooth', block: 'end'})
       }, 700); 
     }, 500);
     this.assignEventListeners();
     
  }
  removeMovie(event){
    const movieID = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    this.myMovies.removeMovie(movieID);
    this.currentMovies = this.myMovies.getMyMovies();
    this.myMoviesView.renderMoviesList(this.currentMovies, this.parentElement); 
    this.assignEventListeners()   
  }
  watchMovie(event){
    const movieID = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    this.myMovies.watchMovie(movieID);
  };
  likeMovie(event){
    const movieID = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    this.myMovies.likeMovie(movieID);
  };


}