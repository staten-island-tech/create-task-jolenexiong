import "./css/style.css";

const URL = "https://api.potterdb.com/v1/spells"

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
  search: document.querySelector("#lookcharacter"),
}

async function getData () {
  try{
    const res = await fetch(URL);
    const spells = await res.json();
    console.log(spells);
    addCard(spells);
    return(spells);
  }
  catch (error){
    console.log(error);
  
}};
getData()

function addCard (spells) {
  spells.forEach((spells) =>
  DOMSelectors.gallery.insertAdjacentHTML (
    "beforeend", 
    `<div class="card">
        <div class="name">${spells.name}</div>
        <div class="incantation>${spells.incantation}</div>
        <div class="img">${spells.image}</div>
        <div class="effect">Effect:${spells.effect}</div>
        <div class="hand">${spells.hand}</div>
        
      </div>`
  ))
};

// var dropdown = document.getElementById('dropdown')

// dropdown.addEventListener('change', function(){
//   var option = dropdown.options[dropdown.selectedIndex].textContent;
//   brewery.forEach((brewery)=> brewery.filter)
// })




