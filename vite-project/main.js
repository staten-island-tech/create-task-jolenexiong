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
  search: document.querySelector("#lookspells"),
  dropdown: document.getElementById('dropdown'),
};
let allSpells = {};
async function getData () {
  try{
    const res = await fetch(URL);
    const spells = await res.json();
    console.log(spells);
    allSpells = spells.data
    addCard(allSpells);
    return spells;
  }
  catch (error){
    console.log(error);
  
}
};
getData();
function addCard (spells) {
  spells.forEach((spell) =>
  DOMSelectors.gallery.insertAdjacentHTML (
    "beforeend", 
    `<div class="card">
        <div class="name">${spell.attributes.name}</div>
        <div class="img"><img src="${spell.attributes.image}"></div>
        <div class="effect">Effect:${spell.attributes.effect}</div>
        <div class="hand">Hand Movements:${spell.attributes.hand}</div>
        
      </div>`
  ))
};

function removeall () {
  DOMSelectors.gallery.innerHTML = "";
}

// DOMSelectors.dropdown.addEventListener('click', function(event){
//   event.preventDefault();
//   removeall();
//   const spellcategory = DOMSelectors.dropdown.value.toLowerCase();
//   const filtered = allSpells.filter((spell)=> 
//   spell.attributes.category.toLowerCase()=== spellcategory
//   );
//   addCard(filtered);
// });

DOMSelectors.dropdown.addEventListener('change', function() {
  const spellcategory = DOMSelectors.dropdown.value;
  console.log('Selected Category:', spellcategory);
  
  const filtered = allSpells.filter((spell) =>
    spell.attributes.category === spellcategory
  );
  
  console.log('Filtered Spells:', filtered);
  
  removeall();
  addCard(filtered);
});
