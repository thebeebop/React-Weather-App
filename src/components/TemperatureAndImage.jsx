export default function TemperatureAndImage({
  temperature,
  image,
  weatherDescription,
}) {
  return (
    <div className="temperature-container">
      <div className="temp-and-description-container">
        <h1 id="temperature">{temperature}</h1>
        <img src={image} alt="Weather description icon." />
      </div>
      <p id="weather-description">{weatherDescription}</p>
    </div>
  );
}
