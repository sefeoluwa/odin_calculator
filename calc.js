//DOM manipulation selectors
let entry = document.querySelector('#entry-display');
let result = document.querySelector('#result');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');
let operators = document.querySelectorAll('.keys')

 


//function to add numbers 
const sum = function(value1, value2) {
        
    return(value1 + value2)
    
};

//function to subtract numbers
const toSubtract = function(value1, value2) {
    
        return(value1 - value2)

};

//function to multiply numbers
const toMultiply = function(value1, value2) {
    
        return(value1 * value2)
   
};

//function to divide numbers
let toDivide = function(value1, value2){
    
        return(value1 / value2)
    
} 

// function to operate on selected numbers  

function operate(){


}

//function to allow user enter values of up to 7 and write the values on the screen


    let numbers = document.querySelectorAll('.numbers');
    let currentValue = ''
    let operator = ''
    let previousValue = ''

    numbers.forEach((number) => number.addEventListener('click', (e) =>{
      handleNumber(e.target.id)
      entry.textContent =  currentValue; 
        
    }))

    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.id)
        entry.textContent = currentValue;
        result.textContent = previousValue + " " + operator;
         
    }))

    function handleNumber(num){
        if(currentValue.length <= 6){
            currentValue += num;
        }
    }


    function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

//clear all entry on the calculator with this function and declaration

clear.addEventListener('click', clearCalc);

function clearCalc(){
    currentValue = ''
    entry.innerHTML = ''
    result.innerHTML = ''
}

clearCalc();

//delete just one entry on the calculator

del.addEventListener('click', deleteEntry);

function deleteEntry(){
    currentValue.toString().slice(0, -1);
    return currentValue;
}