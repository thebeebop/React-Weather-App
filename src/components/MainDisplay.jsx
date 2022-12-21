import { useState, useEffect } from "react";
import { dateCalibrator } from "../utils/date-calibrator";
import { uvIndexCalc } from "../utils/uvi-determinator";
import CityAndDate from "./CityAndDate";
export default function MainDisplay({ weatherObj, city, country }) {
  const [dateToday, setDateToday] = useState(null);
  useEffect(() => {
    const date = dateCalibrator();
    setDateToday(date);
  }, [weatherObj]);

  const [temperature, setTemperature] = useState(null);
  useEffect(() => {
    const value = Math.round(weatherObj.current.temp);
    const temp = value + "°C";
    setTemperature(temp);
  }, [weatherObj]);

  const [weatherDescription, setWeatherDescription] = useState(null);
  useEffect(() => {
    const description =
      weatherObj.current.weather[0].main +
      ", " +
      weatherObj.current.weather[0].description;
    setWeatherDescription(description);
  }, [weatherObj]);

  const [image, setImage] = useState(null);
  useEffect(() => {
    const image = weatherObj.current.weather[0].icon;
    const imageURL = `https://openweathermap.org/img/wn/${image}@2x.png`;
    setImage(imageURL);
  }, [weatherObj]);

  const [humidity, setHumidity] = useState(null);
  useEffect(() => {
    const value = weatherObj.current.humidity;
    const humidity = value + "%";
    setHumidity(humidity);
  }, [weatherObj]);

  const [feelsLike, setFeelsLike] = useState(null);
  useEffect(() => {
    const value = Math.round(weatherObj.current.feels_like);
    const feels = value + "°C";
    setFeelsLike(feels);
  }, [weatherObj]);

  const [uvIndex, setUvIndex] = useState(null);
  useEffect(() => {
    const value = weatherObj.current.uvi;
    const index = uvIndexCalc(value);
    setUvIndex(index);
  }, [weatherObj]);

  const [windSpeed, setWindSpeed] = useState(null);
  useEffect(() => {
    const value = weatherObj.current.wind_speed;
    const speed = Math.round((value / 1000) * 3.6 * 100) / 100 + "km/h";
    setWindSpeed(speed);
  }, [weatherObj]);

  return (
    <>
      <CityAndDate city={city} country={country} dateToday={dateToday} />
      {/* <TemperatureAndImage temperature={temperature} image={image} weatherDescription={weatherDescription} />
      <ExtraInfo
        humidity={humidity}
        feelsLike={feelsLike}
        uvIndex={uvIndex}
        windSpeed={windSpeed}
      />  */}
    </>
  );
}
