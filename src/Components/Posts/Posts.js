import React, { useState, useEffect} from "react"
import './index.css';
import axios from "axios";
import load from '../images/loading.gif'
import InfiniteScroll from "react-infinite-scroll-component";
import Heart from '../Heart/like'
import ReadMore from '../readMore/readMore'
import VideoOrImage from '../VideoOrImage/videoOrImage'
import FetchingApi from '../FetchData/fetchData'
require('dotenv').config()

const Posts = () => {
  const NASA_KEY = process.env.REACT_APP_API_KEY
  const [images, setImages] = useState([]) 
  const [loading, setLoading] = useState(true);
  let [startdate, setStart] = useState(new Date().toISOString().slice(0, 10))
  let [enddate, setEnd] = useState(new Date())

  const fetchingData=()=>{
    enddate.setDate(enddate.getDate()-10)
    const fetchData = async () => {
      const result = await axios({
        url: NASA_KEY,
        params: {thumbs:'True', start_date:enddate.toISOString().slice(0, 10), end_date:startdate}
      });
      result.data.reverse()
      setImages(result.data);
      setLoading(false);
      enddate.setDate(enddate.getDate()-10)
      setEnd(enddate)
    };
    fetchData();
  }

  useEffect(() => {
    fetchingData();
  }, []);

  let likes = localStorage.getItem('likes');
  if(!likes){
    likes={};
  }else{
    likes=JSON.parse(likes)
  }
  
  return(
    <div className="home">
      {loading ? <div className="center-loading"><p class ="Load-text">Loading</p><img src={load}/></div>:<div>
        <nav className="fixed-nav-bar">
          <h1 className="brand">Spacestagram</h1>
        </nav>
        <div className="posts">
        <InfiniteScroll
          dataLength={images.length}
          next={FetchingApi.manipulatePosts}
          hasMore={true}
          loader={<img src={load}/>}
        >
        {images.map((item, index) => (
          <div key ={index} className="Instagram-card">
              <div>
                <div className="card-header">
                  <a className="card-name">{item.title}</a>
                </div>
                <VideoOrImage mediaType={item.media_type} url={item.url}/>
                  <div className="like">
                    <Heart date={item.date} isActive={likes[item.date]}/>
                  </div>
                <div className="card-desc">
                <ReadMore ok={item.explanation}/>
                </div>
                <div className="card-date">
                  <a>{item.date}</a>
                </div>              
            </div>
            </div>
          ))}
          </InfiniteScroll>
          </div>
        </div>}
    </div>
  )
}

export default Posts
