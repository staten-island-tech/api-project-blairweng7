import { DOMSelectors } from "./dom";
import '../css/style.css';

//get data
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

//creates cards

function addCards (arr){
    arr.forEach((items) => {
      DOMSelectors.container.insertAdjacentHTML("afterend", 
      `
      <div class="card">
      <h2 class="name"> ${items.title}</h2>
      <img class="card-img" src="${items.images[0].original}" alt="">
      <h3 class="description"> ${items.description}</h3>
      <h3 class="dob"> ${items.date_of_birth_used}</h3>
      <h3 class= "gender"> ${items.sex}</h3>
    </div>
      `
  )})};
