import { useState } from "react"
import UseState12a from "./UseState_12a";
import UseState12b from "./UseState_12b";

const HookState12 = () => {

    const [state,setState] = useState(true);

    const componentA = () => <UseState12a/>
    const componentB = () => <UseState12b/>

    return(
        <>
            <h3>Exercicio 12 / Conditonal Rendering</h3>
            <button onClick={() => setState(!state)}>Alterar Componente</button>
            {state ? componentA() : componentB()}
            
        </>
    );
};

export default HookState12