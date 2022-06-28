import './Post.css';

export default function Post({item}) {
    return (
        <div>

            <h5 className='h5'>UserId: {item.userId}</h5>
            <h5 className='h5'>Id: {item.id}</h5>
            <h5 className='h5'>Title: {item.title}</h5>
            <p className='p'>Body: {item.body}</p>
            <br/>
        </div>
    );
};