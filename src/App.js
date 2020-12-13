import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  let apiKey= "c2f91e6b37378ad6a4cd35f075bf9120";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${apiKey}`
  axios.get(apiUrl).then(handleResponse);
  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    alert(event.target.value);
  }

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
      </form>
      <h1>Denver</h1>
      <h2>Last Updated: Sunday, 14:29</h2>
      <ul className="weather-conditions">
        <li>
          Currently: 12 °C | °F
        </li>
        <li>
          Sunny
        </li>
        <li>
          Humidity: 5%
        </li>
        <li>
          Windspeed: 0 km/h
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
}

export default App;
