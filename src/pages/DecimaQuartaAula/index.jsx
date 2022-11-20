import { useState } from "react"
import { DecimaQuartaAulaItem } from "../../components/DecimaQuartaAulaItem"

export function DecimaQuartaAula(){

    const registers = [
        {id: 1, title: "Primeiro regitro"}
    ]

    const [registerListVisible, setRegisterListVisible] = useState(true)

    function deleteRegisterFromList(){



    }

    return(
        <>

        <h1>Lista de Registros</h1>

        <button onClick = {() => setRegisterListVisible(!registerListVisible)}>{`${registerListVisible ? "Ocultar" : "Visualizar"}`}</button>
        {

            registerListVisible ? (

                <ul>

                    {
                        registers.map(
                            register => {
                                return (
                                    <DecimaQuartaAulaItem
                                        key={register.title}
                                        registerData={register}
                                        deleteRegister={regiterReturned => deleteRegisterFromList(regiterReturned)}
                                    />

                                )
                            }
                        )
                    }

                </ul>

            ) : (
                <p>"A lista está oculta"</p>
            )
        }
        </>
    )

}