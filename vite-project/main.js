import "./css/style.css";

const URL = "https://api.punkapi.com/v2/beers"

// async function getData(URL) {
// try{
//   const res = await fetch(URL);
//   const data = await res.json();
//   console.log(data);
//   return(data);
  
// }
// catch (error){
//   console.log(error);
// }
// };
// getData(URL);

const DOMSelectors = {
  searchbtn: document.querySelector(".searchbtn"),
  allergenbtn: document.querySelector(".allergenbtn"),
  gallery: document.querySelector(".gallery"),
  search: document.querySelector("#lookbeer"),
}

async function getData () {
  try{
    const res = await fetch(URL);
    const beers = await res.json();
    console.log(beers);
    addCard(beers);
    return(beers);
  }
  catch (error){
    console.log(error);
  
}};
getData()

function addCard (beers) {
  beers.forEach((beer) =>
  DOMSelectors.gallery.insertAdjacentHTML (
    "beforeend", 
    `<div class="card">
        <div class="name">${beer.name}</div>
        <div class="tagline">${beer.tagline}</div>
        <div class="img">${beer.img_url}</div>
        <div class="description">${beer.description}</div>
        <div class="attenuation">${beer.attenuation_level}</div>
        
      </div>`
    
  ))
};







