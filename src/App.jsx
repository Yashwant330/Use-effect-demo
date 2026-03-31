import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  let[cityName,setCityName]=useState(null)
 let[weatherData,setWeatherData]=useState(null)

  let getlocation=async(city)=>{
    let res= await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`)
  
  }
  // getlocation('sangli)
 

  let fetchData = async () => {
   let res= await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
   console.log(res )
  }
  
  // fetchData()

  let handleTemperature=()=>{
  getlocation(cityName)
  }

// fetchData()

  return (
    <div>
      <h1>HELLO</h1>
      <input onChange={(e)=>setCityName(e.target.value)} 
      type="text" placeholder='Enter city name' /> <br /><br/>
     
      <button onClick={handleTemperature}>Check Weather</button>
     {weatherData && <h2>Temperature is 33.5°C</h2>}
    </div>
  )
}

export default App
