const postComment=({obj})=>{
    fetch("https://jsonplaceholder.typicode.com/comments", {
        method: 'POST',
        headers: {"Content-Type": "application/json; charset=UTF-8"},
        body: JSON.stringify(obj),
    })
        .then(response => response.json())
        .then(result => console.log(result));}

export {postComment};