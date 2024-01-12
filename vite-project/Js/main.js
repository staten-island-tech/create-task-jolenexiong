import "./css/style.css";

const URL = "https://simple-grocery-store-api.glitch.me"

async function getData(URL) {
  const reponse = await fetch(URL);
  console.log(reponse);
  let result= await fetch ("https://southparkquotes.onrender.com/v1/quotes/search/cartman");
let data = await result.json();
console.log(data);
}

getData(URL);