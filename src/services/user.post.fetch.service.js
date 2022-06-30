const postUser=({obj})=>{
    fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    headers: {"Content-Type": "application/json; charset=UTF-8"},
    body: JSON.stringify(obj),
})
    .then(response => response.json())
    .then(result => console.log(result));}

export {postUser};