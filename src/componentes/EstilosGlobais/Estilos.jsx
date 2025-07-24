import { Global } from "@emotion/react"

const estilos = tema => {
    return {
        html: {
            fontFamily: tema.fontFamily,
        },
        body: {
            /*Reset CSS*/
            margin: 0,
            padding: 0,
        }
    }
}

const Estilos = () => {
    return (
        <Global styles={estilos}/>
    )
}

export default Estilos