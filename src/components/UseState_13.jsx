import { useState } from "react"

const HookState13 = () => {

const [text, setText] = useState("")

    return(
        <>
            <h3>Exercicio - Input Data</h3>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
            <p>O texto inserido é {text}:</p>
            <h4>{text}</h4>
        </>
    )
}

export default HookState13