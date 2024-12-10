import { useState } from "react"
import Hookstate_08a from "./UseState_08a";

const Hookstate08 = () => {

    const [cliente, setCliente] = useState({
        nome : '',
        apelido : '',
        cidade : '',
        email : ''
});



    return(
        <>
        <h3>Exercicio 06</h3>
        <ul>
            <li>Nome: {cliente.nome}</li>
            <li>Apelido: {cliente.apelido}</li>
            <li>Cidade: {cliente.cidade}</li>
            <li>Email: {cliente.email}</li>
        </ul>
        <hr />

      <button onClick={() => {
        const c = {...cliente}
        c.nome = 'Alex'
        setCliente(c)
      } }>Nome</button>

      <button onClick={() => {
        const c = {...cliente}
        c.apelido = 'Lelek'
        setCliente(c) 
      }}>Apelido</button>

      <button onClick={() => {
        const c = {...cliente}
        c.cidade = 'Boston - MA'
        setCliente(c)
      }}>Cidade</button>
      <button onClick={() => {
        const c = {...cliente}
        c.email = 'alex@gmail.com'
        setCliente(c)
      }}>Email</button>
        <Hookstate_08a />
    </>
    )
}

 export default Hookstate08   

  
       
    































