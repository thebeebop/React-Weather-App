import { useState, useEffect } from "react";
import { dateCalibrator } from "../utils/date-calibrator";
import { uvIndexCalc } from "../utils/uvi-determinator";
import CityAndDate from "./CityAndDate";
import TemperatureAndImage from "./TemperatureAndImage";
import ExtraInfo from "./ExtraInfo";

export default function MainDisplay({ weatherObj, city, country }) {
  const [dateToday, setDateToday] = useState(null);
  useEffect(() => {
    const time = weatherObj.current.dt + weatherObj.timezone_offset;
    const timeValue = new Date(time * 1000);
    const date = dateCalibrator(timeValue);
    setDateToday(date);
  }, [weatherObj]);

  const [temperature, setTemperature] = useState(null);
  useEffect(() => {
    const value = Math.round(weatherObj.current.temp);
    const temp = value + "°";
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

  const [localTime, setLocalTime] = useState(null);

  useEffect(() => {
    const time = weatherObj.current.dt + weatherObj.timezone_offset;
    const timeValue = new Date(time * 1000);
    let hrs = timeValue.getHours();
    let mins = timeValue.getMinutes();

    if (hrs < 10) {
      hrs = "0" + hrs;
    }

    if (mins < 10) {
      mins = "0" + mins;
    }
    setLocalTime(`${hrs}:${mins}`);
  }, [weatherObj]);

  // const [sunRise, setSunRise] = useState(null);
  // useEffect(() => {
  //   const value = weatherObj.current.sunrise;
  //   const sunRiseDate = new Date(value * 1000);
  //   const hour = sunRiseDate.getHours();
  //   const mins = sunRiseDate.getMinutes();
  //   setSunRise(`${hour}:${mins}am`);
  // }, [weatherObj]);

  // const [sunSet, setSunSet] = useState(null);
  // useEffect(() => {
  //   const value = weatherObj.current.sunset;
  //   const sunSetDate = new Date(value * 1000);
  //   const hour = sunSetDate.getHours();
  //   const mins = sunSetDate.getMinutes();
  //   setSunSet(`${hour}:${mins}pm`);
  // }, [weatherObj]);

  return (
    <>
      <CityAndDate city={city} country={country} dateToday={dateToday} />
      <TemperatureAndImage
        temperature={temperature}
        feelsLike={feelsLike}
        image={image}
        weatherDescription={weatherDescription}
        localTime={localTime}
        // sunRise={sunRise}
        // sunSet={sunSet}
      />
      <ExtraInfo
        humidity={humidity}
        feelsLike={feelsLike}
        uvIndex={uvIndex}
        windSpeed={windSpeed}
      />
    </>
  );
}
