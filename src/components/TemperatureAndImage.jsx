export default function TemperatureAndImage({
  temperature,
  image,
  weatherDescription,
  feelsLike,
  // sunRise,
  // sunSet,
  localTime,
}) {
  return (
    <div className="temperature-container">
      {/* <div className="sun">
        <p style={{ color: "white", marginBottom: "5px" }}>{sunRise}</p>
        <p style={{ color: "white" }}>{sunSet}</p>
      </div> */}
      <p style={{ color: "white", marginBottom: "10px" }}>{localTime}</p>
      <div className="temp-and-description-container">
        <h1 id="temperature">{temperature}</h1>
        <img src={image} alt="Weather description icon." />
      </div>
      <div className="temperatures-container">
        <p id="mini-temp">{temperature} /</p>
        <p id="feels-like-temp">{feelsLike}</p>
      </div>
      <p id="weather-description">{weatherDescription}</p>
    </div>
  );
}
