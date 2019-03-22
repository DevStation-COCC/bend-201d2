'use strict';

console.log(name);
// var name = 'Adam';

console.log(foo); // expected output: undefined
foo = 'foo';
console.log(foo); // expected output: foo
var foo;

main(); // expected output: 'inside bar()!'
// baz(); // expected output: ReferenceError 

// expected output: ReferenceError
try{
  // main();
  // baz();
  foo.someFunction();
}catch(error){
  console.error(error);
}

function main(){
  bar();
}

function bar(){
  console.log('inside bar()!');
  // console.log(myVar); // expected output: ReferenceError
  function baz(){
    var myVar = 'HELLO MYVAR';
    console.log(myVar);
  }
}

// main(); // expected output: 'inside bar()!'

// widget(); // expected output: 'I am a widget!' || undefined || Error
main();

var widget = function(){
  console.log('I am a widget!');
};
