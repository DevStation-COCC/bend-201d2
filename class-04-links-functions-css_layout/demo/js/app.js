// Globally scoped variable, usable in all functions delcared in this file
var myName = 'Adam';

function greeter() {
  var message = 'Hello ' + myName;
  console.log(message);
}

greeter();
// console.log(message); // expected output: ERROR

var otherGreeter = function(name) {
  var message = 'Hello ' + name;
  return message; // Returns the VALUE of the variable 'message'
};


// otherGreeter returns a String
var myGreeting = otherGreeter('Ellie');
console.log(myGreeting); // expected output: 'Hello Ellie'

// otherGreeter returns a String which is passed as an argument to console.log
console.log(otherGreeter('Evelyn')); // output: 'Hello Evelyn'

var bar = function(){
  console.log('Hello from bar!');
};

// cb is common shorthand for 'callback'
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function 
function foo(cb) {
  cb();
}

// The FUNCTION is the argument, we do not invoke!
foo(bar);

// Surround the function expression with parentheses to "bundle" the function, then add two more parentheses to the end to INVOKE the function (you can pass arguments into this set of parentheses)
var message = (function(name){
  return 'Hello from an ' + name + '!';
})('IIFE');

// The above IIFE returns a string value, so we print via console.log
console.log(message);

// Flag variable
var isPingTurn = true;

var pingpong = function(){
  if(isPingTurn){
    console.log('ping');
  }else{
    console.log('pong');
  }

  // Use the ! symbol (logical NOT operator) to toggle the boolean value
  isPingTurn = !isPingTurn;
};

var pingpongIntervalId = setInterval(pingpong, 1000);

// Comment out to turn on Ping Pong
// clearInterval stops the callback function from being invoked further
clearInterval(pingpongIntervalId, 5000);
