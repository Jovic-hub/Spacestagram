import axios from "axios";

const NASA_KEY = process.env.REACT_APP_API_KEY
let startdate = new Date().toISOString().slice(0, 10);
let enddate = new Date();
enddate.setDate(enddate.getDate()-1)

const fetchingData=()=>{
    const fetchData = async () => {
        const result =  await axios({
            url: NASA_KEY,
        });
        return result.status
    }
    return fetchData();
}

const sizeData=()=>{
    const size = async () => {
        const result =  await axios({
            url: NASA_KEY,
        });
        return result.data.date;
    }
    return size();
}


module.exports = {
    fetchingData,
    sizeData,
}

