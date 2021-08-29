// Need to work on quickcalculate feature, will allow calculate function
// to be run on subsequent operation button presses

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

const logz = document.getElementById("logz");

const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

let calc = {
  currentNum: null,
  prevNum: null,
  result: 0,
  operation: null,
  operationSelected: false,
  operationText: "",
};

const historyHandler = (textlength = "full") => {
  // History Types
  // textlength = "full"  *** ${calc.prevNum} + ${calc.currentNum} =
  // textlength = "short *** ${calc.prevNum} +

  if (calc.operation) {
    if (calc.result === 0 || textlength === "short") {
      history.value = `${calc.prevNum} ${calc.operationText} `;
    } else if (textlength === "full") {
      history.value = `${calc.prevNum} ${calc.operationText} ${calc.currentNum} =`;
    }
  }
};

// TODO: Configure Regex to ensure only one decimal place can be added.
const numberHandler = (num) => {
  if (result.value === "0" || calc.result !== 0) {
    result.value = num;
  } else {
    result.value = result.value + num;
  }

  calc.currentNum = parseFloat(result.value);
  if (calc.result === 0) {
    historyHandler("short");
  }
};

const operationHandler = (operation) => {
  switch (operation) {
    case ADD:
      calc.operation = ADD;
      calc.operationText = "+";
      break;
    case SUBTRACT:
      calc.operation = SUBTRACT;
      calc.operationText = "-";
      break;
    case DIVIDE:
      calc.operation = DIVIDE;
      calc.operationText = "/";
      break;
    case MULTIPLY:
      calc.operation = MULTIPLY;
      calc.operationText = "x";
      break;
  }

  result.value = 0;
  if (calc.result === 0 && calc.operation) {
    calc.prevNum = calc.currentNum;
    historyHandler("full");
  } else {
    historyHandler("short");
  }
};

const calculateHandler = () => {
  if (calc.operation === ADD) {
    calc.result = calc.prevNum + calc.currentNum;
  } else if (calc.operation === SUBTRACT) {
    calc.result = calc.prevNum - calc.currentNum;
  } else if (calc.operation === DIVIDE) {
    calc.result = calc.prevNum / calc.currentNum;
  } else if (calc.operation === MULTIPLY) {
    calc.result = calc.prevNum * calc.currentNum;
  } else {
    return;
  }

  result.value = calc.result;
  historyHandler("full");
  calc.prevNum = calc.result;
};

const clearHandler = () => {
  result.value = 0;
  calc.result = 0;
  calc.operation = null;
  calc.currentNum = null;
  calc.prevNum = null;
  calc.operationSelected = null;
  history.value = "";
};

button_0.addEventListener("click", numberHandler.bind(this, 0));
button_1.addEventListener("click", numberHandler.bind(this, 1));
button_2.addEventListener("click", numberHandler.bind(this, 2));
button_3.addEventListener("click", numberHandler.bind(this, 3));
button_4.addEventListener("click", numberHandler.bind(this, 4));
button_5.addEventListener("click", numberHandler.bind(this, 5));
button_6.addEventListener("click", numberHandler.bind(this, 6));
button_7.addEventListener("click", numberHandler.bind(this, 7));
button_8.addEventListener("click", numberHandler.bind(this, 8));
button_9.addEventListener("click", numberHandler.bind(this, 9));

button_add.addEventListener("click", operationHandler.bind(this, ADD));
button_subtract.addEventListener(
  "click",
  operationHandler.bind(this, SUBTRACT)
);
button_divide.addEventListener("click", operationHandler.bind(this, DIVIDE));
button_multiply.addEventListener(
  "click",
  operationHandler.bind(this, MULTIPLY)
);

button_clear.addEventListener("click", clearHandler);
button_equals.addEventListener("click", calculateHandler.bind(this, ""));

logz.addEventListener("click", () => {
  console.log(calc);
});
