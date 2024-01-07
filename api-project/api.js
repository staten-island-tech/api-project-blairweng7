/*
const URL = `https//api.quotable.io/random`

async function getData(URL) {
    let pokemon = "peekachew"
    try {
        const response = await fetch(URL);
        if(response.status !=200){
            
            throw new Error(pokemon);
        }
        console.log(response);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        document.querySelector("h1").textContent = `Sorry I cannot find ${pokemon}`;
    }
}
getData(URL);


async function getData(){
    let res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=d48eb5d3a4d59bbbef34cda51f943&page=1"
    )
    let data = await res.json();
    console.log(data);
    data.results.forEach((movie));
}
getData();
*/

// const API =  "https://api.fbi.gov/wanted/v1/list"
// async function getData(API){
//     let res = await fetch(API)
//     let data = await res.json();
//     try {console.log(data);
//         if (response.status !=200){
//             throw new Error(response.statusText);
//         }
//     }
//     catch (error){
//         alert("Oh that's not")
//     }
//     createCard(data);
// } 
// getData(API);

// function createCard(data){
//     data.forEach((Objects)=> {
//         DOMSelectors.container.insertAdjacentHTML("afterend",
//         `
//         <div class="card">
//         <h1 class="name"> ${Objects.title}</h1>
//         </div>
//         `
//         )
//     })
// }

import { DOMSelectors } from "./dom";

const API =  "https://api.fbi.gov/wanted/v1/list"

async function getData(){
    try {
        const response = await fetch(API);
        if (response.status !=200){
            throw new Error(response.statusText);
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        addCards(data.items);

    } catch (error){
        console.log(error)
    }
   
}
getData(API);
function Search(){
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    addCards();
    DOMSelectors.search.value
})    
}


function addCards (arr){
    arr.forEach((items) => {
      DOMSelectors.container.insertAdjacentHTML("afterend", 
      `
      <div class="card">
      <h2 class="name"> ${items.title}</h2>
      <img src="${items.images.object}" alt="" class="images">
      <h3 class="description"> ${items.description}</h3>
      <h3 class="dob"> ${items.date_of_birth_used}</h3>
      <h3 class= "gender"> ${items.sex}</h3>
    </div>
      `
  )})};