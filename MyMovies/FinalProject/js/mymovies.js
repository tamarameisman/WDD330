//import * as store from "store2";
import imdbMovies from './imdbMovies.js';

export default class MyMovies {
    constructor() {
        this.imdbMovies = new imdbMovies();
        this.movieChangedEvents = [];
        this.getMyMovies()
    }
    getMyMovies() {
        this._myMovies = load("myMovies");
        if (!this._myMovies) {
            this._myMovies = [];
        }
        return this._myMovies;
    }
    addMovieChangeListener(callback) {
        this.movieChangedEvents.push(callback);
    }
    getMyMovieById(imdbID) {
        return this._myMovies.filter(item => item.imdbID === imdbID)[0];
    }
    async addMovie(movie) {
        this._myMovies.push(movie);
        save("myMovies", this._myMovies);
        this.movieChangedEvents.forEach(callback => callback(movie));
        return movie;
    }
    watchMovie(imdbID) {
        console.log("watching movie " + imdbID);
        const movie = this.getMyMovieById(imdbID);
        movie.watched = movie.watched ? false : true;
        save("myMovies", this._myMovies);
        this.movieChangedEvents.forEach(callback => callback(movie));
    }
    likeMovie(imdbID) {
        console.log("liking movie " + imdbID);
        const movie = this.getMyMovieById(imdbID);
        movie.liked = movie.liked ? false : true;
        save("myMovies", this._myMovies);
        this.movieChangedEvents.forEach(callback => callback(movie));
    }
    removeMovie(imdbID) {
        console.log("removing movie " + imdbID);
        const movie = this.getMyMovieById(imdbID);
        this._myMovies = this._myMovies.filter(item => item.imdbID !== imdbID);
        save("myMovies", this._myMovies);
    }
}

function load(name){ //retrieves items in the localStorage
    console.log("retrive records");
    let recordsJSON = window.localStorage.getItem(name); //searches for the key in localStorage
    let records =JSON.parse(recordsJSON)
    //console.log(records)
    return records;
}

function save(name, data){ //stores items in the localStorage
    window.localStorage.setItem(name,JSON.stringify(data));  
    console.log("save records");
    //converting object to string
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}