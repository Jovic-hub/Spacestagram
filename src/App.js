import React, { useState, useEffect } from "react"
import './index.css';
import axios from "axios";
require('dotenv').config()

const App = () => {
  const NASA_KEY = process.env.REACT_APP_API_KEY
  const [images, setImages] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(NASA_KEY);
      result.data.reverse()
      console.log(result)
      setImages(result.data);
    };
    fetchData();
  }, []);

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
