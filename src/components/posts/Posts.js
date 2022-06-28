import {useEffect} from "react";
import {getPosts} from "../../services";

export default function Posts(props) {

    useEffect(()=>{
        getPosts().then(value=> console.log(value.data));
    }, []);
    return (
        <div>

        </div>
    );
}

