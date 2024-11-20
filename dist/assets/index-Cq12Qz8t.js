(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA+CAYAAACWX20oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7ZxLctpAEIZ7Rtp5Ed0AhMFbkxuQE8Q5gZ0j+ATBJwg5QeAkcU5gvIx5jHKCKF7DKD0YUkh2M5gyKh7/txGMGKrrqxnm1UJRAXN3F01PTi4CrT+SUk0uqtJhklKW9afW9upnZ93iTbX8ZjAYtEKtv9PhypBIJtZ+bjQat4uC/2J+G3Npre3SEaO1vqrEcc+9nomZt5QfBIhbzgfXcmZizGhk6Pi6j0RCj4/vg+HDw5VrQgQWRNMw/KWDMLwkkIMbyoXma5NADqXUechjeeT5VJpZe58r0vrcVy/Lsp9UApvEskadakgesun0vtZotJbLxsNhwlZXfXFSq9dbVAKbxGLGYzcCt1bUIU3gRSBGAGIEIEYAYgQgRgBiBLzzGBUEldFg0M6Vaf2OJ0i0J0TF+Dn2qq+SV4z7El47fCmU0R4RPYt/DdCVBCBGAGIEIEYAYgQgRgBiBPzzGKI+WXu9XJAp1eXNocqKOpEZDss5jlkdhyPl+D/lSrT+Sp4tXf8OnrV/a0sndA7eNfNVizjgFu0GaVyIn3fwUt8kFV1JAGIEIEYAYgQgRgBiBCBGQJnRaBu7Tkl8ehpTCcxPIn2TvFeDFiMAMQIQIwAxAhAjADECECPg36jaMNVsl9gg1Yy2lWq2SyDV7C2BGAGIEYAYAYgRgBgBiBHYVqrZ8/SuLbFRLGukmime7PzZp1lsSaSuK/UJ5HBLIE0lPT6zT/Byp6v55L/jFooEnlAqoSC41XEcu5P/GwJPZNk3dpLMhms+6ujw5ejlWGtv5i7yT+rzGVObL69OFj4QrhdSHKp41xhT5T2YtnL/7XDowzj/tnIr6ekg6Ljuk7u1qh5LatJkcphywjApyljmH1Ix84h4pOYwAAAAAElFTkSuQmCC",n=document.getElementById("search-result-area");document.getElementById("saved-movies");document.getElementById("form");const p=document.getElementById("search"),c="13a9adac";let d=[],l=[];document.addEventListener("click",t=>{t.preventDefault(),t.target.dataset.search?m(p.value):t.target.dataset.add?g(l,t.target.dataset.add):t.target.dataset.nav==="list"?window.location.href="watchlist.html":t.target.dataset.nav==="main"&&(window.location.href="/")});function g(t,o){t.filter(a=>{a.imdbID===o&&localStorage.setItem(`${a.imdbID}`,JSON.stringify(a))})}async function m(t){const a=await(await fetch(`http://www.omdbapi.com/?apikey=${c}&s=${t}`)).json();a.Response==="True"?(d=a.Search,u()):n.innerHTML=`
                <div class="message-pop-up">
                    <h2>Unable to find what you're looking for. Please try another search.</h2>
                </div>
            `}async function u(){let t="";for(let o of d){const i=await(await fetch(`http://www.omdbapi.com/?apikey=${c}&i=${o.imdbID}`)).json();l.push(i),t+=`
            <div class="movie-container">
                <img class="poster" src="${i.Poster}">
                <div class="movie-info-container">
                    <div class="top-container">
                        <h2 class="title">${i.Title}</h2>
                        <p class="rating">&#11088; ${i.imdbRating}</p>
                    </div>
                    <div class="mid-container">
                        <p class="runtime">${i.Runtime}</p>
                        <p class="genre">${i.Genre}</p>
                        <div class="add-container">
                            <img class="add-icon" src="images/addIcon.png"  data-add="${i.imdbID}">
                            <p>Watchlist</p>
                        </div>
                    </div>
                    <p class="plot">${i.Plot}</p>
                </div>
            </div>
        `}n.innerHTML=t}n.innerHTML=`
    <div class="message-pop-up">
        <img src="${A}">
        <h2>Start exploring</h2>
    </div>
`;
