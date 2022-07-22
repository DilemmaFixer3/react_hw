import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService={
    getAll:()=>axiosService.get(urls.cars),
    updateById:(id, data)=>axiosService.put(`${urls.cars}/${id}`, data),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    createNewCar:(data)=>axiosService.post(urls.cars, data)
}

export {
    carService
}