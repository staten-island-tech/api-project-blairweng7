//go get Lavian basketball data
//show Lavian basketball data

/* function greet(name) {
const greetPromise = new Promise(function(resolve, reject){
    resolve(`Hello ${name}`);
});
return greetPromise;
}
const Aaron = greet("Aaron")
console.log(Aaron)
//handle the promise
Aaron.then((result)=> {
    console.log(result);
}); 
*/

//REST API
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