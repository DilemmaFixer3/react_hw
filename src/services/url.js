import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getTodos=()=> axiosInstance('/todos').then(value => (value.data));

const getAlbums =()=> axiosInstance('/albums').then(value => (value.data));

const getComments =()=> axiosInstance('/comments').then(value => (value.data));

const getPostCurrentComments =(id)=> axiosInstance('/posts/'+id).then(value => (value.data));


export {getTodos, getAlbums, getComments, getPostCurrentComments};