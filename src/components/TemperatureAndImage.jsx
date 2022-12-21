export default function TemperatureAndImage({
  temperature,
  image,
  weatherDescription,
}) {
  return (
    <>
      <h1>{temperature}</h1>
      <p>{weatherDescription}</p>
      <img src={image} />
    </>
  );
}
