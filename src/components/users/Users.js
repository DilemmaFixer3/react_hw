import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import User from "../user/User";

export default function Users({getUserId}) {
    let [users, setUsers]=useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            {
                users.map((value)=> <User
                    key={value.id}
                    item={value}
                    getUserId={getUserId}/>)
            }
        </div>
    )
}