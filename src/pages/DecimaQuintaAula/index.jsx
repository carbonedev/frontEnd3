import { useState } from "react";

import { DecimaQuintaAulaItem } from "../../components/DecimaQuintaAulaItem";

import './style.scss'


export function DecimaQuintaAula(){
    const [location, setLocation] = useState([])
    const [cep, setCep] = useState("")

    function searchCep(cepReceived){
        
        setCep(cepReceived)

        if(cepReceived.length === 8){

            fetch(`https://viacep.com.br/ws/${cepReceived}/json/`).then(
               response => {
                    response.json().then(
                        address => {
        
                            if(address.erro !== undefined){
                                
                                alert("esse CEP não existe")


                            }else{

                                setLocation([...location, address])

                            }
                        } 
                    )
               } 
            )
        } 
        
    }


    function deleteLocation(currentLocation){

        console.log(currentLocation)

    }

    return(
        <div className="decima-quinta-aula-pages">
            <form>
                <h1>Cadastrar Endereços</h1>

                <div>
                    <label>CEP</label>
                    <input 
                        type="number"
                        value={cep}
                        onChange={event => searchCep(event.target.value)} 
                        />
                </div>

                <button>Cadastrar</button>
            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) => 
                            ( 
                                <DecimaQuintaAulaItem 
                                    key={index}
                                    data={location}
                                    onDeleteLocation={currentLocation => deleteLocation(currentLocation) }
                                /> 
                            )
                        
                    )

                }

            </section>
        </div>
    )
}