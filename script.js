const API_TOKEN = "b81d3d14fd8c140669eb6a41301e9499";

// const moviesGrid = document.querySelector("#movies-grid");
let page = 1;

async function executeRequest(page) {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_TOKEN}&sort_by=popularity.desc&page=${page}`);
    const data = await response.json();
    return data.results;
}

function renderMovieCards(page = 1) {
    executeRequest(page).then((results) => {
        results.forEach(({ backdrop_path, vote_average, original_title }) => {
            document.querySelector("#movies-grid").innerHTML += `
                <div class="movie-card">
                    <div class="movie-poster-wrapper">
                        <img class="movie-poster" src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="${original_title}">
                    </div>
                    <p class="movie-votes">
                        <img src="images/star-solid.svg" alt="">
                        ${vote_average}
                    </p>
                    <h4 class="movie-title">${original_title}</h4>
                </div>
            `;
        });
    });
}

function loadNextPage() {
    page++;
    renderMovieCards(page);
}

function toggleNavbarTop() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.remove("top");
    } else {
        nav.classList.add("top");
    }
}

window.onload = function() {
    renderMovieCards();
    document.addEventListener("scroll", toggleNavbarTop);
};