import './Ship.css';


export default function Ship({item}){

    return(<div>
        <div>
            {item.mission_name}<br/>
            {item.launch_year}
        </div>
        <img className='image' src={item.links.mission_patch_small} alt=''/>

    </div>);
}