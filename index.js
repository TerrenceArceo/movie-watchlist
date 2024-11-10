const mainBody = document.getElementById("search-result-area")
const form = document.getElementById("form")
const search = document.getElementById("search")
const apiKey = "13a9adac"
let movies = []

document.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.dataset.search) {
        if (search.value) {
            searchTitle(search.value)
        } else {
                mainBody.innerHTML = `
            <img src="images/filmIcon.png">
            <h2>Start exploring</h2>
            `
        }
    } else if (e.target.dataset.add) {
        addMovie(movies, e.target.dataset.add)
    }
})


mainBody.innerHTML = `
    <div class="explore-pop-up">
        <img src="images/filmIcon.png">
        <h2>Start exploring</h2>
    </div>
`

function addMovie(films, filmID) {
    films.filter(film => {
        if (film.imdbID === filmID) {
            localStorage.setItem(`${film.Title}`, JSON.stringify(film))
        }
    })
}

async function searchTitle(title) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=13a9adac&s=${title}`)
    const data = await res.json()
        if (data.Response === "True") {
            movies = data.Search
            getMovieResult()
        } else {
            mainBody.innerHTML = `
                <div class="explore-pop-up">
                    <h2>Unable to find what you're looking for. Please try another search.</h2>
                </div>
            `
        }
}

async function getMovieResult() {
    let htmlContent = ''
    for (let movie of movies) {
        const res = await fetch(`http://www.omdbapi.com/?apikey=13a9adac&i=${movie.imdbID}`)
        const data = await res.json()
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





// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     if (search.value) {
//         searchTitle(search.value)
//     } else {
//             mainBody.innerHTML = `
//         <img src="images/filmIcon.png">
//         <h2>Start exploring</h2>
//         `
//     }
// })