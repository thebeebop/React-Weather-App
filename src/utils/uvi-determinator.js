function uvIndexCalc(value) {
  let index = "";
  if (value <= 2) {
    index = "Low";
  } else if (value > 2 && value <= 5) {
    index = "Medium";
  } else if (value > 5 && value <= 7) {
    index = "High";
  } else if (value > 7 && value <= 10) {
    index = "Very High";
  } else if (value > 10) {
    index = "Extremely High";
  }

  return index;
}

export { uvIndexCalc };
