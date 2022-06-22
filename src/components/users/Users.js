import {useEffect, useState} from "react";
import User from "../user/User";


export default function Users(){

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    }, []);

    const choseUser = (item) => {
        setUser(item);
    }

    return (
        <div>

            {user.id && <div>  {user.username}  <br/>
            {user.email}   <br/>
            {user.website} </div>}


            <h2> USERS LIST </h2>

            {users.map((user, index) => <User
                item={user}
                key={index}
                choseUser={choseUser}
            />)}


        </div>
    )
}