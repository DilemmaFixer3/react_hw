import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers=()=> axiosInstance('/users').then(value => (value.data));


// const getUser = (id)=>{
//     axiosInstance.get('/users/'+id).then(value => value.data);
//
// }

const getUsersPosts =(id)=> axiosInstance('users/'+id+'/posts').then(value => value);

export {getUsers, getUsersPosts};