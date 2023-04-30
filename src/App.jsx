
import { useEffect, useState } from 'react'
import './App.css'
import Books from './Components/Books/Books'
import Header from './Components/Header/Header'

function App() {
  
  // const [count, setCount] = useState(0)

  return (
    <div>
          <Header></Header>

<Books></Books>
    </div>

  )
}

export default App
