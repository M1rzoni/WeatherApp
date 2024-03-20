import "./style/Weather.css";
import "@fortawesome/fontawesome-free/css/all.css";
import image from "./icons/wind.png";
import feelsLike from "./icons/temperature-feels-like.svg"
import humidity from "./icons/humidity.svg"
import sunset from "./icons/sunset.svg"
import sunrise from "./icons/sunrise.svg"
function Weather(props) {
  return (
    <div className="container">
      <div className="weather-container">
       <h1 style={{marginTop: "20px",fontFamily: "sans-serif"}}>Weather App</h1>
        <input
          onChange={props.inputValue}
          type="text"
          placeholder="Enter a city name"
          id={props.showItems.id}
        />
        <p>{props.showItems.name}</p>
        {props.showItems.weather && <p className="description">{props.showItems.weather[0].description.toUpperCase()}</p>}
        {props.icon && (
          <img
            className="main-image"
            src={`http://openweathermap.org/img/wn/${props.icon}`}
            alt="cloud"
          />
        )}
        {props.showItems.main && <p className="temp">{props.showItems.main.temp.toFixed()}°C</p>}
       <div className="main-div-show">
        <div className="wind-container">
          <img className="wind-image" src={image}></img>
          <p className="windspeed">WindSpeed</p>
          {props.showItems.wind && <p className="wind-speed">{props.showItems.wind.speed.toFixed()} <span className="kmh">km/h</span></p>}
        </div>

        <div className="feelsLike-container">
          <img src={feelsLike}></img>
           <p>Feels like</p>
           {props.showItems.main && <p className="feel">{props.showItems.main.feels_like.toFixed()}°</p>}
          
        </div>

        <div className="humidity-container">
           <img src={humidity}></img>
           <p>Humidity</p>
           {props.showItems.main && <p className="humidity">{props.showItems.main.humidity}<span className="percent"> %</span></p>}
        </div>
        </div> 
        <div className="main-sunset">
        <div className="sunset-container">
        <img src={sunset}></img>
           <p className="sun"> Sunset</p>
           {props.showItems.sys && (<p>{new Date (props.showItems.sys.sunset * 1000).toLocaleTimeString('en-GB')}</p>)}
        </div>
        <div className="sunrise-container">
           <img src={sunrise}></img>
           <p className="sur">Sunrise</p>
           {props.showItems.sys && (<p>{new Date(props.showItems.sys.sunrise * 1000).toLocaleTimeString('en-GB')}</p>)}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;










