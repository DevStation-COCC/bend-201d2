'use strict';

// <article id="ryder">
//   <a href="http://www.pawpatrol.com/about/ryder"><img class="avatar" src="img/ryder.png" /></a>
//   <h2>Ryder</h2>
//   <h4>Super Powers</h4>
//   <ol>
//     <li>Sea Patroller</li>
//     <li>Quad</li>
//   </ol>
//   <p>Leader of the Paw Patrol and all around quality dude.</p>
//   <p class="catchPhrase">No pup too small, no job too big!</p>
// </article>


// --------------------------------
// Define all global functions to be used in script
// --------------------------------
var renderCharacter = function(parentElement){
  var article = document.createElement('article');
  article.setAttribute('id', `${this.name.toLowerCase()}`);
  parentElement.appendChild(article);

  //   <a href="http://www.pawpatrol.com/about/this"><img class="avatar" src="img/this.png" /></a>
  var a = document.createElement('a');
  a.setAttribute('href', this.homePageUrl);
  article.appendChild(a);

  var img = document.createElement('img');
  img.setAttribute('class', 'avatar');
  img.setAttribute('src', this.avatarLocation);
  a.appendChild(img);

  var h2 = document.createElement('h2'); // 2. Create element
  h2.textContent = this.name; // 3. Give element content
  article.appendChild(h2); // 4. Append to the document

  var h4 = document.createElement('h4');
  h4.textContent = 'Super Powers';
  article.appendChild(h4);

  var ol = document.createElement('ol');
  article.appendChild(ol);

  for(var i = 0; i < this.superpowers.length; i++){
    var li = document.createElement('li');
    li.textContent = this.superpowers[i];
    ol.appendChild(li);
  }

  var p = document.createElement('p');
  p.textContent = this.description;
  article.appendChild(p);

  p = document.createElement('p');
  p.textContent = this.catchPhrase;
  p.setAttribute('class', 'catchPhrase');
  article.appendChild(p);
};

function PawPatrolCharacter(name, catchPhrase, superpowers, description, homePageUrl, avatarLocation){
  this.name = name;
  this.catchPhrase = catchPhrase;
  this.superpowers = superpowers;
  this.description = description;
  this.homePageUrl = homePageUrl;
  this.avatarLocation = avatarLocation || './img/default.png';

  pawPatrolGang.push(this);

}

PawPatrolCharacter.prototype.shout = function(){
  console.log(this.catchPhrase);
};

PawPatrolCharacter.prototype.render = renderCharacter;

// --------------------------------
// Define all data to be used in script
// --------------------------------

var pawPatrolGang = [];


// --------------------------------
// Run script
// --------------------------------

// 1. Get the parent element to which we are adding content
var pawPatrolListElement = document.getElementById('pawPatrolList');
console.log(pawPatrolListElement);

// var ryderFromConstructorFunction = new PawPatrolCharacter('Ryder', 'go catchphrase!', ['Sea Patroller'], 'Leader of Paw Patrol', 'http://www.pawpatrol.com/about/ryder', './img/ryder.png');

// var chase = new PawPatrolCharacter('Chase', 'I\'m Chase!', ['bark'], 'hello from chase', 'http://www.pawpatrol.com/about/chase');

for(var i = 0; i < pawPatrolGang.length; i++){
  pawPatrolGang[i].render(pawPatrolListElement);
}

// console.log(ryderFromConstructorFunction);
// ryderFromConstructorFunction.shout();
// ryderFromConstructorFunction.render(pawPatrolListElement);

// --------------------------------
// Event Handlers
// --------------------------------

var characterForm = document.getElementById('addCharacterForm');

var addCharacterEventHandler = function(event){
  event.preventDefault();
  console.log(event);

  var target = event.target;

  var name = target.name.value;
  var description = target.description.value;
  var catchphrase = target.catchphrase.value;
  var superpower_1 = target.superpower_1.value;
  var superpower_2 = target.superpower_2.value;
  var superpower_3 = target.superpower_3.value;
  //http://www.pawpatrol.com/about/ryder
  var homePageUrl = `http://www.pawpatrol.com/about/${name.toLowerCase()}`;

  //'./img/ryder.png'
  var avatarLocation = `./img/${name.toLowerCase()}.png`;

  target.reset();

  var character = new PawPatrolCharacter(name, catchphrase, [superpower_1, superpower_2, superpower_3], description, homePageUrl, avatarLocation);
  character.render(document.getElementById('pawPatrolList'));

};

characterForm.addEventListener('submit', addCharacterEventHandler);

// var superDumbAnnoyingEventListener = function(event){
//   event.preventDefault();
//   alert(event.target);
// };
// document.getElementById('dumbForm').addEventListener('submit', superDumbAnnoyingEventListener);

function foo(message){
  console.log(message);
}

function addEventListenerPro(callback){
  callback('Hello');
}

addEventListenerPro(foo);
