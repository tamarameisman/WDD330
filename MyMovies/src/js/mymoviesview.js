// MyMovie View handler
export default class MyMoviesView {
    renderSelectMovieList(searchResults, listElement, myMovieList){
      listElement.innerHTML = ""
      searchResults.forEach(movie => {
        const item = document.createElement('div');
        item.setAttribute('data-id', movie.imdbID);
        item.innerHTML = this.getMoviePoster(movie, '<button class="add_movie">Add Movie</button>')
        if(myMovieList.find(myMovie => myMovie.imdbID === movie.imdbID)){
          item.firstElementChild.classList.add("added")   
        }
        listElement.appendChild(item);
      });

    }
    renderMoviesList(myMovieList, listElement) {
      listElement.innerHTML = ""
      myMovieList.forEach(movie => {
        const item = document.createElement('div');
        item.setAttribute('data-id', movie.imdbID);
        item.setAttribute('class', 'movie_poster_container show');
        if(movie.liked){
          item.classList.add("liked_movie")
        }
        if(movie.watched){
          item.classList.add("watched_movie")
        }
        item.setAttribute('id', "movie-Id-"+movie.imdbID);
        const footerText =  '<div class="movie_poster__footer"><button class="watch_movie">Watched</button><button class="like_movie">Liked</button><button class="remove_movie">Remove</button></div>'
        item.innerHTML = this.getMoviePoster(movie, footerText)
        listElement.appendChild(item);
      });
      
    }
    getMoviePoster(movie,extraElements="") {
      return `
      <div class="movie_poster">
        <img src=${movie.Poster} class="image"></img>
        <div class="title">${movie.Title}</div>
        <p class="year"> Year: ${movie.Year}</p>
        ${extraElements}
      </div>
      `;
    }
    renderMyMovieDetails(movie, element) {
      const movieProperties = Object.entries(movie.properties);
      // for the provided movie make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier!
      element.innerHTML = movieProperties
      .map(item => {
        if (item[0] === 'time' || item[0] === 'updated') {
          return `<li>${item[0]}: ${new Date(item[1])}</li>`;
        } else return `<li>${item[0]}: ${item[1]}</li>`;
      })
      .join('');
    }
  }  