import "./css/style.css";
const URL = "https://api.potterdb.com/v1/spells"

const DOMSelectors = {
  searchbtn: document.querySelector(".searchbtn"),
  gallery: document.querySelector(".gallery"),
  search: document.querySelector("#lookspells"),
  dropdown: document.getElementById('dropdown'),
  showallbtn: document.querySelector(".showall"),
  errormessage: document.querySelector(".errormessage"),
  removebtn: document.querySelector(".removebtn"),
};
let allSpells = {};
async function getData() {
  try {
    const res = await fetch(URL);
    const spells = await res.json();
    console.log(spells);
    allSpells = spells.data
    addCard(allSpells);
    return spells;
  }
  catch (error) {
    console.log(error);

  }
};
getData();

function addCard(spells) {
  spells.forEach((spell) =>
    DOMSelectors.gallery.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <div class="name">${spell.attributes.name}</div>
        <div class="img"><img src="${spell.attributes.image}"></div>
        <div class="effect">Effect:${spell.attributes.effect}</div>
      </div>`
    ))
};

function removeall() {
  DOMSelectors.gallery.innerHTML = "";
}

DOMSelectors.dropdown.addEventListener('change', function () {
  const spellcategory = DOMSelectors.dropdown.value;
  console.log('selected category:', spellcategory);

  const filtered = allSpells.filter((spell) =>
    spell.attributes.category === spellcategory
  );

  console.log('filtered:', filtered);

  removeall();
  addCard(filtered);
});

DOMSelectors.showallbtn.addEventListener('click', function (event) {
  event.preventDefault();
  addCard(allSpells);
})

DOMSelectors.searchbtn.addEventListener('click', function (event) {
  event.preventDefault();
  removeall();

  const search = DOMSelectors.search.value.toLowerCase();
  const spellmatch = allSpells.filter((spell) => spell.attributes.name.toLowerCase() === search)

if (spellmatch.length > 0) {
  addCard(spellmatch);
  DOMSelectors.errormessage.textContent = ""
} else {
  DOMSelectors.errormessage.textContent = "Sorry that spell doesn't exist."
}
});

DOMSelectors.removebtn.addEventListener('click', function (event){
  event.preventDefault();
  removeall();
})