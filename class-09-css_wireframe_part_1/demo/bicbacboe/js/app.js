'use strict';

var isTurnForX = true;

var container = document.getElementById('container');

container.addEventListener('click', function(event){
  event.preventDefault();
  var target = event.target;

  // source: https://stackoverflow.com/questions/27509/detecting-an-undefined-object-property
  if (typeof something === "undefined") {
    alert("something is undefined");
  }
  var isPlayableCell = target.className.includes('item') && target.textContent !== 'X' && target.textContent !== 'O';

  if(isPlayableCell){
    if(isTurnForX){
      target.textContent = 'X';
    }else{
      target.textContent = 'O';
    }

    isTurnForX = !isTurnForX;
  }


});
