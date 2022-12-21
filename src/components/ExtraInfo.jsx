export default function ExtraInfo({ humidity, feelsLike, uvIndex, windSpeed }) {
  return (
    <div className="extra-info-container">
      <div className="mini-container">
        <img />
        <p>Humidity:</p>
        <p>{humidity}</p>
      </div>

      <div className="mini-container">
        <img />
        <p>FeelsLike:</p>
        <p>{feelsLike}</p>
      </div>

      <div className="mini-container">
        <img />
        <p>UV Index:</p>
        <p>{uvIndex}</p>
      </div>

      <div className="mini-container">
        <img />
        <p>Windspeed:</p>
        <p>{windSpeed}</p>
      </div>
    </div>
  );
}
