import {Link} from "react-router-dom";

export default function CommentComponent({item}){
    return(
        <div>

            <h4>{item.id} - {item.name}</h4>
            <p>{item.body}</p>
            <span><Link to={item.postId.toString()}>Post for this comment</Link></span>
            <hr/>
        </div>
    )

}