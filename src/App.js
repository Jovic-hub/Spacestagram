import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"
import './index.css';

const App = () => {
  const [images, setImages] = useState({})
  
  HttpClient.getImages().then(imagesData => {
    setImages(imagesData.data)
    console.log(imagesData.data)
  })
    
  function handleSubmit(event) {
    event.preventDefault(); 
  }

  return(
    <div className="home">
      <h1 className="nasa-style">Spacestagram</h1>
      <div>
      {images.map(() =>(
          <div>
            <header className="title-date">
              {apod.title}
            </header>
            <img src={apod.url} className="image-day"/>
            <p>{apod.date}</p>
            <p>{apod.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
