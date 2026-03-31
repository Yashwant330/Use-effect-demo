import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  let[cityName,setCityName]=useState(null)
 let[weatherData,setWeatherData]=useState(null)
 let [cordinates,setCordinates]=useState(null)

 const[loading,setLoading]=useState(false)

  let getlocation=async(city)=>{
    let res= await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`)
    // console.log(res.data.results[0])
    setCordinates(res.data.results[0])
  }
  // getlocation('sangli)

  let fetchData = async () => {
try{
     let res= await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${cordinates.latitude}&longitude=${cordinates.longitude}&current_weather=true`)
   console.log('res temperature',res);
   setWeatherData(res.data.current_weather.temperature)
  setLoading(false)
}
catch(error){
  console.log('error while fetching temperature',error)

}
finally{
  setLoading(false)
}
  }
  
 useEffect(()=>{if(cordinates){fetchData()}},[cordinates])

  // fetchData()

  let handleTemperature=()=>{
       setWeatherData(null)
  getlocation(cityName)
  setLoading(true)
  }

// fetchData()

  return (
    <div>
      <h1>HELLO</h1>
      <input onChange={(e)=>setCityName(e.target.value)} 
      type="text" placeholder='Enter city name' /> <br /><br/>
     
    
    
      <button onClick={handleTemperature}>Check Weather</button>
    
    {loading && <h2>Loading Temperature...</h2>}
    
    
     {weatherData && <h2>Temperature is {weatherData}°C</h2>}
    </div>
  )
}

export default App
