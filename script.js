const API_KEY = '6113b745b290d94d4288f48e00062af2'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const button = document.querySelector('button')
const input = document.querySelector('input')
const movieList = document.querySelector('.movie-list')

let response

button.addEventListener('click', async () => {
  let movieSearch = input.value

  response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieSearch}&api_key=${API_KEY}`
  )
  console.log(response)
  renderList()
})

const renderList = () => {
  //let movie = []
  let finalResult = response.data.results
  //let moviePoster = document.createElement('div')
  finalResult.forEach((movie, index) => {
    let moviePoster = document.createElement('div')
    moviePoster.innerHTML = `<img src=${IMAGE_BASE_PATH + movie.poster_path} />`

    moviePoster.classList.add(`div-${index}`)

    let viewDetails = document.createElement('button')
    viewDetails.innerHTML = 'View More Info'
    // viewDetails.addEventListener('click', movie.overview)

    let movieTitle = document.createElement('h1')
    movieTitle.innerText = movie.original_title

    movieList.appendChild(moviePoster)
    movieList.appendChild(movieTitle)
    movieList.appendChild(viewDetails)

    viewDetails.addEventListener('click', async () => {
      console.log(movie.overview)
      let newP = document.createElement('p')
      newP.innerText = movie.overview
      //console.log(document.querySelector(movieTitle).getElementsByClassName)

      //movieList.removeChild(movieTitle)
      movieTitle.appendChild(newP)
      //movieList.removeChild(movieTitle)
    })
  })
}
