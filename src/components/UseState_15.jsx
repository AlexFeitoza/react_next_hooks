import { useState } from "react"

const HookState15 = () => { 

    const [count, setCount] = useState(0)

    // Arrow function 
    const incremento = () => {
        setCount(prevCount => prevCount + 1);
    };

    console.log('Component rendering')

    return(
        <>
            <h3>Exercício 15</h3>
            <p>Result: {count}</p>
            <button onClick={incremento}> Acrecentar</button>
        </>
    )
}

export default HookState15