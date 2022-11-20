import { useEffect, useState } from "react";

export function DecimaQuartaAulaItem(props) {

    const [registerDeleted, setRegisterDeleted] = useState(false)

    function deletarRegistro(){


        props.deleteRegister(props.registerData)

    }

    useEffect(() => {
        
        console.log('O compnente foi construído')

        return () => console.log('O componente foi Destruído')

    },[])

    // useEffect(() => {


    // },[registerDeleted])

    return (
        <li>
            <h1>{props.registerData.title}</h1>
            <button onClick={() => deletarRegistro()}>Deletar</button>
        </li>
    )
}