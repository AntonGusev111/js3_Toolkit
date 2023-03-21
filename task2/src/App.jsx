import { useState } from 'react'
import './App.css'
import InputPhoto from './Components/InputPhoto'
import Avatar from './Components/Avatar'
import PhotoList from './Components/PhotoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="avatar">
        <Avatar />
        <InputPhoto/>
      </div>

      <PhotoList />

    </div>
  )
}

export default App
