
export default function PostComponent({item}){
    return(
        <div>
            <h4>{item.userId}</h4>
            <h4>{item.id}</h4>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <hr/>
            <hr/>
            <hr/>
        </div>
    )
}