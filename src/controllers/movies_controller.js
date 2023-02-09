import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["list", "input"]

  connect() {
    console.log("Hello from Movies controller")
    this.fetchMovie("star wars")
  }

  displayMovies(movies) {
    const list = this.listTarget
    list.innerHTML = ""
    movies.forEach((movie) => {
      list.insertAdjacentHTML("beforeend", `
      <li class='list-inline-item'>
        <img height=100 src="${movie.Poster}" alt="" />
      </li>
      `)
    })
  }
  
  fetchMovie(keyword) {
    const url = `https://www.omdbapi.com/?s=${keyword}&apikey=48727053`
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const movies = data.Search
        this.displayMovies(movies)
      })
  }
  
  handleSearchClick(event) {
    const input = this.inputTarget
    event.preventDefault()
    this.fetchMovie(input.value)
  }
}