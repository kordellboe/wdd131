const apiKey = "b637a7e7a39954693d021dc0c0818173";
const baseUrl = "https://api.themoviedb.org/3";

const form = document.getElementById("searchForm");
const input = document.getElementById("movieTitle");
const results = document.getElementById("results");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = input.value.trim();
  if (title === "") {
    results.innerHTML = "<p>Please enter a movie title.</p>";
  } else {
    searchMovie(title);
  }
});

function searchMovie(title) {
  results.innerHTML = "<p>Searching...</p>";
  const url = baseUrl + "/search/movie?api_key=" + apiKey + "&query=" + encodeURIComponent(title);

  fetch(url)
    .then(function (r) {
      return r.json();
    })
    .then(function (data) {
      if (!data.results || data.results.length === 0) {
        results.innerHTML = "<p>No movie found.</p>";
      } else {
        const movie = data.results[0];
        loadProviders(movie.id);
      }
    })
    .catch(function () {
      results.innerHTML = "<p>Error getting movie data.</p>";
    });
}

function loadProviders(movieId) {
  results.innerHTML = "<p>Loading providers...</p>";
  const url = baseUrl + "/movie/" + movieId + "/watch/providers?api_key=" + apiKey;

  fetch(url)
    .then(function (r) {
      return r.json();
    })
    .then(function (data) {
      const us = data.results && data.results.US;
      if (!us || !us.flatrate) {
        results.innerHTML = "<p>No streaming providers found.</p>";
      } else {
        const names = us.flatrate.map(function (p) {
          return p.provider_name;
        });
        results.innerHTML = "<p>Streaming on: " + names.join(", ") + "</p>";
      }
    })
    .catch(function () {
      results.innerHTML = "<p>Error loading providers.</p>";
    });
}
