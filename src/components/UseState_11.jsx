import { useState } from "react"
import './UseState_11.css'

const HookState11 = () => {

    const [state,setState] = useState(true);
        const class1 = "classUm"
        const class2 = "classDois"
   
    return(

        <>
            <h3>Exercício 11 - Conditional Rendering </h3>
            <button onClick={() => setState(!state)}>Alterar</button>
            <p className={`paragrafo ${state ? class1 : class2}`}>Deus é Fiel! Todo tempo.</p>
        </>
    )
}

export default HookState11