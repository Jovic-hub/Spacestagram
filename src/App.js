import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"
import './index.css';

const App = () => {
  const [apod, setApod] = useState({})

  const ImageofDay=()=>{
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="home">
      <h1>NASA API</h1>
      <form onSubmit={handleSubmit}>
        <button className="button-image-day" onClick={ImageofDay} placeholder="Button">Click here to see the Astronomy Picture of the Day</button>
      </form>
      <div>
        {apod && (
          <article>
            <header>
              {apod.title} <i>{apod.date}</i>
            </header>
            <img src={apod.url} />
            <p>{apod.explanation}</p>
          </article>
        )}
      </div>
    </div>
  )
}

export default App
