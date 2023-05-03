const data = fetch("https://jsonplaceholder.typicode.com/posts");
console.log(data);

fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    console.log(response)
});

fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    return response.json();
}).then(data => {
    console.log(data);
})