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
let numbers = document.querySelectorAll('.numbers');

//sets initial display on the calc screen
    let currentValue = ''
    let operator = ''
    let previousValue = ''

    //function to allow user enter values of up to 7 and write the values on the screen
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
    entry.textContent = ''
    result.textContent = ''
}

clearCalc();

//calculating the values per clicked operator
equals.addEventListener('click', function(){
    calculates();
    result.textContent = '';
    entry.textContent = previousValue; 
    
    if(previousValue.length <= 7){
        entry.textContent  = previousValue;
    } else{
        entry.textContent  = previousValue.slice(0,7) + '...';
    }
})
   

function calculates(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === '+' ){
        previousValue += currentValue
    } else if(operator === '-'){
        previousValue -= currentValue
    } else if(operator === 'x'){
        previousValue *= currentValue
    } else{
        previousValue /= currentValue
    }
    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
   
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}






//delete just one entry on the calculator



del.addEventListener('click', deletes)


function deletes(){
    entry.textContent = entry.textContent.slice(0,-1);
    if(entry.textContent === ''){
        currentValue = '';
        entry.textContent = '';
    }else{
        currentValue;
    }
}

