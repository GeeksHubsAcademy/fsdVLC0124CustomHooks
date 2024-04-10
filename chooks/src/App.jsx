
import './App.css'
import { useCounter } from './utils/useful'

function App() {

  const counterL = useCounter()
  const counterR = useCounter()

  return (
    <>
      <div>{counterL.counter}</div>
      <button onClick={()=> counterL.increase()}>+</button>

      <div>{counterR.counter}</div>
      <button onClick={()=> counterR.decrease()}>-</button>
    </>
  )
}

export default App
