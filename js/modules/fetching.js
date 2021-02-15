import {renderMovies} from './render.js';

// Fetching data from API and return it as JSON
async function fetchData() {
    const dataResponse = await fetch(`https://ghibliapi.herokuapp.com/films`)
    const jsonData = await dataResponse.json()
    return jsonData;
  } 
  
  // When starting the application making sure that everything is connected and using await fetchData for no errors //
  async function init() {
    const data = await fetchData()
    renderMovies(data)
  }

  export {fetchData, init};