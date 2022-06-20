import './RickAndMortyComponent.css';


export default function RickAndMortyComponent(props){
    let {id,name,status,species,gender,image} = props;

    return(
        <div>
            <h2 className='h2'>ID: {id}</h2>
            <h1 className='h1'>Name: {name}</h1>
            <h3 className='h3'>Status: {status}</h3>
            <h3 className='h3'>Species: {species}</h3>
            <h3 className='h3'>Gender: {gender}</h3>
            <img className='image' src={image} alt=''/>
        </div>
    )
}