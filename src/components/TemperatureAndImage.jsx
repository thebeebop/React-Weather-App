export default function TemperatureAndImage({
  temperature,
  image,
  weatherDescription,
  feelsLike,
}) {
  return (
    <div className="temperature-container">
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
