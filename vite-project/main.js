import "./css/style.css";

const URL = "https://api.punkapi.com/v2/beers/random"


let bottles= null;

async function getData(URL) {
try{
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
  bottles = data;
}
catch (error){
  console.log(error);
}
};

getData(URL);

const DOMSelectors = {
  searchbtn: document.querySelector(".searchbtn"),
  allergenbtn: document.querySelector(".allergenbtn"),
  gallery: document.querySelector(".gallery"),
}

function displayall() {
  beer.forEach((bottle)=> DOMSelectors.gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
<h2 class="name">${bottle.name}</h2>
<img src = "${bottle.img_url}"class="pic">
<h2>${bottle.tagline}</h2>
</div>`
));
}

displayall();