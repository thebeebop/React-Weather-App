import Search from "./components/Search";
import MainDisplay from "./components/MainDisplay";
import { useState, useEffect } from "react";
import { getGeoCodes, getWeatherData } from "./utils/api-caller.js";

function App() {
  const [location, setLocation] = useState("liverpool");
  const [error, setError] = useState(null);
  const [weatherObj, setWeatherObj] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getGeoCodes(location).then((response) => {
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      getWeatherData(lat, lon).then((response) => {
        setWeatherObj(response.data);
        console.log(weatherObj, "<<<weatherObj");
        setIsLoading(false);
      });
    });
  }, [location]);

  if (isLoading) {
    return (
      <div className="App">
        <Search location={location} setLocation={setLocation} />
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Search location={location} setLocation={setLocation} />
        <MainDisplay weatherObj={weatherObj} />
      </div>
    );
  }
}

export default App;
