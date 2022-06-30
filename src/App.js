import {useForm} from "react-hook-form";
import {postComment} from "./services";

export default function App() {

  let {register, handleSubmit} = useForm({defaultValues:{postID:'0', ID:0,
      name:'name', email:'email', body:'body'}});

  let submit =(obj)=> {
    console.log(obj);

    postComment(obj);
  };

      return (
      <div >
        <form onSubmit={handleSubmit(submit)}>
          <input type="number" {...register("postID")}/>
          <input type="number" {...register("ID")}/>
          <input type="text" {...register("name")}/>
          <input type="email" {...register("email")}/>
          <input type="text" {...register("body")}/>
          <button>SAVE</button>

        </form>

      </div>
  );
}

