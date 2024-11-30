import { useState } from "react"
import UseState12a from "./UseState_12a";
import UseState12b from "./UseState_12b";

const HookState12 = () => {

    const [state,setState] = useState(true);

    return(
        <>
            <h3>Exercicio 12 / Conditonal Rendering</h3>
            <button onClick={() => setState(!state)}>Alterar Componente</button>
            {state ? <UseState12a/> : <UseState12b/>}
        </>
    );
};

export default HookState12