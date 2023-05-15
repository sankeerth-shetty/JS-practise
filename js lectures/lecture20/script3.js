// Async and Await 

// async : declares a function as one that will contain the await keyword within it.

// await : consumes an asynchronus function that returns a promise with synchronous syntax.


async function getStarWarsData(){
    try{
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error(error);
    }
}
getStarWarsData();