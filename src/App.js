import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"
import './index.css';

const App = () => {
  const [apod, setApod] = useState({})
  const [startDate, endDate] = useState({})

  const ImageofDay=()=>{
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
      console.log(apodData.data)
    })
  }
  const CloseImageDay=()=>{
    setApod();
  }
  const getDate=()=>{
    console.log(startDate)
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements.startDate)
    console.log(event.target.startDate) 
  }

  return(
    <div className="home">
      <h1 className="nasa-style">NASA API</h1>
      <form onSubmit={handleSubmit}>
      <a className="title-function">Astronomy Picture of the Day:</a>
        <p><button className="button-image-day" onClick={ImageofDay} placeholder="Button">Open</button> <button className="button-close-day" onClick={CloseImageDay} placeholder="Button">Close</button></p>    
      </form>
      <div>
        {apod && (
          <div>
            <header className="title-date">
              {apod.title}
            </header>
            <img src={apod.url} className="image-day" />
            <p>{apod.date}</p>
            <p>{apod.explanation}</p>
          </div>
        )}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <a className="title-function">Search images from a Date Range:</a>
          <p className="date-input">Start Date: <input type ="date" ></input></p>
          <p className="date-input">End Date: <input type ="date"></input></p>
          <button onClick={getDate}>Search</button>
        </form>
      </div>
    </div>
  )
}

export default App
