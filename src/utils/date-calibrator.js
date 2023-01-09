function dateCalibrator(date) {
  let objToday = date;

  let weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  let dayOfWeek = weekday[objToday.getDay()];

  let domEnder = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

  let dayOfMonth =
    objToday.getDate() < 10
      ? objToday.getDate() + domEnder[objToday.getDate()]
      : objToday.getDate() +
        domEnder[
          parseFloat(
            ("" + objToday.getDate()).substr(
              ("" + objToday.getDate()).length - 1
            )
          )
        ];

  let months = [
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

  let curMonth = months[objToday.getMonth()];
  let today = dayOfWeek + ", " + dayOfMonth + " " + curMonth;
  return today;
}

export { dateCalibrator };
