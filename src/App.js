import React, { useState, useEffect } from "react"
import './index.css';
import axios from "axios";
require('dotenv').config()

const App = () => {
  const NASA_KEY = process.env.REACT_APP_API_KEY
  const [images, setImages] = useState([])
  
  useEffect(()=>{
<<<<<<< HEAD
    axios.get(NASA_KEY)
=======
    axios.get('')
>>>>>>> 5c48e42feb43a9d133b170ff0399ac087c8caf61
    .then(res =>{
      res.data.reverse()
      console.log(res)
      setImages(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  })

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  const Heart = () => {
    const [active, notActive] = useState(false);
    const toggleReadMore = () => {
      notActive(!active);
    };
    return (       
      <a onClick={toggleReadMore}>
          {active ? <div className = "heart" id="red-heart"></div> : <div className = "heart"></div>}
      </a>
    );
  };
  
  const DateToString = ({ children }) => {
    const date = children;
    return(
      <div className="card-date">
        <a>{date}</a>
      </div>
    );
  };

  return(
    <div className="home">
      <nav class="fixed-nav-bar">
        <a class="brand">Spacestagram</a>
      </nav>
      <div className="posts">
      {images.map(item => (
      <div className="Instagram-card">
          <div>
            <div className="card-header">
              <a className="card-name">{item.title}</a>
            </div>
            <img className="card-image" src={item.url}/>
              <div className="like">
                <Heart/>
              </div>
            <div className="card-desc">
              <ReadMore>
                {item.explanation}       
              </ReadMore>
            </div>
            <DateToString>
              {item.date}       
            </DateToString>
          </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default App
