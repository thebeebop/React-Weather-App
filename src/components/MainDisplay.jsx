export default function MainDisplay({ weatherObj }) {
  const [cityName, setCityName] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [dateToday, setDateToday] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [uvIndex, setUvIndex] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);

  return (
    <>
      <CityAndDate
        cityName={cityName}
        countryName={countryName}
        dateToday={dateToday}
        weatherDescription={weatherDescription}
      />
      <TemperatureAndImage temperature={temperature} image={image} />
      <ExtraInfo
        humidity={humidity}
        feelsLike={feelsLike}
        uvIndex={uvIndex}
        windSpeed={windSpeed}
      />
    </>
  );
}
