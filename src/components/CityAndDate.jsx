export default function CityAndDate({ city, country, dateToday }) {
  return (
    <div className="city-and-date-container">
      <h1 className="city-name">
        {city}, {country}
      </h1>
      <h2 className="date">{dateToday}</h2>
    </div>
  );
}
