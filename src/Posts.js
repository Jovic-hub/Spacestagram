import React, { useState, useEffect} from "react"
import './index.css';
import axios from "axios";
import load from './images/loading.gif'
require('dotenv').config()

const Posts = () => {
  const NASA_KEY = process.env.REACT_APP_API_KEY
  const [images, setImages] = useState([]) 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10)
    var end = new Date();
    end.setDate(end.getDate()-10)
    const fetchData = async () => {
      const result = await axios({
        url: NASA_KEY,
        params: {thumbs:'True', start_date:end.toISOString().slice(0, 10), end_date:today}
      });
      result.data.reverse()
      console.log(result)
      setImages(result.data);
      setLoading(false);
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
      {loading ? <div className="center-loading"><p class ="Load-text">Loading</p><img src={load}/></div>:<div>
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
        </div>}
    </div>
  )
}

export default Posts
