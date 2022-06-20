export default function SimpsonComponent(props){
    let {name, info, pict} = props;

    return(
        <div>
            <h3>{name}</h3>
            <p>{info}</p>
            <img src={pict} alt=''/>
        </div>
    )
}