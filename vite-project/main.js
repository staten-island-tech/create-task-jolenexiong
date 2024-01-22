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
    const beer = await res.json();
    console.log(beer);
    return(beer);
  }
  catch (error){
    console.log(error);
  
}}

getData()



