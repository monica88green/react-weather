import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [city, setCity] = useState('null');
  const [temperature, setTemperature] = useState('null');
  const [humidity, setHumidity] = useState('null');
  const [windspeed, setWindspeed] = useState('null');
  const [loaded, setLoaded] = useState(false);
  
  function showTemperature(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWindspeed(response.data.wind.speed);
    }

  function handleSubmit(event) {
    event.preventDefault();
      let apiKey= "c2f91e6b37378ad6a4cd35f075bf9120";
      let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = <form onSubmit={handleSubmit}><div className="row">
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
      </form>

      if (loaded) {

  return (
    <div className="App">
      {form}
      <h1>{city}</h1>
      <h2>Last Updated: Sunday, 14:29</h2>
      <ul className="weather-conditions">
        <li>
          Currently: {Math.round(temperature)} °C | °F
        </li>
        <li>
          Sunny
        </li>
        <li>
          Humidity: {humidity}%
        </li>
        <li>
          Windspeed: {windspeed} km/h
        </li>
      </ul>
      <small className="github-link">
        <a
          href="https://github.com/monica88green/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code{" "}
        </a>
        By Monica Ledesma
      </small>
    </div>
  );
} else{
 return <div>{form}
  <h1>Where would you like to go?</h1></div>
}}

export default App;
