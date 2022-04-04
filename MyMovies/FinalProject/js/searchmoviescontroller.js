import imdbMovies from './imdbMovies.js';
import MyMoviesView from './mymoviesview.js';
import MyMovies from './mymovies.js';

export class SearchMoviesController {
    constructor(parentElementId, myMovies) {
        this.imdbMovies = new imdbMovies();
        this.myMovies = myMovies;
        this.myMoviesView = new MyMoviesView();
        this.parentElement = document.querySelector(parentElementId);
        this.currentSearchedMovies = []
    }
    init() {
        this.form = document.forms[0];
        this.form.addEventListener('submit', this.searchForMovies.bind(this), false);
    }
    async searchForMovies(event) {
        // prevent the form from being submitted
        event.preventDefault();   
        this.parentElement.innerHTML = '<p>This could take a while ...</p>';

        const movieName = this.form.movieName.value;
        const movieList = await this.imdbMovies.searchByMovieTitle(movieName);
        this.currentSearchedMovies = movieList.Search;
        console.log(this.currentSearchedMovies)
        const myMovies = this.myMovies.getMyMovies()
        this.myMoviesView.renderSelectMovieList(this.currentSearchedMovies, this.parentElement, myMovies );
        document.querySelectorAll('.add_movie').forEach(button => {
            button.addEventListener('click', this.addMovie.bind(this), false);
        });        
    }
    async addMovie(event) {
        const movieID = event.target.parentElement.parentElement.getAttribute('data-id');
        const movieDetails = await this.imdbMovies.getMovieById(movieID);
        await this.myMovies.addMovie(movieDetails);
        const myMovies = this.myMovies.getMyMovies()
        this.myMoviesView.renderSelectMovieList(this.currentSearchedMovies, this.parentElement, myMovies);
        document.querySelectorAll('.add_movie').forEach(button => {
            button.addEventListener('click', this.addMovie.bind(this), false);
        });        
        // force a draw then show message
        // setTimeout(() => {  alert("Movie added to My Movies!"); }, 50);
 
    }   
}

