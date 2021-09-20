import React, { useState, useEffect} from "react"
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
export default VideoOrImage