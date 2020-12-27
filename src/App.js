import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherData from "./WeatherData";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({loaded: false});
  const [city, setCity] = useState(props.defaultCity);

  
  function showTemperature(response) {

    setWeatherData({
      loaded: true,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      date: new Date(response.data.dt * 1000)

    });

    }
  function search() {
     let apiKey= "c2f91e6b37378ad6a4cd35f075bf9120";
      let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(showTemperature);
  }
  
  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  
  }
   

      if (weatherData.loaded) {

  return (
    <div className="App">

     <form onSubmit={handleSubmit}><div className="row">
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a City"
              onChange={updateCity}
            />{" "}
          </div>
          <div className="col-md-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
        <WeatherData data={weatherData} />
      </form>
     
      <small className="github-link">
        <a
          href="https://github.com/monica88green/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code{" "}
        </a>
        By <a href="https://www.linkedin.com/in/monica-ledesma-9a1792158/" target="_blank" rel="noreferrer"> Monica Ledesma</a>
      </small>
    </div>
  );

} else{
  search();
 return "Loading..";
}}


