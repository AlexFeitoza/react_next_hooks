import { useState } from "react"

const Hookstate10 = () => {

  const [tab, setTab] = useState(1)

  return(
    <>
      <h3>Conditional Rendering</h3>
      <select onChange={(e) => setTab(parseInt(e.target.value))}>
        <option value="1">Tab1</option>
        <option value="2">Tab2</option>
        <option value="3">Tab3</option>
      </select>
      { tab === 1 && <p>Tab 1</p>}
      { tab === 2 && <p>Tab 2</p>}
      { tab === 3 && <p>Tab 3</p>}
    </>
  )
}

export default Hookstate10