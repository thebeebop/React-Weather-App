import { useState, useEffect } from "react";

export default function WeeklyWeather({ weatherObj }) {
  const [dailyForecastArray, setDailyForecastArray] = useState(null);

  useEffect(() => {
    setDailyForecastArray(weatherObj.daily);
  }, [weatherObj]);

  const giveDates = (dayOfWeek, dayOfMonth, month) => {
    const dateToday = new Date();
    const weekdayToday = dateToday.getDay();
    const dateOfMonthToday = dateToday.getDate();

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let thisWeekDay;
    if (dayOfWeek === weekdayToday && dateOfMonthToday === dayOfMonth) {
      thisWeekDay = "Today";
    } else {
      thisWeekDay = weekdays[dayOfWeek];
    }

    return `${thisWeekDay}`;
    // return `${thisWeekDay}, ${dayOfMonth} ${thisMonth}`;
  };

  if (!dailyForecastArray) {
    return <p>Loading...</p>;
  } else {
    return (
      <div id="weekly-list-container">
        <ul className="list-of-days">
          {dailyForecastArray.map((day, i) => {
            const fullDate = new Date(day.dt * 1000);
            const dayOfTheMonth = fullDate.getDate();
            const dayOfTheWeek = fullDate.getDay();
            const month = fullDate.getMonth();
            const temp = Math.round(day.temp.day) + "°C";
            const weatherDescription = day.weather[0].main;
            const img = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            return (
              <li key={i}>
                <div className="list-block">
                  <p className="block-title">
                    {giveDates(dayOfTheWeek, dayOfTheMonth, month)}
                  </p>
                  <div className="daily-containers" style={{ color: "white" }}>
                    <p>{temp}</p>
                    <img src={img} className="block-icons" alt="" />
                  </div>
                  <p className="block-weather-description">
                    {weatherDescription}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
