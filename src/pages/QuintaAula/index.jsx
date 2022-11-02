import "./style.scss"
import carregandoImage from "./../../assets/image/carregando.webp"
import dancaImage from "./../../assets/image/danca.gif"
import patoImage from "./../../assets/image/pato.gif"
import { QuintaAulaItem } from "../../components/QuintaAulaItem"

export function QuintaAula(){

    const componentFinded = 
[

    {
        id:1,
        title: "video Component",
        image: carregandoImage,
        text: "Lorem ipsum"
    },
    {
        id:2,
        title: "gif Component",
        image: patoImage,
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
                            <QuintaAulaItem 
                                key={component.id}
                                data = {component}
                            />  
                        )
                    }
                )

            }

            
        </ul>
        </div>
    ) 

}