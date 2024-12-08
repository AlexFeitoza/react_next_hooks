import { useState } from "react"
import PropTypes from 'proptypes'

const HookState04a = ({unidades}) => {

    const [valor, setValor] = useState(0)

    function incremento(){
        setValor(v => v + unidades)
    }

    function decremento(){
        setValor(v => v - unidades)
    }

    return (
<>
        <button onClick={incremento}>+</button>
        <h3>Valor: <strong>{valor}</strong></h3>
        <button onClick={decremento}>-</button>
</>

    )
};

HookState04a.propTypes = {
    unidades: PropTypes.number
}

export default HookState04a