import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

import "./searchBox.css"
export default function SearchBox({updateWeather}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="a0f8c32cf722b027bd913f00d4b22f9a";
    let getWeatherInfo=async()=>{
        try{
     let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     if(!response.ok){
        throw new Error("City not found");
     }
     let jsonResponse=await response.json();
     let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
         feelsLike:jsonResponse.main.feels_like,
         weather:jsonResponse.weather[0].description
     }
     console.log(result);
     return result;
    }catch(err){
        throw err;
    }
    };
    
    
    let handleChange=(evt)=>{
        setCity(evt.target.value);
        setError(false);
    }
    let handleSubmit= async (evt)=>{
    
        evt.preventDefault();
        setError(false);
        try{
            let newinfo = await getWeatherInfo();
            updateWeather(newinfo);
            setCity("");
        }catch(err){
            setError(true);
        }
    }
    return(
        <div className="searchbox">
            <form onSubmit={handleSubmit}>
            <h2>Weather App by Taniya Goyat</h2>
            <TextField id="city" label="Enter City" variant="outlined" required value={city} onChange={handleChange}/>
            <br /> <br />
            <Button variant="contained" color="success" type="submit">Search</Button>
            {error && <p style={{ color: 'red' }}>No such place exists!</p>}
            </form>
        </div>
    )
}