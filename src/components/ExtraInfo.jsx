import humidityImg from "../images/humidity.png";
import tempImg from "../images/temp.png";
import uvImg from "../images/UV.png";
import windSpeedImg from "../images/windspeed.png";
export default function ExtraInfo({ humidity, feelsLike, uvIndex, windSpeed }) {
  return (
    <div className="extra-info-container">
      <div className="mini-container">
        <img
          src={humidityImg}
          alt=""
          style={{ height: "15px", width: "10px", marginBottom: "10px" }}
        />
        <p className="extra-info-titles">Humidity:</p>
        <p
          style={{
            color: "white",
            fontSize: "12px",
            marginBottom: "5px",
          }}
        >
          {humidity}
        </p>
      </div>

      <div className="mini-container">
        <img
          src={tempImg}
          alt=""
          style={{ height: "20px", width: "10px", marginBottom: "10px" }}
        />
        <p className="extra-info-titles">FeelsLike:</p>
        <p style={{ color: "white", fontSize: "12px", marginBottom: "5px" }}>
          {feelsLike}
        </p>
      </div>

      <div className="mini-container">
        <img
          alt=""
          src={uvImg}
          style={{ height: "10px", width: "20px", marginBottom: "15px" }}
        />
        <p className="extra-info-titles">UV Index:</p>
        <p style={{ color: "white", fontSize: "12px" }}>{uvIndex}</p>
      </div>

      <div className="mini-container">
        <img
          alt=""
          src={windSpeedImg}
          style={{ height: "15px", width: "30px", marginBottom: "5px" }}
        />
        <p className="extra-info-titles">Windspeed:</p>
        <p style={{ color: "white", fontSize: "12px" }}>{windSpeed}</p>
      </div>
    </div>
  );
}
