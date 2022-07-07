import CommentsComponent from "../components/comment/CommentsComponent";
import {Outlet} from "react-router-dom";

export default function CommentsPage (){
    return(
        <div>
            <Outlet/>
            <CommentsComponent/>
            {/*<hr/>*/}


        </div>
    )
}