import axios from "axios";

const apiKey = "b89c2f4cd67785bc98a5ce98f95147b1";
const units = "metric";

function getGeoCodes(location) {
  return axios({
    method: "get",
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=3&appid=${apiKey}`,
    timeout: 3000,
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
}

function getWeatherData(lat, lon) {
  return axios
    .get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=hourly,minutely&appid=${apiKey}`
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}

export { getGeoCodes, getWeatherData };
