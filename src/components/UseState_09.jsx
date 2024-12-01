import { useState } from "react";

const Hookstate09 = () => {

  const [login, setLogin] = useState(false)
  const [btnText, setBtnText] = useState('Login')

  return(
    <>
      <h3>Conditional Redering - Fake Login</h3>
        <button onClick={() => {
          setLogin(!login);
          setBtnText(login ? 'Login' : 'Logout')
        }}>{btnText}</button>
       
        {login &&  <p>Usuario Logado!</p>}
    </>
  )
}

export default Hookstate09