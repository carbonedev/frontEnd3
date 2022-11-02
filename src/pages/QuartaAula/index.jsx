import "./style.scss"
import carregandoImage from "./../../assets/image/carregando.webp"
import dancaImage from "./../../assets/image/danca.gif"

export function QuartaAula(){
const componentFinded = 
[

    {
        id:1,
        title: "video Component",
        image: carregandoImage,
        text: "Lorem ipsum"
    },
    {
        id:3,
        title: "imput Component",
        image: dancaImage,
        text: "Lorem ipsum"
    }
    
]
    

    return(
        <div className="quarta-aula-component">
        <h1 className="main-title">Componentes identificados</h1>
        <ul className="components-finded">

            {
                componentFinded.map(
                    component => {
                        return (
                            <li key={component.id}>
                                <img src={component.image} alt="" />
                                <h1>{component.title}</h1>
                                <p>{component.text}</p>
                            </li>
                        )
                    }
                )

            }

            
        </ul>
        </div>
    ) 
}