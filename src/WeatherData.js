import React from "react";
import FormatDate from "./FormatDate";
import "./WeatherData.css";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

export default function WeatherData(props) {
  return (<div className="Weather-Data">
     <h1>{props.data.city}</h1>
      <h2><FormatDate date = {props.data.date} /></h2>
      <div className="row">
        <div className="col-6">
          <div className="float-left">
          <WeatherIcon code={props.data.icon} />
          </div>
          <span>
            <Temperature celsius={props.data.temperature} />
      <ul>
        <li className="text-capitalize">
          {props.data.description}
        </li>
        </ul></span>
        </div>
        <div className="col-6">
        <ul>
        <li>
          Humidity: {props.data.humidity}%
        </li>
        <li>
          Windspeed: {Math.round(props.data.windspeed)} km/h
        </li>
        </ul>
        </div>
        </div>
         <Forecast city={props.city}/>
  </div>)
}