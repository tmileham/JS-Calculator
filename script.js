let calc = {
  prevNum: 0,
  currentNum: 0,
  operation: null,
  result: 0,
};

console.log(calc.operation);

let calcInOperation = false;

const result = document.getElementById("result");
const history = document.getElementById("history");

const button_0 = document.getElementById("button_0");
const button_1 = document.getElementById("button_1");
const button_2 = document.getElementById("button_2");
const button_3 = document.getElementById("button_3");
const button_4 = document.getElementById("button_4");
const button_5 = document.getElementById("button_5");
const button_6 = document.getElementById("button_6");
const button_7 = document.getElementById("button_7");
const button_8 = document.getElementById("button_8");
const button_9 = document.getElementById("button_9");

const button_divide = document.getElementById("button_divide");
const button_multiply = document.getElementById("button_multiply");
const button_subtract = document.getElementById("button_subtract");
const button_add = document.getElementById("button_add");

const button_dot = document.getElementById("button_dot");
const button_equals = document.getElementById("button_equals");
const button_clear = document.getElementById("button_clear");

// Returns current result as Float
const retrieveResultAsFloat = () => {
  return parseFloat(result.value);
};

// Updates result history text input
const inputHandler = (num = "") => {
  if (result.value === "0") {
    result.value = num;
  } else {
    result.value = result.value + num;
  }
  currentNumber = retrieveResultAsFloat();
};

// Updates calc history text input
const historyHandler = () => {};

// Resets UI and Calc object
const resetResult = () => {
  calc.prevNum = 0;
  calc.currentNum = 0;
  calc.operation = null;
  calc.result = 0;

  result.value = 0;
  history.value = "";
};

const calculateAdd = () => {
  if (!calc.operation) {
    console.log("Lets do this");

    calc.operation = "ADD";
  }
};

/* const calculateSubtract = (num1, num2) => {
  return num1 - num2;
};
*/

/*
const calculateDivide = (num1, num2) => {
  return num1 / num2;
};
*/

/*
const calculateMultiply = (num1, num2) => {
  return num1 * num2;
};
*/

button_0.addEventListener("click", inputHandler.bind(this, "0"));
button_1.addEventListener("click", inputHandler.bind(this, "1"));
button_2.addEventListener("click", inputHandler.bind(this, "2"));
button_3.addEventListener("click", inputHandler.bind(this, "3"));
button_4.addEventListener("click", inputHandler.bind(this, "4"));
button_5.addEventListener("click", inputHandler.bind(this, "5"));
button_6.addEventListener("click", inputHandler.bind(this, "6"));
button_7.addEventListener("click", inputHandler.bind(this, "7"));
button_8.addEventListener("click", inputHandler.bind(this, "8"));
button_9.addEventListener("click", inputHandler.bind(this, "9"));
button_clear.addEventListener("click", resetResult);
button_add.addEventListener("click", calculateAdd);

//button_divide.addEventListener
//button_multiply.addEventListener
//button_subtract.addEventListener
//
