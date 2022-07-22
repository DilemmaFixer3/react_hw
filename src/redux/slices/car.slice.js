import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from '@reduxjs/toolkit';

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}) => {
        const {data} = await carService.updateById(id, car);
        return data;
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}) => {
        const {data} = await carService.deleteById(id);
        return id;
    }
);

const createNewCar = createAsyncThunk(
    'carSlice/createNewCar',
    async ({car}) => {
        const {data} = await carService.createNewCar(car);
        return data;
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
    },

    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null;
                state.cars = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const currentCar = state.cars.find(value => value.id === action.payload.id);
                Object.assign(currentCar, action.payload);
                state.carForUpdate = null;
            })
            .addCase(createNewCar.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload);
                state.cars.splice(index, 1);
            })
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    setCarForUpdate,
    updateById,
    deleteCar,
    createNewCar
}

export {carReducer, carActions}