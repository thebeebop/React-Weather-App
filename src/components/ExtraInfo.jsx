export default function ExtraInfo({ humidity, feelsLike, uvIndex, windSpeed }) {
  return (
    <div className="extra-info-container">
      <div className="mini-container">
        <img />
        <p className="extra-info-titles">Humidity:</p>
        <p>{humidity}</p>
      </div>

      <div className="mini-container">
        <img />
        <p className="extra-info-titles">FeelsLike:</p>
        <p>{feelsLike}</p>
      </div>

      <div className="mini-container">
        <img />
        <p className="extra-info-titles">UV Index:</p>
        <p>{uvIndex}</p>
      </div>

      <div className="mini-container">
        <img />
        <p className="extra-info-titles">Windspeed:</p>
        <p>{windSpeed}</p>
      </div>
    </div>
  );
}
