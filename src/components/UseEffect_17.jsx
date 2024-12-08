import {useState, useEffect } from "react";

const HookEffect17 = ()=> {

    const [valor, setValor] = useState(0) 
    const [nome, setNome] = useState('')

    function incremento() {
        setValor(valor  + 1)
    }

    useEffect(()=> {
        console.log('componente iniciado')
    },[])

    useEffect(()=> {
        console.log('iniciar quando o valor for alterado')
    },[valor])

    useEffect(()=> {
        console.log('quando o nome for inserido')
    },[nome])

    useEffect(()=> {
        console.log('quando qualquer um dos dois for clicado')
    },[valor, nome])

    function alterarNome() {
        setNome('Alex Feitoza')
    }

        return(
            <>
                <h3>UseEffect 01</h3>
                <button onClick={incremento}>Incremento</button>
                <h3>valor:{valor}</h3>
                <button onClick={alterarNome}>Alterar Nome</button>
                <p>{nome}</p>
            </>
        )
}

export default HookEffect17