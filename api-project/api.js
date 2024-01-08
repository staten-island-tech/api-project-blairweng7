import { DOMSelectors } from "./dom";
import '../css/style.css';

//get data
const API =  "https://api.fbi.gov/wanted/v1/list";

async function getData(url){
    try {
        const response = await fetch(API);
        if (response.status !=200){
            throw new Error(response.statusText);
        }
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
      <h5 class="description" > ${items.description}</h5>
      <h5 class="dob"> ${items.date_of_birth_used}</h5>
      <h5 class="gender"> ${items.sex}</h5>
    </div>
      `
  );
});
}

  function clearCards() {  
    DOMSelectors.container.innerHTML='';
  }
  function clearFields(){
    DOMSelectors.form.value = '';
    }
  
  function search(){
    DOMSelectors.form.addEventListener("submit", async function(event){
      event.preventDefault();
      const searchInput = DOMSelectors.person.value;
      if(searchInput){
        const url = API + searchInput.toLowerCase();
        {
          try{
            const response = await fetch(url)
            const data = await response.json();
            console.log(data);
            addCards(data.items);
          }catch(error){
            console.log(error);
          }
        }
       
        clearCards();
        clearFields();
      }
      
    })
  }
  search()
  
