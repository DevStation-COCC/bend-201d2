'use strict';

/********************************************************************************
JavaScript Object Notation => JSON
----------------------------------

- Key, value pairs
- Keys must be doublequoted strings
- The values can be:
  - numbers
  - strings
  - objects
  - arrays
  - boolean
  - null
********************************************************************************/
// var person = {
//   name: 'Evelyn',
//   age: 3
// };

// console.log(person); // expected output: object
// console.log(typeof person);

// var personString = JSON.stringify(person);
// console.log(personString);
// console.log(typeof personString);

// var personObject = JSON.parse(personString);
// console.log(personObject);
// console.log(typeof personObject);

var btnDecrement = document.getElementById('btnDecrement');
var btnIncrement = document.getElementById('btnIncrement');
var counterValue = document.getElementById('counterValue');
var btnReset = document.getElementById('btnReset');


var STATE_KEY = 'counterState';

var counterState = {};

function handleIncrement(event){
  event.preventDefault();

  counterState.numberOfIncrement++;
  counterState.counterValue++;

  setStateToLocalStorage();
  renderCounter();
}

btnIncrement.addEventListener('click', handleIncrement);

function handleDecrement(event){
  event.preventDefault();

  counterState.numberOfDecrement++;
  counterState.counterValue--;

  setStateToLocalStorage();
  renderCounter();
}

btnDecrement.addEventListener('click', handleDecrement);

function renderCounter(){
  counterValue.textContent = counterState.counterValue;
  btnDecrement.textContent = `DEC (${counterState.numberOfDecrement})`;
  btnIncrement.textContent = `INC (${counterState.numberOfIncrement})`;
}

function resetState(){
  counterState = {
    counterValue: 0,
    numberOfDecrement: 0,
    numberOfIncrement: 0,
  };

  setStateToLocalStorage();
}

function handleReset(event){
  event.preventDefault();
  resetState();
  renderCounter();
}

btnReset.addEventListener('click', handleReset);

function setStateToLocalStorage(){
  localStorage.setItem(STATE_KEY, JSON.stringify(counterState));
}

(function getStateFromLocalStorage(){
  if(localStorage[STATE_KEY]){
    var rawState = localStorage.getItem(STATE_KEY);
    counterState = JSON.parse(rawState);
    renderCounter();
  }else{
    resetState();
  }
})();
