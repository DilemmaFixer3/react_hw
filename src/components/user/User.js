export default function User({item, getUserId}) {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={()=>{
                getUserId(item.id);
            }}>POSTS</button>
        </div>
    );
};
