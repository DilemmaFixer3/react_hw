import {useForm} from "react-hook-form";
import {postUser} from "./services";

export default function App() {

  let {register, handleSubmit} = useForm({defaultValues:{ID:'0',
      name:'name', username:'username', email:'email',
      address:'address', phone:'phone', website:'website', company:'company'}});

  let submit =(obj)=> {
    console.log(obj);

    postUser(obj);
  };

  return (
    <div >
      <form onSubmit={handleSubmit(submit)}>
        <input type="number" {...register("ID")}/>
        <input type="text" {...register("name")}/>
        <input type="text" {...register("username")}/>
        <input type="email" {...register("email")}/>
        <input type="text" {...register("address")}/>
        <input type="tel" {...register("phone")}/>
        <input type="url" {...register("website")}/>
        <input type="text" {...register("company")}/>
        <button>SAVE</button>

      </form>



    </div>
  );
}

