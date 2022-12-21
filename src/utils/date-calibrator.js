function dateCalibrator() {
  var objToday = new Date(),
    weekday = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = new Array(
      "th",
      "st",
      "nd",
      "rd",
      "th",
      "th",
      "th",
      "th",
      "th",
      "th"
    ),
    dayOfMonth =
      today + (objToday.getDate() < 10)
        ? "0" + objToday.getDate() + domEnder[objToday.getDate()]
        : objToday.getDate() +
          domEnder[
            parseFloat(
              ("" + objToday.getDate()).substr(
                ("" + objToday.getDate()).length - 1
              )
            )
          ],
    months = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ),
    curMonth = months[objToday.getMonth()];
  var today = dayOfWeek + ", " + dayOfMonth + " " + curMonth;
  return today;
}

export { dateCalibrator };
