import './App.css';
import Users from "./components/users/Users";
import {useState} from "react";
import {getUsersPosts} from "./services";
import Post from "./components/post/Post";

function App() {

  let [posts, setPosts]=useState([]);

  const getUserId =(id)=>{
        getUsersPosts(id).then(({data})=>setPosts([...data]));
  }

  return (
    <div className="App">

        <hr/>
        <h2>Posts of this user</h2>
        {
            // posts.map(value => <div>{value.title}</div>)
            posts.map(value => <Post item={value}/>)
        }
        <hr/>

        <Users getUserId={getUserId}/>

    </div>
  );
}

export default App;
