import React, { useState, useEffect} from "react"
import axios from "axios";

const FetchingApi=()=>{
    const NASA_KEY = process.env.REACT_APP_API_KEY
    const [images, setImages] = useState([]) 
    const [loading, setLoading] = useState(true);
    let [startdate, setStart] = useState(new Date().toISOString().slice(0, 10))
    let [enddate, setEnd] = useState(new Date())

    let manipulatePosts=()=>{
    console.log(enddate)
    const fetchData = async () => {
        const result = await axios({
        url: NASA_KEY,
        params: {thumbs:'True', start_date:enddate.toISOString().slice(0, 10), end_date:startdate}
        });
        result.data.reverse()
        setImages(result.data);
        console.log(result.data)
        enddate.setDate(enddate.getDate()-10)
        setEnd(enddate)
    };
    fetchData();
    }
}

export default FetchingApi