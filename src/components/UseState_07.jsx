import { useState } from "react"
import Hookstate_07a from "./UseState_07a";

const Hookstate07 = () => {

    const [valor, setValor] = useState([0, 0, 0])

    function atualizar(indice, unidade) {
        //buscar o array
        const number = [...valor]

        //alterar o array
        number[indice] =  number[indice] + unidade

        //atualizar o state
        setValor(number)
    }
    
    function decValor1() {atualizar(0,-1) }   
    function incValor1() {atualizar(0, 1) }     
    function decValor2() {atualizar(1,-1) }   
    function incValor2() {atualizar(1, 1) }  
    function decValor3() {atualizar(2,-1) }   
    function incValor3() {atualizar(2, 1) }  
   
    return (
        <>
            <h3>Exercicio 05</h3>
            <h3>Valor1:{valor[0]}</h3>
            <h3>Valor2:{valor[1]}</h3>
            <h3>Valor3:{valor[2]}</h3>
            <Hookstate_07a funcaoDec={decValor1} funcaoInc={incValor1}/>
            <hr />
            <Hookstate_07a funcaoDec={decValor2} funcaoInc={incValor2}/>
            <hr />
            <Hookstate_07a funcaoDec={decValor3} funcaoInc={incValor3}/>
        </>
    )
}

export default Hookstate07


































/*
minha resolução para esse exercicio

const Hookstate07 = () => {

    const number = [0, 1, 2];

    const [valor1, setValor1] = useState(number[0])
    const [valor2, setValor2] = useState(number[1])
    const [valor3, setValor3] = useState(number[2])

    function decremento1() {
        setValor1( v => v - 1)
    }

    function incremento1() {
        setValor1(v => v + 1)
    }
    
    function decremento2() {
        setValor2( v => v - 1)
    }

    function incremento2() {
        setValor2(v => v + 1)
    }

    function decremento3() {
        setValor3( v => v - 1)
    }

    function incremento3() {
        setValor3(v => v + 1)
    }

    return (
        <>
            <h3>Exercicio 05</h3>
            <h3>Valor1: {valor1}</h3>
            <h3>Valor2: {valor2}</h3>
            <h3>Valor3: {valor3}</h3>
            <Hookstate_07a funcaoDec={decremento1} funcaoInc={incremento1} />
            <Hookstate_07a funcaoDec={decremento2} funcaoInc={incremento2} />
            <Hookstate_07a funcaoDec={decremento3} funcaoInc={incremento3} />
        </>
    )
}

export default Hookstate07 */