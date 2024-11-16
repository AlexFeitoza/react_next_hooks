import { useState } from "react"

const HookState = () => {

    const [valor, setValor] = useState(0);

    function diminuir(){
        setValor(v => v - 1)
    }

    function aumentar(){
        setValor(v => v + 1)
    }

    return (
        <>
            <h4>useState</h4>
            <p>Valor:{valor}</p>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
            <p>Lorem, ipsum dolor.</p>
        </>
    )
}

export default HookState