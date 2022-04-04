function e(e){return fetch(e).then((function(e){if(e.ok)return e.json();throw Error(e.statusText)})).catch((function(e){console.log(e)}))}class t{apikey="cee23b41";constructor(){this.baseUrl=`https://www.omdbapi.com/?apikey=${this.apikey}&`,this._myMovies=[]}async searchByMovieTitle(t){const i=`${this.baseUrl}s=${t}`;return await e(i)}async getMovieById(t){const i=`${this.baseUrl}i=${t}`;return await e(i)}}function i(e,t){window.localStorage.setItem(e,JSON.stringify(t)),console.log("save records")}class s{renderSelectMovieList(e,t,i){t.innerHTML="",e.forEach((e=>{const s=document.createElement("div");s.setAttribute("data-id",e.imdbID),s.innerHTML=this.getMoviePoster(e,'<button class="add_movie">Add Movie</button>'),i.find((t=>t.imdbID===e.imdbID))&&s.firstElementChild.classList.add("added"),t.appendChild(s)}))}renderMoviesList(e,t){t.innerHTML="",e.forEach((e=>{const i=document.createElement("div");i.setAttribute("data-id",e.imdbID),i.setAttribute("class","movie_poster_container show"),e.liked&&i.classList.add("liked_movie"),e.watched&&i.classList.add("watched_movie"),i.setAttribute("id","movie-Id-"+e.imdbID);i.innerHTML=this.getMoviePoster(e,'<div class="movie_poster__footer"><button class="watch_movie">Watched</button><button class="like_movie">Liked</button><button class="remove_movie">Remove</button></div>'),t.appendChild(i)}))}getMoviePoster(e,t=""){return`\n      <div class="movie_poster">\n        <img src=${e.Poster} class="image"></img>\n        <div class="title">${e.Title}</div>\n        <p class="year"> Year: ${e.Year}</p>\n        ${t}\n      </div>\n      `}renderMyMovieDetails(e,t){const i=Object.entries(e.properties);t.innerHTML=i.map((e=>"time"===e[0]||"updated"===e[0]?`<li>${e[0]}: ${new Date(e[1])}</li>`:`<li>${e[0]}: ${e[1]}</li>`)).join("")}}const o=new class{constructor(){this.imdbMovies=new t,this.movieChangedEvents=[],this.getMyMovies()}getMyMovies(){return this._myMovies=function(e){console.log("retrive records");let t=window.localStorage.getItem(e);return JSON.parse(t)}("myMovies"),this._myMovies||(this._myMovies=[]),this._myMovies}addMovieChangeListener(e){this.movieChangedEvents.push(e)}getMyMovieById(e){return this._myMovies.filter((t=>t.imdbID===e))[0]}async addMovie(e){return this._myMovies.push(e),i("myMovies",this._myMovies),this.movieChangedEvents.forEach((t=>t(e))),e}watchMovie(e){console.log("watching movie "+e);const t=this.getMyMovieById(e);t.watched=!t.watched,i("myMovies",this._myMovies),this.movieChangedEvents.forEach((e=>e(t)))}likeMovie(e){console.log("liking movie "+e);const t=this.getMyMovieById(e);t.liked=!t.liked,i("myMovies",this._myMovies),this.movieChangedEvents.forEach((e=>e(t)))}removeMovie(e){console.log("removing movie "+e);this.getMyMovieById(e);this._myMovies=this._myMovies.filter((t=>t.imdbID!==e)),i("myMovies",this._myMovies)}},n=new class{constructor(e,i){this.imdbMovies=new t,this.myMovies=i,this.myMoviesView=new s,this.parentElement=document.querySelector(e),this.currentSearchedMovies=[]}init(){this.form=document.forms[0],this.form.addEventListener("submit",this.searchForMovies.bind(this),!1)}async searchForMovies(e){e.preventDefault(),this.parentElement.innerHTML="<p>This could take a while ...</p>";const t=this.form.movieName.value,i=await this.imdbMovies.searchByMovieTitle(t);this.currentSearchedMovies=i.Search,console.log(this.currentSearchedMovies);const s=this.myMovies.getMyMovies();this.myMoviesView.renderSelectMovieList(this.currentSearchedMovies,this.parentElement,s),document.querySelectorAll(".add_movie").forEach((e=>{e.addEventListener("click",this.addMovie.bind(this),!1)}))}async addMovie(e){const t=e.target.parentElement.parentElement.getAttribute("data-id"),i=await this.imdbMovies.getMovieById(t);await this.myMovies.addMovie(i);const s=this.myMovies.getMyMovies();this.myMoviesView.renderSelectMovieList(this.currentSearchedMovies,this.parentElement,s),document.querySelectorAll(".add_movie").forEach((e=>{e.addEventListener("click",this.addMovie.bind(this),!1)}))}}("#searchMoviesList",o),r=new class{constructor(e,t){this.parent=e,this.parentElement=null,this.currentMovies=[],this.myMovies=t,this.myMoviesView=new s}async init(){this.parentElement=document.querySelector(this.parent),this.currentMovies=this.myMovies.getMyMovies(),this.myMoviesView.renderMoviesList(this.currentMovies,this.parentElement),this.assignEventListeners()}assignEventListeners(){this.myMovies.addMovieChangeListener(this.renderMoviesList.bind(this)),document.querySelectorAll(".watch_movie").forEach((e=>{e.addEventListener("click",this.watchMovie.bind(this),!1)})),document.querySelectorAll(".like_movie").forEach((e=>{e.addEventListener("click",this.likeMovie.bind(this),!1)})),document.querySelectorAll(".remove_movie").forEach((e=>{e.addEventListener("click",this.removeMovie.bind(this),!1)}))}renderMoviesList(e){console.log("rendering movieList"),this.parentElement=document.querySelector(this.parent),this.myMoviesView.renderMoviesList(this.myMovies.getMyMovies(),this.parentElement);document.getElementById("movie-Id-"+e.imdbID);this.assignEventListeners()}removeMovie(e){const t=e.target.parentElement.parentElement.parentElement.getAttribute("data-id");this.myMovies.removeMovie(t),this.currentMovies=this.myMovies.getMyMovies(),this.myMoviesView.renderMoviesList(this.currentMovies,this.parentElement),this.assignEventListeners()}watchMovie(e){const t=e.target.parentElement.parentElement.parentElement.getAttribute("data-id");this.myMovies.watchMovie(t)}likeMovie(e){const t=e.target.parentElement.parentElement.parentElement.getAttribute("data-id");this.myMovies.likeMovie(t)}}("#myMoviesList",o);n.init(),r.init();document.querySelector("#addMovies").addEventListener("click",(e=>{console.log(e);const t=document.querySelector("#slideShelf"),i=document.querySelector("#container");i.classList.contains("addActive")?e.currentTarget.innerHTML="Add Movies":e.currentTarget.innerHTML="See My Movies",i.classList.toggle("addActive"),t.classList.toggle("addActive")}));
//# sourceMappingURL=index.f06cf340.js.map
