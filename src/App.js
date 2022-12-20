import "./App.css";
import Search from "./components/Search";
import MainDisplay from "./components/MainDisplay";
import { useState, useEffect } from "react";

function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weatherObj, setWeatherObj] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <p>Loading...</p>;
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
