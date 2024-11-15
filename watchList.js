const listBody = document.getElementById("saved-movies")

let values = []
let keys = Object.keys(localStorage)
let i = keys.length
while ( i-- ) {
    values.push( JSON.parse(localStorage.getItem(keys[i])) )
}

document.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.dataset.remove) {
        removeMovie(e.target.dataset.remove)
        generateMovieList(values)
    } else if (e.target.dataset.nav === "main") {
        window.location.href = "/"
    }
})



function removeMovie(key) {
    localStorage.removeItem(key)
    window.location.reload()
}


function generateMovieList(arr) {
    let movieListHtml = ''
    if (arr.length === 0) {
        movieListHtml = `
            <div class="message-pop-up">
                <h2>Your watchlist is looking a little empty...</h2>
                <div class="add-movie-container">
                    <img src="images/addIcon.png" data-nav="main">
                    <h3 data-nav="main" class="add-movie-message">Let's add some movies!</h3>
                </div>
            </div>
        `
    } else {
        arr.forEach(movie => {
            movieListHtml += `
                <div class="movie-container">
                    <img class="poster" src="${movie['Poster']}">
                    <div class="movie-info-container">
                        <div class="top-container">
                            <h2 class="title">${movie.Title}</h2>
                            <p class="rating">&#11088; ${movie.imdbRating}</p>
                        </div>
                        <div class="mid-container">
                            <p class="runtime">${movie.Runtime}</p>
                            <p class="genre">${movie.Genre}</p>
                            <div class="remove-container">
                                <img class="remove-icon" src="images/removeIcon.png"  data-remove="${movie.imdbID}">
                                <p>Remove</p>
                            </div>
                        </div>
                        <p class="plot">${movie.Plot}</p>
                    </div>
                </div>
            `
        })
    }

    listBody.innerHTML = movieListHtml
}

generateMovieList(values)