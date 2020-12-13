
import './App.css';

function App() {
  return (
    <div className="App">
      <form><input type="search" placeholder="Enter a City.." />
      <input type="submit" value="Search" />
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
     
    </div>
  );
}

export default App;
