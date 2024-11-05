import Quote from "./components/Quote"
import cityImage from "./assets/city-night.jpg"
import TimeZone from "./components/TimeZone"
import React from "react"

function App() { 

  return (
    <main className="container main-page" style={{ '--bg-image': `url(${cityImage})` } as React.CSSProperties}>
      <Quote />

      <TimeZone />
    </main>
  )
}

export default App
