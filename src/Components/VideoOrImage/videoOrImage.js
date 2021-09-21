const VideoOrImage=({mediaType, url}) =>{
    if(mediaType === "video"){
      return (
        <iframe title="data from api" className="card-image" src={url}></iframe>
      )
    }
    else if(mediaType ==="image"){
      return (
        <img alt="data from api" className="card-image" src={url}/>
      )
    }
} 
export default VideoOrImage