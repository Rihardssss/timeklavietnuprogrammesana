import React, { useState } from "react"
import "./App.css"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    const trimmed = task.trim()
    if (trimmed === "") return
    setTasks([...tasks, trimmed])
    setTask("")
  }

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Kas man ir jāizdara"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            <span>{t}</span>
            <button onClick={() => removeTask(i)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App