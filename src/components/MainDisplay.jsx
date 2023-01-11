import { useState, useEffect } from "react";
import { uvIndexCalc } from "../utils/uvi-determinator";
import CityAndDate from "./CityAndDate";
import TemperatureAndImage from "./TemperatureAndImage";
import ExtraInfo from "./ExtraInfo";

export default function MainDisplay({ weatherObj, city, country }) {
  const [dateToday, setDateToday] = useState(null);
  useEffect(() => {
    const time = weatherObj.current.dt + weatherObj.timezone_offset;
    const timeValue = new Date(time * 1000);
    const weekDay = timeValue.getDay();
    const dayOfMonth = timeValue.getDate();
    const month = timeValue.getMonth();

    const weeks = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const thisMonth = months[month];
    const thisDay = weeks[weekDay];

    const date = `${thisDay}, ${dayOfMonth} ${thisMonth}`;

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

  return (
    <>
      <CityAndDate city={city} country={country} dateToday={dateToday} />
      <TemperatureAndImage
        temperature={temperature}
        feelsLike={feelsLike}
        image={image}
        weatherDescription={weatherDescription}
        localTime={localTime}
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
