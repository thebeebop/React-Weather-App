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
          style={{ height: "20px", width: "15px", marginBottom: "10px" }}
        />
        <p className="extra-info-titles" style={{ opacity: 0.8 }}>
          Humidity:
        </p>
        <p
          style={{
            color: "white",
            fontSize: "15px",
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
          style={{ height: "25px", width: "15px", marginBottom: "10px" }}
        />
        <p className="extra-info-titles" style={{ opacity: 0.8 }}>
          FeelsLike:
        </p>
        <p style={{ color: "white", fontSize: "15px", marginBottom: "5px" }}>
          {feelsLike}
        </p>
      </div>

      <div className="mini-container">
        <img
          src={uvImg}
          style={{ height: "15px", width: "25px", marginBottom: "15px" }}
        />
        <p className="extra-info-titles" style={{ opacity: 0.8 }}>
          UV Index:
        </p>
        <p style={{ color: "white", fontSize: "15px" }}>{uvIndex}</p>
      </div>

      <div className="mini-container">
        <img
          src={windSpeedImg}
          style={{ height: "20px", width: "35px", marginBottom: "5px" }}
        />
        <p className="extra-info-titles" style={{ opacity: 0.8 }}>
          Windspeed:
        </p>
        <p style={{ color: "white", fontSize: "15px" }}>{windSpeed}</p>
      </div>
    </div>
  );
}
