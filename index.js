function reset() {
  result = undefined;
  operand1 = undefined;
  operand2 = undefined;
  operatorValue = undefined;
  outputValueDiv = "";
}

const numbers = document.querySelectorAll(".number");
const containerElement = document.querySelector("#container")
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector("#clear");
const outputValueDiv = document.querySelector("#output-value");
const keyboardDiv = document.querySelector("#keyboard")
const newElement = document.createElement("p")
// newElement.innerText = "I am new element"
// containerElement.appendChild(newElement)



clearBtn.onclick = resizeTo;

let operand1, operand2, operatorValue, result;

numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    operand2 = operand1;

    if (result) {
      operand2 = result;
    }
    operand1 = number.innerText;
    if (operand1 && operand2 && operatorValue) {
      result = calculateResult(operand2, operand1, operatorValue);
    }
    console.log(result);
  });
});

operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    operatorValue = operator.innerText;
  });
});

function calculateAndShowResult(){
    result = calculateResult(operand2, operand1, operatorValue);
    outputValueDiv.innerText = result;
}

function calculateResult(operand1, operand2, operatorValue) {
  const operand1Number = parseInt(operand1);
  const operand2Number = parseInt(operand2);
  if (operatorValue === "+") {
    result = operand1Number + operand2Number;
  }
  if (operatorValue === "-") {
    result = operand1Number - operand2Number;
  }
  if (operatorValue === "*") {
    result = operand1Number * operand2Number;
  }
  if (operatorValue === "/") {
    result = operand1Number / operand2Number;
  }
  return result;
}

equalBtn.addEventListener("click", calculateAndShowResult);
