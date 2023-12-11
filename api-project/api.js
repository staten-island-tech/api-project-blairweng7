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
*/

const URL = `https://collectionapi.metmuseum.org/public/collection/v1/objects`

console.log(fetch(URL))