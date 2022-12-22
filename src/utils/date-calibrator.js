function dateCalibrator() {
  var objToday = new Date(),
    weekday = new Array("Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"),
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
      "Dec"
    ),
    curMonth = months[objToday.getMonth()];
  var today = dayOfWeek + ", " + dayOfMonth + " " + curMonth;
  return today;
}

export { dateCalibrator };
