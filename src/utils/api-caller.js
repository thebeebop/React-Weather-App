import axios from "axios";

const apiKey = "b89c2f4cd67785bc98a5ce98f95147b1";
const units = "metric";

function getGeoCodes(location) {
  return axios({
    method: "get",
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`,
    timeout: 3000,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err, "<<<from api-caller");
      return err;
    });
}

function getWeatherData(lat, lon) {
  return axios
    .get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=hourly,daily,minutely&appid=${apiKey}`
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err, "errr");
      return err;
    });
}

export { getGeoCodes, getWeatherData };
