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


  const ReadMore = ({ ok }) => {
    const text = ok;
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
  
  const DateToString = ({ date }) => {
    return(
      <div className="card-date">
        <a>{date}</a>
      </div>
    );
  };

  const VideoOrImage=({mediaType, url}) =>{
    if(mediaType === "video"){
      return (
        <iframe className="card-image" src={url}></iframe>
      )
    }
    else if(mediaType ==="image"){
      return (
        <img className="card-image" src={url}/>
      )
    }
  }
  return(
    <div className="home">
      <nav className="fixed-nav-bar">
        <h1 className="brand">Spacestagram</h1>
      </nav>
      <div className="posts">
      {images.map((item, index) => (
        <div key ={index} className="Instagram-card">
            <div>
              <div className="card-header">
                <a className="card-name">{item.title}</a>
              </div>
              <VideoOrImage mediaType={item.media_type} url={item.url}/>
                <div className="like">
                  <Heart/>
                </div>
              <div className="card-desc">
              <ReadMore ok={item.explanation}/>
              </div>
              <DateToString date={item.date}/>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default App
