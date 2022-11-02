import "./style.scss"
import batataGif from "../../assets/image/batata.gif"
import carregandoGif from "../../assets/image/carregando.webp"
import dancaGif from "../../assets/image/danca.gif"
import johnGif from "../../assets/image/john.gif"
import patoGif from "../../assets/image/pato.gif"

export function TerceiraAula (){

    const components = [
        {name: "Component Card", description: "teste", image: batataGif},
        {name: "Component Card 2", description: "teste 2", image: carregandoGif},
        {name: "Component Card 3", description: "teste 3", image: dancaGif},
        {name: "Component Card 4", description: "teste 4", image: johnGif},
        {name: "Component Card 5", description: "teste 5", image: patoGif}
        
    ]

    return (
        <main>
            <h1>Lista de componentes encontrado em um sistema</h1>
            <ul>

                {
                    components.map(component => (
                        <li>
                            <img src={component.image}/>
                            <h2>{component.name}</h2>
                            <p>{component.description}</p>
                    </li>
                    ))
                }
               
            </ul>
        </main>
    )

}