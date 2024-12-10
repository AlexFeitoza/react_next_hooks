import { useEffect, useState } from "react"

const HookEffect19 = () => {

    const [paises, setPaises] = useState([])

    //buscar os dados da coleção de paises em restcountries
    // https://restcountries.com/v3.1/all

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(resposta => resposta.json())
            .then(dados => setPaises(dados))
    },[])

    return(
        <>
            <h3>UseEffect - 03 </h3>
            <ul>
                {paises.map(pais => <li>{pais.name.common}</li>)}
            </ul>
        </>
    )
}

export default HookEffect19