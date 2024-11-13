const mainBody = document.getElementById("search-result-area")
const listBody = document.getElementById("saved-movies")
const form = document.getElementById("form")
const search = document.getElementById("search")
const apiKey = "13a9adac"
let movies = []
let moviesToChooseFrom = []

document.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.dataset.search) {
            searchTitle(search.value)
    } else if (e.target.dataset.add) {
        addMovie(moviesToChooseFrom, e.target.dataset.add)
    } else if (e.target.dataset.nav === "list") {
        window.location.href = "https://sparkling-cuchufli-6959ef.netlify.app/watchlist.html"
    } else if (e.target.dataset.nav === "main") {
        window.location.href = "/index.html"
    }
})

function addMovie(films, filmID) {
    films.filter(film => {
        if (film.imdbID === filmID) {
            localStorage.setItem(`${film.imdbID}`, JSON.stringify(film))
        }
    })
}

async function searchTitle(title) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
    const data = await res.json()
        if (data.Response === "True") {
            movies = data.Search
            getMovieResult()
        } else {
            mainBody.innerHTML = `
                <div class="message-pop-up">
                    <h2>Unable to find what you're looking for. Please try another search.</h2>
                </div>
            `
        }
}

async function getMovieResult() {
    let htmlContent = ''
    for (let movie of movies) {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`)
        const data = await res.json()
        moviesToChooseFrom.push(data)
        htmlContent += `
            <div class="movie-container">
                <img class="poster" src="${data.Poster}">
                <div class="movie-info-container">
                    <div class="top-container">
                        <h2 class="title">${data.Title}</h2>
                        <p class="rating">&#11088; ${data.imdbRating}</p>
                    </div>
                    <div class="mid-container">
                        <p class="runtime">${data.Runtime}</p>
                        <p class="genre">${data.Genre}</p>
                        <div class="add-container">
                            <img class="add-icon" src="images/addIcon.png"  data-add="${data.imdbID}">
                            <p>Watchlist</p>
                        </div>
                    </div>
                    <p class="plot">${data.Plot}</p>
                </div>
            </div>
        `
    }
    mainBody.innerHTML = htmlContent

}

mainBody.innerHTML = `
    <div class="message-pop-up">
        <img src="images/filmIcon.png">
        <h2>Start exploring</h2>
    </div>
`
