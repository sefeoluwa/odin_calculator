//DOM manipulation selectors
const entry = document.querySelector('#entry-display');
const result = document.querySelector('#result');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');

//function to add numbers 
let toAdd = function(value1, value2){
    return (value1 + value2);
}

//function to subtract numbers
let toSubtract = function(value1, value2){
    return (value1 - value2);
}

//function to multiply numbers
let toMultiply = function(value1, value2){
    return (value1 * value2);
}

//function to divide numbers
let toDivide = function(value1, value2){
    return (value1 / value2);
} 