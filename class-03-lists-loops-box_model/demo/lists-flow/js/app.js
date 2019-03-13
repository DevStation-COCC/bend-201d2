'use strict';

var userPoints = 0;

var userName = prompt('What is your name?');
console.log(userName);
while(!userName){
  alert('no really, I need a name');
  userName = prompt('What is your name?');
}

var answer = prompt('');
if(answer === 'yes'){
  userPoints++;
}
// do{
//   var userName = prompt('What is your name?');
//   if(!userName){
//     alert();
//   }
// }while(!userName);

// if(userName !== 'Adam'){
//   alert('Awww, too bad. Adam is a great name.');
// }

var favoriteFoods = [];

favoriteFoods.push('Pizza');
favoriteFoods.push('Spaghetti');
favoriteFoods.push(42);
favoriteFoods.push(['hello', 'world']);

// for(var i = favoriteFoods.length - 1; i > -1; i--){
//   console.log(favoriteFoods[i]);
// }

for(var i = 0; i < favoriteFoods.length; i++){
  console.log(favoriteFoods[i]);
}
