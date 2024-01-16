import "./css/style.css";

const URL = "https://api.punkapi.com/v2/beers/random"

async function getData(URL) {
  const reponse = await fetch(URL);
  console.log(reponse);
  let result= await fetch ("GET /products");
let data = await result.json();
console.log(data);
}

getData(URL);

const DOMSelectors = {
  searchbtn: document.querySelector(".searchbtn"),
  allergenbtn: document.querySelector(".serachallergenbtn"),
}

