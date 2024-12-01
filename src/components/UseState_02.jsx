import { useState } from "react"

const HookState = () => {

    const [valor, setValor] = useState(0);

    function diminuir(){
        setValor(v => v - 1)
    }

    function aumentar(){
        setValor(v => v + 1)
    }

    function diminuir_valor(a){
        setValor(v => v - a)
    }

    return (
        <>
            <h4>useState</h4>
            <p>Valor:{valor}</p>

            <button onClick={() => diminuir_valor(10)} >Diminuir + </button>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}

export default HookState