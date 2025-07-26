const tempInput = document.getElementById("tempInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

function checkFields() {
  convertBtn.disabled = !(tempInput.value && fromUnit.value && toUnit.value);
}

tempInput.addEventListener("input", checkFields);
fromUnit.addEventListener("change", checkFields);
toUnit.addEventListener("change", checkFields);

function convertTemperature(value, from, to) {
  let tempC;
  if (from === "C") tempC = value;
  if (from === "F") tempC = ((value - 32) * 5) / 9;
  if (from === "K") tempC = value - 273.15;

  let finalTemp;
  if (to === "C") finalTemp = tempC;
  if (to === "F") finalTemp = (tempC * 9) / 5 + 32;
  if (to === "K") finalTemp = tempC + 273.15;

  return finalTemp.toFixed(2);
}

convertBtn.addEventListener("click", () => {
  const value = parseFloat(tempInput.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  if (from === to) {
    result.textContent = `Same unit selected: ${value}°${to}`;
  } else {
    const converted = convertTemperature(value, from, to);
    result.textContent = `Result: ${converted}°${to}`;
  }
});