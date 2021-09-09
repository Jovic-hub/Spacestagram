import axios from "axios"

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

axios.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {}
    const configUrl = config.url
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey
      config.params["start_date"] = '2000-04-08'
      config.params["end_date"] = '2000-06-08'
    }
    return config
  },
)

export default {
  getImages() {
    return axios.get(`${nasaEndpoint}planetary/apod`)
  },
}