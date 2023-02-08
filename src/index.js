const input = document.querySelector("#keyword");
const button = document.querySelector("#submit");
const list = document.querySelector("#results");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=48727053`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const movies = data.Search;
      list.innerHTML = "";
      movies.forEach((movie) => {
        list.insertAdjacentHTML("beforeend", `
        <li class='list-inline-item'>
          <img src="${movie.Poster}" alt="" />
          <p>${movie.Title}</p>
        </li>
        `);
      });
    });
});
