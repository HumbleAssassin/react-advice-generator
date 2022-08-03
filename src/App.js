import { useState, useEffect } from "react"

import "./App.css"

const url = "https://api.adviceslip.com/advice"

const App = () => {
   const [advice, setAdvice] = useState("")
   const [loaded, setLoaded] = useState(false)

   const fetchAdvice = async (url) => {
      setLoaded(false)
      try {
         const response = await fetch(url)
         const data = await response.json()
         const {
            slip: { advice },
         } = data
         setAdvice(advice)
         setLoaded(true)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchAdvice(url)
   }, [])

   return (
      <div className="app">
         <div className={`card ${loaded && "loaded"}`}>
            <h1 className="heading">{advice}</h1>
            <button onClick={() => fetchAdvice(url)}>Get Random Advice</button>
         </div>
      </div>
   )
}

export default App
