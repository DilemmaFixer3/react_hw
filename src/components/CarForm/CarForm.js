import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";

const CarForm = () => {
    
    const {reset, register, handleSubmit, setValue} = useForm();
    const {carForUpdate, cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
    if(carForUpdate){
        setValue('model', carForUpdate.model)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }
    }, [carForUpdate])

    const submit = async (data)=> {
        if (carForUpdate){
        await dispatch(carActions.updateById({id:carForUpdate.id, car:data}))
        }else {
            await dispatch(carActions.createNewCar({car:data}))
        }
        reset()
    }

    return (
        <div>
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={''} name={'model'} {...register('model')}/>
            <input type='text' placeholder={''} name={'price'} {...register('price')}/>
            <input type='text' placeholder={''} name={'year'} {...register('year')}/>
            <button>{carForUpdate?'Update':'Create'}</button>

        </form>
        </div>
    );
};

export {CarForm};