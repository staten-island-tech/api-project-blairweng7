import { DOMSelectors } from "./dom";
import '../css/style.css';

//get data
const API =  "https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=desc";

async function getData(API){
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
        if (error.message === 'Error');
        errorMessage('Error 404: Failed to Load Resource')
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
      <h5 class ="uid"> ${items.uid}</h5>
    </div>
      `
  );
});
}

  function clearCards() {  
    DOMSelectors.container.innerHTML='';
  }
  function clearFields(){
    DOMSelectors.input.value = '';
    }
  
    function errorMessage(message){
        alert(message);
    }

const URL2 = "https://api.fbi.gov/";
function oneCard(){
  const inputName = DOMSelectors.input.value();
  let URL3 = `https://api.fbi.gov/${inputName}`;
  console.log(URL3)
  addCards(URL3)
}

DOMSelectors.submit.addEventListener("click", function(){
  event.preventDefault();
  clearCards();
  oneCard();
  clearFields();
})

  // function search(){
  //   DOMSelectors.form.addEventListener("submit", async function(event){
  //     event.preventDefault();
  //     const searchInput = DOMSelectors.input.value;
  //     if(searchInput){
  //       const url = `${API} + ${searchInput.toLowerCase()}`;
  //         try{
  //           await getData(url);
  //           clearFields();
  //           addCards(url);
  //         }catch(error){
  //           console.log(error);
  //           if (error.message === "Error");
  //       errorMessage('Person not Found. Please try again.')
  //         }
        
  //       clearCards();
  //   }  
  //   });
  // }
  // search()
  
