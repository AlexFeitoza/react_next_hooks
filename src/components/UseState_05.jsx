import { useState } from 'react'
import HookState05a from './UseState_05a'

const Hookstate05 = () => {

    const [valor, setValor] = useState(0)
       
    function atualizarValor(){
        setValor(1000)
    }
    

    return (
        <>
            <h3>Exercício 03</h3>
            <h3><strong>Valor: {valor}</strong></h3>
            <hr />
            <HookState05a funcao={atualizarValor}/>
        </>
    )
}

export default Hookstate05