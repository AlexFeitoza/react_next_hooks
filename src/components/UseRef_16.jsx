import { useRef } from "react"

const HookRef16 = () => {

    const valor = useRef(10)

    

    function incremento(){
        valor.current = valor.current + 1
        console.log(valor.current)
    }

    return(
        <>
            <h3>React Hooks - UseRef</h3>
            <p>Valor: {valor.current}</p>
            <button onClick={incremento}>Adicionar</button>
        </>
    )
}

export default HookRef16