import React, { useState } from "react"
import "./App.css"

function App() {
  const [hobbies, setHobbies] = useState([
    "photography",
    "coding",
    "reading",
    "cycling",
    "cooking", 
  ])

  const shuffleHobbies = () => {
      const shuffled = [...hobbies]
    for (let i = shuffled.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setHobbies(shuffled)
  }

  return (
    <div className="container">
      <h1>My Hobbies</h1>
        <button onClick={shuffleHobbies}>shuffle hobbies</button>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

    </div>
  )
}

export default App