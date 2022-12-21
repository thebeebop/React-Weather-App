import axios from "axios";

const apiKey = "b89c2f4cd67785bc98a5ce98f95147b1";
const units = "metric";

function getGeoCodes(location) {
  return axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`
    )
    .then((response) => {
      return response;
    });
}

function getWeatherData(lat, lon) {
  return axios
    .get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=hourly,daily,minutely&appid=${apiKey}`
    )
    .then((response) => {
      return response;
    });
}
export { getGeoCodes, getWeatherData };
