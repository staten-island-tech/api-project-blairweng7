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


async function getData(){
    let res = await fetch(
        "https://api.fbi.gov/wanted/v1/list"
    )
    let data = await res.json();
    console.log(data)
}
getData();


Array.forEach(element => {
    
});