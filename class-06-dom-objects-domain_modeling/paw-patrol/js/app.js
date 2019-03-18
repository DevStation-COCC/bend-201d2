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

var ryder = {
  name: 'Ryder',
  catchPhrase: 'No pup too small, no job too big!',
  superPowers: ['Sea Patroller', 'Quad'],
  description: 'Leader of the Paw Patrol and all around quality dude.',
  homePageUrl: 'http://www.pawpatrol.com/about/ryder',
  avatarLocation: './img/ryder.png',
  shout: function(){
    console.log(this.catchPhrase);
  }
};

// ryder.shout();
// console.log(ryder.catchPhrase);

// 1. Get the parent element to which we are adding content
var pawPatrolListElement = document.getElementById('pawPatrolList');
console.log(pawPatrolListElement);

var article = document.createElement('article');
article.setAttribute('id', `${ryder.name.toLowerCase()}`);
pawPatrolListElement.appendChild(article);

//   <a href="http://www.pawpatrol.com/about/ryder"><img class="avatar" src="img/ryder.png" /></a>
var a = document.createElement('a');
a.setAttribute('href', ryder.homePageUrl);
article.appendChild(a);

var img = document.createElement('img');
img.setAttribute('class', 'avatar');
img.setAttribute('src', ryder.avatarLocation);
a.appendChild(img);

var h2 = document.createElement('h2'); // 2. Create element
h2.textContent = ryder.name; // 3. Give element content
article.appendChild(h2); // 4. Append to the document

var h4 = document.createElement('h4');
h4.textContent = 'Super Powers';
article.appendChild(h4);

var ol = document.createElement('ol');
article.appendChild(ol);

for(var i = 0; i < ryder.superPowers.length; i++){
  var li = document.createElement('li');
  li.textContent = ryder.superPowers[i];
  ol.appendChild(li);
}

var p = document.createElement('p');
p.textContent = ryder.description;
article.appendChild(p);

p = document.createElement('p');
p.textContent = ryder.catchPhrase;
p.setAttribute('class', 'catchPhrase');
article.appendChild(p);
