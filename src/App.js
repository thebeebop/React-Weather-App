import Search from "./components/Search";
import MainDisplay from "./components/MainDisplay";
import { useState, useEffect } from "react";
import { getGeoCodes, getWeatherData } from "./utils/api-caller.js";

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
      <div className="AppTwo">
        <Search
          location={location}
          setLocation={setLocation}
          setError={setError}
        />
        <p id="error">Uh Oh! We couldn't find that one. Please, try again.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="AppTwo">
        <Search
          location={location}
          setLocation={setLocation}
          setError={setError}
        />
        <p id="loading">Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Search
          location={location}
          setLocation={setLocation}
          setError={setError}
        />
        <MainDisplay weatherObj={weatherObj} city={city} country={country} />
      </div>
    );
  }
}

export default App;
