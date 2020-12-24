import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherData(props) {
  return (<div className="Weather-Data">
     <h1>{props.data.city}</h1>
      <h2><FormatDate date = {props.data.date} /></h2>
      <ul className="weather-conditions">
        <li>
          Currently: {Math.round(props.data.temperature)} °C | °F
        </li>
        <li className="text-capitalize">
          {props.data.description}
        </li>
        <li>
          Humidity: {props.data.humidity}%
        </li>
        <li>
          Windspeed: {Math.round(props.data.windspeed)} km/h
        </li>
        </ul>
  </div>)
}