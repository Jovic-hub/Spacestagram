import React, { useState, useEffect} from "react"
import './index.css';
import Posts from './Posts'

// USE THIS AFTER
import { Code } from 'react-content-loader'
const MyCodeLoader = () => <Code />

const App = () => {
  return(
    <Posts/>
  )
}

export default App
