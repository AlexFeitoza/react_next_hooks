import { useEffect, useRef, useState } from "react"

const HookEffect18 = () => {

    const [valor,setValor] = useState(0)
    const renderInicial = useRef(true)

    function alterar() {
        setValor(valor + 1)
        
    }

    useEffect(()=>{
        
        if(renderInicial.current){
            renderInicial.current = false;
        } else {
            console.log('código executado apenas quando o VALOR é alterado')
        }

       
    },[valor])

    return(
        <>
            <h3>UseEffect - 02</h3>
            <button onClick={alterar}>Alterar</button>
            <p>valor:{valor}</p>
        </>

    )
}

export default HookEffect18