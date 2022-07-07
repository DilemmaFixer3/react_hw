import {useEffect, useState} from "react";
import {getTodos} from "../../services";
import TodoComponent from "./TodoComponent";

export default function TodosComponent(){

    let [todos, setTodos] = useState([]);

    useEffect(()=>{
        getTodos().then(value => setTodos([...value]));
    }, []);

    return(
        <div>
            {
                todos.map((value)=><TodoComponent
                item={value}/>)
            }
        </div>
    )

}