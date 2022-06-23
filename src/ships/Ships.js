import {useEffect, useState} from "react";
import Ship from "../ship/Ship";


export default function Ships(){

    let [ships, setShips] = useState([]);

    useEffect(()=>{
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => {
                setShips(value);
            });
    }, []);


    return (
        <div>

            <h2> SHIPS LIST </h2>

            {ships.filter(ship=>ship.launch_year!=="2020").map((ship, index) => <Ship
                item={ship}
                key={index}
            />)}


        </div>
    )
}