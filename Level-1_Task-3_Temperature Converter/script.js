function convertTemperature() {
    // Get input value and selected units
    var inputValue = parseFloat(document.getElementById("inputvalue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
  
    // Perform the temperature conversion
    var result;
    if (fromUnit === "Celsius") {
      if (toUnit === "Fahrenheit") {
        result = (inputValue * 9/5) + 32;
      } else if (toUnit === "Kelvin") {
        result = inputValue + 273.15;
      } else if (toUnit === "Rakine") {
        result = (inputValue + 273.15) * 9/5;
      } else {
        result = inputValue; // Same units, no conversion needed
      }
    } else if (fromUnit === "Fahrenheit") {
      if (toUnit === "Celsius") {
        result = (inputValue - 32) * 5/9;
      } else if (toUnit === "Kelvin") {
        result = (inputValue + 459.67) * 5/9;
      } else if (toUnit === "Rakine") {
        result = inputValue + 459.67;
      } else {
        result = inputValue; // Same units, no conversion needed
      }
    } else if (fromUnit === "Kelvin") {
      if (toUnit === "Celsius") {
        result = inputValue - 273.15;
      } else if (toUnit === "Fahrenheit") {
        result = (inputValue * 9/5) - 459.67;
      } else if (toUnit === "Rakine") {
        result = inputValue * 9/5;
      } else {
        result = inputValue; // Same units, no conversion needed
      }
    } else if (fromUnit === "Rakine") {
      if (toUnit === "Celsius") {
        result = (inputValue - 491.67) * 5/9;
      } else if (toUnit === "Fahrenheit") {
        result = inputValue - 459.67;
      } else if (toUnit === "Kelvin") {
        result = inputValue * 5/9;
      } else {
        result = inputValue; // Same units, no conversion needed
      }
    } else {
      result = inputValue; // Invalid fromUnit, set result to input value
    }
  
    // Display the result
    var resultElement = document.querySelector(".result");
    resultElement.textContent = "Result: " + result.toFixed(2);
  }
  