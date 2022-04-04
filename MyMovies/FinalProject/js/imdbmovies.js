import { getJSON } from './utilities.js';

export default class imdbMovies {
    apikey = "cee23b41"
    constructor() {
        this.baseUrl = `https://www.omdbapi.com/?apikey=${this.apikey}&`;
        this._myMovies = [];
    }
    async searchByMovieTitle(title) {
        const url = `${this.baseUrl}s=${title}`;
        const response = await getJSON(url);
        return response;
    }
    async getMovieById(imdbID) {
        const url = `${this.baseUrl}i=${imdbID}`;
        const response = await getJSON(url);
        return response;
    }
}
