import{a as A}from"./addIcon-BATHfO2v.js";const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA+CAYAAACWX20oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7ZxLctpAEIZ7Rtp5Ed0AhMFbkxuQE8Q5gZ0j+ATBJwg5QeAkcU5gvIx5jHKCKF7DKD0YUkh2M5gyKh7/txGMGKrrqxnm1UJRAXN3F01PTi4CrT+SUk0uqtJhklKW9afW9upnZ93iTbX8ZjAYtEKtv9PhypBIJtZ+bjQat4uC/2J+G3Npre3SEaO1vqrEcc+9nomZt5QfBIhbzgfXcmZizGhk6Pi6j0RCj4/vg+HDw5VrQgQWRNMw/KWDMLwkkIMbyoXma5NADqXUechjeeT5VJpZe58r0vrcVy/Lsp9UApvEskadakgesun0vtZotJbLxsNhwlZXfXFSq9dbVAKbxGLGYzcCt1bUIU3gRSBGAGIEIEYAYgQgRgBiBLzzGBUEldFg0M6Vaf2OJ0i0J0TF+Dn2qq+SV4z7El47fCmU0R4RPYt/DdCVBCBGAGIEIEYAYgQgRgBiBPzzGKI+WXu9XJAp1eXNocqKOpEZDss5jlkdhyPl+D/lSrT+Sp4tXf8OnrV/a0sndA7eNfNVizjgFu0GaVyIn3fwUt8kFV1JAGIEIEYAYgQgRgBiBCBGQJnRaBu7Tkl8ehpTCcxPIn2TvFeDFiMAMQIQIwAxAhAjADECECPg36jaMNVsl9gg1Yy2lWq2SyDV7C2BGAGIEYAYAYgRgBgBiBHYVqrZ8/SuLbFRLGukmime7PzZp1lsSaSuK/UJ5HBLIE0lPT6zT/Byp6v55L/jFooEnlAqoSC41XEcu5P/GwJPZNk3dpLMhms+6ujw5ejlWGtv5i7yT+rzGVObL69OFj4QrhdSHKp41xhT5T2YtnL/7XDowzj/tnIr6ekg6Ljuk7u1qh5LatJkcphywjApyljmH1Ix84h4pOYwAAAAAElFTkSuQmCC",i=document.getElementById("search-result-area");document.getElementById("saved-movies");document.getElementById("form");const r=document.getElementById("search"),n="13a9adac";let o=[],c=[];document.addEventListener("click",t=>{t.preventDefault(),t.target.dataset.search?g(r.value):t.target.dataset.add?l(c,t.target.dataset.add):t.target.dataset.nav==="list"?window.location.href="/watchlist/watchlist.html":t.target.dataset.nav==="main"&&(window.location.href="/")});function l(t,s){t.filter(a=>{a.imdbID===s&&localStorage.setItem(`${a.imdbID}`,JSON.stringify(a))})}async function g(t){const a=await(await fetch(`https://www.omdbapi.com/?apikey=${n}&s=${t}`)).json();a.Response==="True"?(o=a.Search,m()):i.innerHTML=`
                <div class="message-pop-up">
                    <h2>Unable to find what you're looking for. Please try another search.</h2>
                </div>
            `}async function m(){let t="";for(let s of o){const e=await(await fetch(`https://www.omdbapi.com/?apikey=${n}&i=${s.imdbID}`)).json();c.push(e),t+=`
            <div class="movie-container">
                <img class="poster" src="${e.Poster}">
                <div class="movie-info-container">
                    <div class="top-container">
                        <h2 class="title">${e.Title}</h2>
                        <p class="rating">&#11088; ${e.imdbRating}</p>
                    </div>
                    <div class="mid-container">
                        <p class="runtime">${e.Runtime}</p>
                        <p class="genre">${e.Genre}</p>
                        <div class="add-container">
                            <img class="add-icon" src="${A}"  data-add="${e.imdbID}">
                            <p>Watchlist</p>
                        </div>
                    </div>
                    <p class="plot">${e.Plot}</p>
                </div>
            </div>
        `}i.innerHTML=t}i.innerHTML=`
    <div class="message-pop-up">
        <img src="${d}">
        <h2>Start exploring</h2>
    </div>
`;
