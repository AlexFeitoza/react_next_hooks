import {useState, useEffect } from "react";

const HookEffect17 = ()=> {

    const [valor, setValor] = useState(0) 

    function incremento() {
        setValor(valor  + 1)
    }

    useEffect(()=> {
        console.log('componente iniciado')
    },[])

        return(
            <>
                <h3>UseEffect 01</h3>
                <button onClick={incremento}>Incremento</button>
                <h3>valor:{valor}</h3>
            </>
        )
}

export default HookEffect17