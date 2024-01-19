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


async functionAddData () {
  const gallery = document.querySelector('.gallery');
  const data = await getData();

  data.forEach(beer=> {
    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('h1');
    name.textContent = beer.name;


    const desc = document.createElement('h3');
    desc.textContent = beer.description;
  })
}

const DOMSelectors = {
  searchbtn: document.querySelector(".searchbtn"),
  allergenbtn: document.querySelector(".allergenbtn"),
  gallery: document.querySelector(".gallery"),
}

