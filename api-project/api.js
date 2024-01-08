import { DOMSelectors } from "./dom";
import '../css/style.css';

//get data
const API =  "https://api.fbi.gov/wanted/v1/list";

async function getData(url){
    try {
        const response = await fetch(url);
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
    DOMSelectors.container.innerHTML= ' ';
    arr.forEach((items) => {
      DOMSelectors.container.insertAdjacentHTML("beforeend", 
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
    DOMSelectors.person.value = '';
    }
  
  function search(){
    DOMSelectors.form.addEventListener("submit", async function(event){
      event.preventDefault();
      const searchInput = DOMSelectors.input.value;
      if(searchInput){
        const url = `${API}/${searchInput.toLowerCase()}`;
        
          try{
            await getData(url);
            clearFields();
          }catch(error){
            console.log(error);
            `<div class ="error>
            <h2 class="error-message">Error</h2>
            </div>`
          }
        
       
        clearCards();
        clearFields();
    }  
    });
  }
  search()
  
