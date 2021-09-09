import React, { useState, useEffect } from "react"
import './index.css';
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([])

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=YxrBRvxLaXoTRk8M0ehSLus5lQcXScSy2heOd1ci&start_date=2000-04-08&end_date=2000-06-08')
    .then(res =>{
      console.log(res)
      res.data.reverse()
      setImages(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  })

  return(
    <div className="home">
      <h1 className="nasa-style">Spacestagram</h1>
      <div>
      {images.map(item => (
          <div>
            <header className="title-date">
              {item.title}
            </header>
            <img src={item.url} className="image-day"/>
            <p>{item.date}</p>
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
