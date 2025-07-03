import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("https://vercel-expressapi.vercel.app/")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Error fetching the message:", err))
  }, [])
  return (
    <>
      <p className="read-the-docs">{message ? message : "Loading message...."}</p>
    </>
  )
}

export default App
