import { useState, useEffect } from "react"


export function DecimaTerceiraAula(){
    
    const [contador,  setContador]  = useState(0)
    const [userName, setUserName] = useState("")
    const [userNameError, setUserNameError] = useState(true)
    const [errorForm, setErrorForm] = useState(false)

    function adicionar(){
        
        setContador(contador + 1)

    }

    function validar(){

        setErrorForm(!errorForm)

        
        
        
    }
    
    //ValidarNome
    useEffect(
        () => {
            
            if(errorForm){
        
                console.log("existe erro")
        
            } else {
        
                console.log("não existe erro")
            }
        // console.log()

        // if(userName.length > 10){
            
        //     setUserNameError(true)

        // }else{

        //     setUserNameError(false)

        // }

    }, [errorForm])

    return (
        <>
            {/* <h1>Teste</h1>
            <input type="text" value={userName} onChange={event => setUserName(event.target.value)} />
            { userNameError ? (<small>O campo Nome contém mais do que 10 caracteres</small>) : null}
            <p>O valor do contador é {contador}</p>
            <button onClick={() => adicionar()}>Atualizar contador</button> */}
            <button onClick={() => validar()}>Validar</button>
        </>
    )

}
