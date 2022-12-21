export default function CityAndDate({ city, country, dateToday }) {
  return (
    <>
      <h1>
        {city}, {country}
      </h1>
      <h2>{dateToday}</h2>
    </>
  );
}
