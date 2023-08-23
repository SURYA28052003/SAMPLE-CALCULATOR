const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const squareButton = document.querySelector(".square");
const resultField = document.getElementById("result");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendToResult(button.value));
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => appendToResult(button.value));
});

decimalButton.addEventListener("click", () => {
  if (!resultField.value.includes(".")) {
    appendToResult(".");
  }
});

squareButton.addEventListener("click", calculateSquare);

clearButton.addEventListener("click", clearResult);

equalButton.addEventListener("click", calculateResult, calculateSquare);

function appendToResult(value) {
  resultField.value += value;
}

function clearResult() {
  resultField.value = "";
}

function calculateSquare() {
  const value = parseFloat(resultField.value);
  const square = value * value;
  resultField.value = square;
}

function calculateResult() {
  const expression = resultField.value;
  try {
    const result = eval(expression);
    resultField.value = result;
  } catch (error) {
    resultField.value = "Error";
  }
}
