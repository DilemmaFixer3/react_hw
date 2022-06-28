import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import User from "../user/User";


export default function Users() {
    let [users, setUsers]=useState([]);

    useEffect(()=>{

        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            {
                users.map((value)=> <User
                    key={value.id}
                    item={value}/>)


                // users.map((value)=> console.log(value))
            }
        </div>
    )
}