import MainDisplay from "./components/MainDisplay";
import { useState, useEffect } from "react";
import { getGeoCodes, getWeatherData } from "./utils/api-caller.js";
import errorImg from "./images/Error.png";
import WeeklyWeather from "./components/WeeklyWeather";
import SearchField from "./components/SearchField";

function App() {
  const [location, setLocation] = useState("liverpool");
  const [error, setError] = useState(false);
  const [weatherObj, setWeatherObj] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

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

  if (error) {
    return (
      <>
        <SearchField setLocation={setLocation} setError={setError} />
        <div className="AppTwo">
          <div id="error">
            <img
              src={errorImg}
              style={{
                height: "200px",
                width: "200px",
                marginBottom: "15px",
              }}
              alt=""
            />
            <p style={{ width: "100%", textAlign: "center" }}>
              Bad Request. Try gain. Please, ensure that your search requests
              are formatted properly.
            </p>
          </div>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <SearchField
          location={location}
          setLocation={setLocation}
          setError={setError}
        />
        <div className="AppTwo">
          <p id="loading">Loading...</p>
        </div>
      </>
    );
  } else {
    return (
      <div className="App">
        <SearchField
          className="search-field"
          setLocation={setLocation}
          setError={setError}
        />
        <MainDisplay weatherObj={weatherObj} city={city} country={country} />
        <WeeklyWeather location={location} weatherObj={weatherObj} />
      </div>
    );
  }
}

export default App;
