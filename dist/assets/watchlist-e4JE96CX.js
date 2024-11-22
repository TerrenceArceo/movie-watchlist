import{a as n}from"./addIcon-BATHfO2v.js";const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgBpZMxTsNAEEX/rCWMkZAcKYUbhJGQoIOSkpyAXIEbcAOcG8AtoPMN4AhbQoXpgkSxBYUdEQ8zKyVyIgTO5hX27mr/zNjzh7BGmh1fgmlMZK5km/tDZssEC5iJm75U3fu0FKZ5iiS+JcYN/oAZd2iaiXOVWwZQMcU7TyA6Rx+0omY20iDGH0jm3mKfVu7GotFlmp3mBH5DAAwaSQVtgVB4PjZEdIZAtFM0yE4Yq2UdrbdqwW+fa7AlWkEl70OEwLBGHFYiECK2RmwbHKAVa0f112e1tz8cyP5iE7FY+t59vD74n9jGSQE/LL3VVuah0GWkj9pN693hwaOZfyf/VaKZ0cyuV4api/baiDtZ/c5YmOyduS1BUSkeee7e/wGPrGrH6GS9ywAAAABJRU5ErkJggg==",l=document.getElementById("saved-movies");let i=[],o=Object.keys(localStorage),s=o.length;for(;s--;)i.push(JSON.parse(localStorage.getItem(o[s])));document.addEventListener("click",e=>{e.preventDefault(),e.target.dataset.remove?(d(e.target.dataset.remove),A(i)):e.target.dataset.nav==="main"&&(window.location.href="/")});function d(e){localStorage.removeItem(e),window.location.reload()}function A(e){let t="";e.length===0?t=`
            <div class="message-pop-up">
                <h2>Your watchlist is looking a little empty...</h2>
                <div class="add-movie-container">
                    <img src="${n}" data-nav="main">
                    <h3 data-nav="main" class="add-movie-message">Let's add some movies!</h3>
                </div>
            </div>
        `:e.forEach(a=>{t+=`
                <div class="movie-container">
                    <img class="poster" src="${a.Poster}">
                    <div class="movie-info-container">
                        <div class="top-container">
                            <h2 class="title">${a.Title}</h2>
                            <p class="rating">&#11088; ${a.imdbRating}</p>
                        </div>
                        <div class="mid-container">
                            <p class="runtime">${a.Runtime}</p>
                            <p class="genre">${a.Genre}</p>
                            <div class="remove-container">
                                <img class="remove-icon" src="${c}"  data-remove="${a.imdbID}">
                                <p>Remove</p>
                            </div>
                        </div>
                        <p class="plot">${a.Plot}</p>
                    </div>
                </div>
            `}),l.innerHTML=t}A(i);
