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
    try {
        const response = await fetch(URL);
        console.log(response);
        const data = await response.json();
        console.log(data)
        document.querySelector("h1").textContent == data.content;
        document.querySelector("h2").textContent == data.author;
    } catch (error) {}
}
getData(URL);