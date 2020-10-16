const displayEl = document.querySelector('.total-display');
const functionContainerEl = document.querySelector('.function-container');
const numberEl = document.querySelectorAll('.number');
const resultEl = document.querySelector('#result');
const clearEl = document.querySelector('#clear');
const backspaceEl = document.querySelector('#backspace');
const percentEl = document.querySelector('#percent');
const pawEl = document.querySelector('#paw');

let displayValue = ''
let a = ''
let b = ''
let prev = 0;
let next = '';
let operator = null;
let secondOperator = null;
let total = 0;

// Calculate and return total also display
function operate(a, operator, b) {
    if (operator === 'add'){
       total = add(a, b)
    } else if (operator === 'subtract') {
        total = subtract(a, b)
    } else if (operator === 'divide') {
        total = divide(a, b)
    } else if (operator === 'multiply') {
        total = multiply(a, b)
    }
    displayTotal(total)
    return total
}

function add(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function subtract(a, b){
    return parseFloat(a) - parseFloat(b)
}

function divide(a, b){
    return parseFloat(a) / parseFloat(b) 
}

function multiply(a, b){
    return parseFloat(a) * parseFloat(b)
}

function percent(a){
    return parseFloat(a) / 100
}

//display total to the calculator
function displayTotal(total) {
    if (total && String(total).length > 11) {
        displayEl.innerHTML = String(total).substring(0, 11);
    } else{
        displayEl.innerHTML = total
    }
}
// Display number button pressed.
function display(){
    return displayEl.innerHTML = displayValue;
}

functionContainerEl.addEventListener('click', function(e){
    let className = e.target.className.split(' ')[1];
    let clickedId = e.target.id;

    if (className === 'operator' && !operator) {
        operator = clickedId;
    }

    // When calculating multiple things (before = is pressed), to continue calcualting.
    // calculate than save to prev variable. any number pressed, stored into next variable.
    if (className === 'operator' && operator && (a && b) && !prev) {
        secondOperator = clickedId;
        prev = operate(a, operator, b)
    }
    // operator(*-+/) second click
    else if (className === 'operator' && prev) {
        // from now this will be used untill we hit '='
        prev = operate(prev, secondOperator, next)
        secondOperator = clickedId;
        next = ''
    }
})

// EventListen for number buttons. whne operator variable is empty add to a, otherwise add to b.
for (let i=0; i < numberEl.length; i++){
    numberEl[i].addEventListener('click', function(e){
        if (!prev) {
            // if it is the start of calculation store into a variable
            if (!operator) {
                a += e.target.id
                displayValue = a
                display()
                console.log(`${e.target.id} is added to a`)
            } else {
                b += e.target.id
                displayValue = b
                display()
                console.log(`${e.target.id} is added to b`)
            }
        } else {
            // When operator(*-+/) is clicked sencond time store into next variable
            next += e.target.id
            displayValue = next
            display()
            console.log(`${e.target.id} is added to next`)
        }
    })
}

//clear all, back to original values
clearEl.addEventListener('click', function(){
    displayValue = '0'
    a = ''
    b = ''
    prev = 0;
    next = '';
    operator = null;
    secondOperator = null;
    total = 0;
    display() 
})

// '=' button pressed
resultEl.addEventListener('click', function(){
    if (!prev) {
        operate(a, operator, b)
    } else {
        operate(prev, secondOperator, next)
    }
    console.log(`result is ${total}`)
    //back to original values
    displayValue = ''
    a = ''
    b = ''
    prev = 0;
    operator = null;
    secondOperator = null;
    total = 0;
})

backspaceEl.addEventListener('click', function(){
    if (displayValue.length <= 1) {
        displayValue = '0'
    } else {
        displayValue = displayValue.substring(0, displayValue.length - 1)
    }
    display() 
})

//When percent button is clicked, calculate and rest all.
percentEl.addEventListener('click', function(){
    if (!operator) {
        total = percent(a)
        displayTotal(total)
    } else if (operator && b && !prev) {
        prev = operate(a, operator, b)
        total = percent(prev)
        displayTotal(total)
        displayValue = ''
        a = ''
        b = ''
        prev = 0;
        operator = null;
        secondOperator = null;
        total = 0;
    } else if (prev) {
        prev = operate(prev, secondOperator, next)
        total = percent(total)
        displayTotal(total)
        displayValue = ''
        a = ''
        b = ''
        prev = 0;
        operator = null;
        secondOperator = null;
        total = 0;
    }
})

// Display paw
pawEl.addEventListener('click', function(){
    displayEl.innerHTML = `<i class="fas fa-paw"></i>`
})