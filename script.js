/* 
My Javascript Calculator

TODO:

# Add a quickCalculate feature/function which will 
allow calculate function calls to be made the 2nd successive 
operation button presses.

# Enable the decimal point button and configure Regex/Conditions to ensure only one decimal place can be added

*/
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

const operatorButtons = [
  button_divide,
  button_multiply,
  button_subtract,
  button_add,
];

const numberButtons = [
  button_0,
  button_1,
  button_2,
  button_3,
  button_4,
  button_5,
  button_6,
  button_7,
  button_8,
  button_9,
];

const button_dot = document.getElementById("button_dot");
const button_equals = document.getElementById("button_equals");
const button_clear = document.getElementById("button_clear");

// Debugging purpose only
// const logz = document.getElementById("logz");

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

const buttonActiveToggle = () => {
  if (calc.operationPressed === true) {
    operatorButtons.forEach((element) => {
      element.disabled === false
        ? (element.disabled = true)
        : (element.disabled = false);
    });
  }
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
  if (result.value != 0) {
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
    calc.operationPressed = true;
    buttonActiveToggle();
  }
};

// Runs calcution logic
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

  if (calc.operationPressed === true) {
    buttonActiveToggle();
  }
  calc.operationPressed = false;
};

// Reset calc object
const clearHandler = () => {
  result.value = 0;
  calc.result = 0;
  calc.operation = null;
  calc.currentNum = null;
  calc.prevNum = null;
  calc.operationPressed = false;
  history.value = "";
  operatorButtons.forEach((button) => {
    button.disabled = false;
  });
};

// Add Event Listeners to all number buttons
let arr_index = 0;
numberButtons.forEach((button) => {
  button.addEventListener("click", numberHandler.bind(this, arr_index));
  arr_index++;
});

// II guess I add the operation buttons to an object of button: button, operation: operation and use a For Of loop
// Not sure if this is overcomplicating it for no reason?
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

button_clear.addEventListener("click", () => {
  if (result.value !== 0) {
    let confirmation = window.confirm("Are you sure you want to clear?");
    if (confirmation === true) {
      clearHandler();
    }
  }
});
button_equals.addEventListener("click", calculateHandler.bind(this, ""));

// // Log output of calc to console, debugging purposes only
// logz.addEventListener("click", () => {
//   console.log(calc);
// });
