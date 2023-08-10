// Selecting
const number = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const DELBtn = document.querySelector(".DEL");
const dotBtn = document.querySelector(".dot");
// Assigning initial value
let currentInput = '0';
let previousInput = 0;
let currentOperator = null;



function displaySymbol(operator) {
    display.value = operator;
}

function updateDisplay() {
    display.value = currentInput;
}
  
// Function to handle number button click
function handleNumberClick(number) {
    if (currentInput === '0' || currentInput === '-0') {
      currentInput = String(number); // Convert number to string
    }
    else {
      currentInput = currentInput + String(number); // Convert number to string
    }
    updateDisplay();
}
// Function to handle operation button click
function handleOperatorClick(operator){
    if (currentOperator !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = '0';
    currentOperator = operator;
    isDecimalAllowed = true; //fir se decimal daal skte ho means for second and more numbers
    displaySymbol(currentOperator); 
}

// Logic of Calculator
function calculate() {
    // Convert to numbers for calculations
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
  
    switch (currentOperator) {
      case "+":
        currentInput = (prev + current).toString(); // Convert back to string
        break;
      case "-":
        currentInput = (prev - current).toString(); // Convert back to string
        break;
      case "×":
        currentInput = (prev * current).toString(); // Convert back to string
        break;
      case "÷":
        currentInput = (prev / current).toString(); // Convert back to string
        break;
      case "%":
        currentInput = (prev /100).toString(); // Convert back to string
        break;
    }
  
    currentOperator = null;
    updateDisplay();
}
// Function to handle equalTo button click
function handleEqualsClick() {
    if (currentOperator !== null) {
        calculate();
    }
}
// Function to handle C button click
function handleClearClick() {
    currentInput = '0';
    previousInput = 0;
    currentOperator = null;
    updateDisplay();
}
// Function to handle DEL button click
function handleDELClick() {
    currentInput = currentInput.toString().slice(0,-1)
    if(currentInput == 0){
        currentInput = 0;
    }
    updateDisplay();
}
// Function to handle dot button click
let isDecimalAllowed = true;
function handleDotClick() {
    if (isDecimalAllowed) {
      currentInput = currentInput + '.';
      isDecimalAllowed = false;
    }
    updateDisplay();
  
}

// adding Event Listeners
number.forEach(num => {
    num.addEventListener("click", ()=>{
        handleNumberClick(Number(num.textContent));
        
    })
});
operators.forEach(operator =>{
    operator.addEventListener('click',()=>{
        handleOperatorClick(operator.textContent);
    })
});
equalBtn.addEventListener("click", handleEqualsClick);
clearBtn.addEventListener("click", handleClearClick);
DELBtn.addEventListener("click", handleDELClick);
dotBtn.addEventListener("click", handleDotClick);