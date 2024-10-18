import SearchBox from "./searchBox.jsx";
import InfoBox from "./infoBox.jsx";
import React, { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({ // Destructure state
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    });
    let updateWeather=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <SearchBox updateWeather={updateWeather}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}