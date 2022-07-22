import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, model, price, year}=car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>ID: {id}</div>
            <div>MODEL: {model}</div>
            <div>PRICE: {price}</div>
            <div>YEAR: {year}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>updateCar</button>
            <button onClick={()=>dispatch(carActions.deleteCar(id))}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};