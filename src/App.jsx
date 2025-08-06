import { useState } from 'react'
import NavBar from './components/NavBar'
import Posts from './components/Posts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: '#d0d0d0', minHeight: '100vh' }}>
      
      <Posts />
      

    </div>
  )
}

export default App
