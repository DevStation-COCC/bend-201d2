'use strict';

var obj = new Object();
console.log(obj);

var obj2 = {};
console.log(obj2);

var obj3 = new Object;
console.log(obj3);

function Foo(id){
  this.id = id;
}

var bar = new Foo(42);
console.log(bar);

var fruit = {name: 'Apple'};
var fruit2 = {name: 'Apple'};

console.log(fruit);
console.log(fruit2);
console.log(fruit === fruit2);

var fruit3 = fruit;
console.log(fruit === fruit3);

// Pass by value
function increment(num){
  console.log('INSIDE -Before inc:', num);
  num++;
  console.log('INSIDE - After inc:', num);
}

var x = 42;
console.log('OUTSIDE - Before inc:', x);
increment(x);
console.log('OUTSIDE - After inc:', x);


// Pass by reference
function changeName(obj){
  console.log('INSIDE -Before name change:', obj); //expected: Adam
  obj.name = 'Denae';
  console.log('INSIDE - After name change:', obj); //expected: Denae
}

var y = {name: 'Adam'};
console.log('OUTSIDE - Before name change:', y); //expected: Adam
changeName(y);
console.log('OUTSIDE - After name change:', y); //expected: Denae
