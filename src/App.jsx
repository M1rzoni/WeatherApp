import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1769e69d20183ccd0c32ac3215db1d40&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        if (json.weather && json.weather.length > 0) {
          setIcon(json.weather[0].icon + ".png");
        }
      })
      .catch((error) => console.error(error));
  }, [search], 5000);

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="main-container">
      <Weather icon={icon} inputValue={handleInput} showItems={data} />
    </div>
  );
}

export default App;
