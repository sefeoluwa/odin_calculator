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

//default display on calculator
entry.innerHTML = "0"

//function to add numbers 
const sum = function(value1, value2) {
    if(value1 && value2){
        return(value1 + value2)
    } else if(typeof value1 || value2 == undefined){
        return value1;
    } 
    else{
        return value1;
    }
};

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