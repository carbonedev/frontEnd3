export function QuintaAulaItem(props){

    console.log(props)

    return (

       
        <li >
            <img src={props.data.image} alt="" />
            <h1>{props.data.title}</h1>
            <p>{props.data.text}</p>
        </li>
    )
}