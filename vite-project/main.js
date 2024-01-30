import "./css/style.css";

const URL = "https://api.openbrewerydb.org/v1/breweries"

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
  gallery: document.querySelector(".gallery"),
  search: document.querySelector("#lookbeer"),
}

async function getData () {
  try{
    const res = await fetch(URL);
    const brewery = await res.json();
    console.log(brewery);
    addCard(brewery);
    return(brewery);
  }
  catch (error){
    console.log(error);
  
}};
getData()

function addCard (brewery) {
  brewery.forEach((brewery) =>
  DOMSelectors.gallery.insertAdjacentHTML (
    "beforeend", 
    `<div class="card">
        <div class="name">${brewery.name}</div>
        <div class="addy">${brewery.address_1}</div>
        <div class="city">City:${brewery.city}</div>
        
      </div>`
  ))
};

var dropdown = document.getElementById('dropdown')

dropdown.addEventListener('change', function(){
  var option = dropdown.options[dropdown.selectedIndex].textContent;
  brewery.forEach((brewery)=> brewery.filter)
})




