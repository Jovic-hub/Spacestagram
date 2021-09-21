import React, {useState} from "react"
function like(date) {
  let likes = localStorage.getItem('likes');  
  if (!likes) {
      likes = {};
  }else {
      likes = JSON.parse(likes);
  }
  if (!likes[date]) {
      likes[date] = true;
  }
  localStorage.setItem('likes', JSON.stringify(likes));
}
function dislike(date) {
  let likes = localStorage.getItem('likes');
  if (!likes) {
      return;
  } else {
      likes = JSON.parse(likes);
  }   
  if (likes[date]) {
      delete likes[date];
  } else {
      return;
  }
  localStorage.setItem('likes', JSON.stringify(likes));
}

const Heart = ({date, isActive}) => {
  const [active, notActive] = useState(isActive);
  const heartActive = () => {
    notActive(!active);
    if(!active){
      like(date);
    }else{
      dislike(date);
    }
  };
  return (       
    <div onClick={heartActive}>
        {active ? <div className = "heart" id="red-heart"></div> : <div className = "heart"></div>}
    </div>
  );
};

export default Heart