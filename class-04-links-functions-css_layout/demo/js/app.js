var myName = 'Adam';

function greeter() {
  var message = 'Hello ' + myName;
  console.log(message);
}

greeter();
// console.log(message); // expected output: ERROR

var otherGreeter = function(name) {
  var message = 'Hello ' + name;
  return message;
};


var myGreeting = otherGreeter('Ellie');
console.log(myGreeting); // expected output: 'Hello Ellie'

console.log(otherGreeter('Evelyn')); // output: 'Hello Evelyn'

var bar = function(){
  console.log('Hello from bar!');
};

function foo(cb) {
  cb();
}

foo(bar);

var message = (function(){
  return 'Hello from an IIFE!';
})();

console.log(message);

var isPingTurn = true;

var pingpong = function(){
  if(isPingTurn){
    console.log('ping');
  }else{
    console.log('pong');
  }
  isPingTurn = !isPingTurn;
};

var pingpongIntervalId = setInterval(pingpong, 1000);

// Comment out to turn on Ping Pong
clearInterval(pingpongIntervalId, 5000);
