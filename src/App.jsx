import { useState } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Countries></Countries>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
