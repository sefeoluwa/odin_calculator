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



function valueLog(){
    let possibleValue = document.querySelectorAll('.numbers, .keys');
    possibleValue.forEach(possibleValue => possibleValue.addEventListener('click', (e) =>{
        numSelected = e.target.id;    
        if(entry.innerHTML.length <= 7){
            entry.innerHTML += numSelected;
        }
    }))
}
valueLog();

//clear all entry on the calculator with this function and declaration

clear.addEventListener('click', clearCalc);

function clearCalc(){
    let clearAll = document.getElementById('entry-display');
    clearAll.innerHTML = ""
}

//delete just one entry on the calculator

