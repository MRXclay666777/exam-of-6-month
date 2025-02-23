document.addEventListener("DOMContentLoaded", function() {
    filterMovies();
});

function displayMovies(movieArray) {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";
    movieArray.forEach(movie => {
        let movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
           <img src="./images/detpul.png" alt="${movie.Title}">

            <h3>${movie.Title}</h3>
            <p>⭐ ${movie.imdb_rating}</p>
            <p>📅 ${movie.movie_year}</p>
            <p>${movie.Categories}</p>
        `;
        movieList.appendChild(movieCard);
    });
}

function filterMovies() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let genreValue = document.getElementById("genre-filter").value;
    let sortValue = document.getElementById("sort-filter").value;

    let filteredMovies = movies.filter(movie => 
        movie.Title.toLowerCase().includes(searchValue) &&
        (genreValue === "all" || movie.Categories.includes(genreValue))
    );

    if (sortValue === "year") {
        filteredMovies.sort((a, b) => b.movie_year - a.movie_year); // Yil bo‘yicha tartiblash
    } else if (sortValue === "rating") {
        filteredMovies.sort((a, b) => b.imdb_rating - a.imdb_rating); // Reyting bo‘yicha tartiblash
    }

    displayMovies(filteredMovies);
}


function filterMovies() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let genreValue = document.getElementById("genre-filter").value;
    let sortValue = document.getElementById("sort-filter").value;

    // Konsolda barcha kinolarni tekshirish
    console.log("Barcha kinolar:", movies);

    let filteredMovies = movies.filter(movie => {
        // Agar movie undefined yoki Title mavjud bo‘lmasa, uni filtrdan chiqaramiz
        if (!movie || typeof movie.Title !== "string") {
            console.warn("Noto‘g‘ri kino obyekti topildi:", movie);
            return false;
        }

        let titleMatch = movie.Title.toLowerCase().includes(searchValue);
        let genreMatch = genreValue === "all" || (movie.Categories && movie.Categories.includes(genreValue));

        return titleMatch && genreMatch;
    });

    console.log("Filtrdan keyin:", filteredMovies); // Konsolda tekshirish

    if (sortValue === "year") {
        filteredMovies.sort((a, b) => b.movie_year - a.movie_year);
    } else if (sortValue === "rating") {
        filteredMovies.sort((a, b) => b.imdb_rating - a.imdb_rating);
    }

    displayMovies(filteredMovies);
}





