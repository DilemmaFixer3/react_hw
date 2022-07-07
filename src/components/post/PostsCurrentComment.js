import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPostCurrentComments} from "../../services";
import PostComponent from "./PostComponent";

export default function PostsCurrentComment(){

    let {postId} = useParams();

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPostCurrentComments(postId).then(value=> setPosts([{...value}]));
    },[postId]);

    return(
        <div>
            {
               posts.map((value)=> <PostComponent item={value}/>)
            }
        </div>
    )
}