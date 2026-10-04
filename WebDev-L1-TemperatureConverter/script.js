const input = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");
const convertBtn = document.getElementById("convertBtn");
const errorBox = document.getElementById("error");
const resultBox = document.getElementById("result");

convertBtn.addEventListener("click", function () {
  errorBox.textContent = "";
  resultBox.innerHTML = "";

  const text = input.value.trim();

  // 1. Check for empty or non-numeric input
  if (text === "" || isNaN(text)) {
    errorBox.textContent = "Please enter a valid number.";
    return;
  }

  const value = parseFloat(text);
  const unit = unitSelect.value;

  // 2. Convert the input to Celsius first
  let celsius;
  if (unit === "C") {
    celsius = value;
  } else if (unit === "F") {
    celsius = (value - 32) * 5 / 9;
  } else {
    celsius = value - 273.15;
  }

  // 3. Check absolute zero
  if (celsius < -273.15) {
    errorBox.textContent = "Temperature is below absolute zero (-273.15°C). Please enter a higher value.";
    return;
  }

  // 4. Convert Celsius to the other units
  const fahrenheit = celsius * 9 / 5 + 32;
  const kelvin = celsius + 273.15;

  // 5. Show all three results
  resultBox.innerHTML =
    "<p>" + celsius.toFixed(2) + " °C</p>" +
    "<p>" + fahrenheit.toFixed(2) + " °F</p>" +
    "<p>" + kelvin.toFixed(2) + " K</p>";
});