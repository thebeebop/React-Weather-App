import MainDisplay from "./components/MainDisplay";
import { useState, useEffect } from "react";
import { getGeoCodes, getWeatherData } from "./utils/api-caller.js";
import errorImg from "./images/Error.png";
import WeeklyWeather from "./components/WeeklyWeather";
import SearchField from "./components/SearchField";
import CircularLoader from "./components/Loader";

const dayTime = "background-day";
const nightTime = "background-night";

function App() {
  const [location, setLocation] = useState("liverpool");
  const [error, setError] = useState(false);
  const [weatherObj, setWeatherObj] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [currTime, setCurrTime] = useState(null);
  const [sunRise, setSunRise] = useState(null);
  const [sunSet, setSunSet] = useState(null);

  //API Request
  useEffect(() => {
    setIsLoading(true);
    getGeoCodes(location)
      .then((response) => {
        const lat = response.data[0].lat;
        const lon = response.data[0].lon;
        setCity(response.data[0].name);
        setCountry(response.data[0].country);
        getWeatherData(lat, lon)
          .then((response) => {
            const time =
              response.data.current.dt + response.data.timezone_offset;
            const timeValue = new Date(time * 1000);
            setCurrTime(timeValue);
            const sunRiseValue =
              response.data.current.sunrise + response.data.timezone_offset;
            const sunRiseDate = new Date(sunRiseValue * 1000);
            setSunRise(sunRiseDate);
            const sunSetValue =
              response.data.current.sunset + response.data.timezone_offset;
            const sunSetDate = new Date(sunSetValue * 1000);
            setSunSet(sunSetDate);
            setWeatherObj(response.data);
            setIsLoading(false);
          })
          .catch((err) => {
            setError(true);
          });
      })
      .catch((err) => {
        setError(true);
      });
  }, [location]);

  function calculateSunTime(currTime, sunRise, sunSet) {
    let value = "";
    //From 00:00am to 00:00am on THAT day
    if (currTime < sunRise && currTime < sunSet) {
      value = nightTime;
    } else if (currTime >= sunRise && currTime < sunSet) {
      value = dayTime;
    } else if (currTime > sunRise && currTime >= sunSet) {
      value = nightTime;
    } else {
      value = "app-loading-background";
    }

    return value;
  }

  if (error) {
    return (
      <div className={calculateSunTime(currTime, sunRise, sunSet)}>
        <div className="app-loading">
          <SearchField setLocation={setLocation} setError={setError} />
          <div className="AppTwo">
            <div id="error">
              <img
                src={errorImg}
                style={{
                  height: "150px",
                  width: "150px",
                  marginBottom: "15px",
                }}
                alt=""
              />
              <p
                style={{ width: "100%", textAlign: "center", fontSize: "20px" }}
              >
                Bad Request. Please, try again.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={calculateSunTime(currTime, sunRise, sunSet)}>
        <div className="app-loading">
          <SearchField
            location={location}
            setLocation={setLocation}
            setError={setError}
          />
          <div className="AppTwo">
            <div className="loader">
              <CircularLoader />
              <p id="loading">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={calculateSunTime(currTime, sunRise, sunSet)}>
        <div className="App">
          <SearchField
            className="search-field"
            setLocation={setLocation}
            setError={setError}
          />
          <MainDisplay weatherObj={weatherObj} city={city} country={country} />
          <WeeklyWeather location={location} weatherObj={weatherObj} />
        </div>
      </div>
    );
  }
}

export default App;
