import {useEffect, useState} from "react";
import {getAlbums} from "../../services";
import AlbumComponent from "./AlbumComponent";

export default function AlbumsComponent(){

    let [albums, setAlbums] = useState([]);

    useEffect(()=>{
        getAlbums().then(value => setAlbums([...value]));
    }, []);

    return(
        <div>
            {
                albums.map((value)=><AlbumComponent
                    item={value}/>)
            }
        </div>
    )

}