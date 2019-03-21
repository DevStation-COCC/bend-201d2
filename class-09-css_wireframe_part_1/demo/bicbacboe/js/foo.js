//source: https://raw.githubusercontent.com/JeffLawrence1/cookie-stand/master/js/app.js
//commit 26a69bd50fcf1b239e329cb106eedd65587aa085
'use strict';

// Get the parent element to add content
var salesListElement = document.getElementById('middle');

//rendering table structure, head, body, foot
var renderTable = function(salesListElement){
  var table = document.createElement('table');
  table.setAttribute('id', 'table');
  salesListElement.appendChild(table);
  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  var tableRow = document.createElement('tr');
  tableHead.appendChild(tableRow);

  for(var i = 0; i < 17; i++){
    var th = document.createElement('th');
    var time = '';
    if(i === 0){
      time = '';
    }else if(i === 16){
      time = 'Daily Location Total';
    }else if( i < 7){
      time = i + 5 + 'am: ';
    }else if(i === 7){
      time = 12 + 'pm: ';
    }else{
      time = i - 7 + 'pm: ';
    }
    th.textContent = time;
    tableRow.appendChild(th);
  }
  var tableBody = document.createElement('tbody');
  tableBody.setAttribute('id','body');
  table.appendChild(tableBody);
  var tablefoot = document.createElement('tfoot');
  tablefoot.setAttribute('id', 'foot');
  table.appendChild(tablefoot);
};

// initializing the table
renderTable(salesListElement);

//grabbing the table body location
var tableElement = document.getElementById('body');

//creating and populating the table, but doenst actually render it see bottom of code for that
var addStore = function(tableElement){
  var tr = document.createElement('tr');
  tableElement.appendChild(tr);
  var td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);

  for(var i = 0; i < this.cookieArr.length; i++){

    td = document.createElement('td');
    td.textContent = this.cookieArr[i];
    tr.appendChild(td);
  }
  var sum = 0;
  for(var i = 0; i < 15; i++){
    sum += this.cookieArr[i];
  }
  td = document.createElement('td');
  td.textContent = sum;
  tr.appendChild(td);
};

// Get the parent element to add content
var footElement = document.getElementById('foot');

var renderFoot = function(footElement){
  var tr = document.createElement('tr');
  tr.setAttribute('id','foot1');
  footElement.appendChild(tr);
  var td = document.createElement('td');
  td.textContent = 'Hourly Totals';
  tr.appendChild(td);

  for(var i = 0; i < 15; i++){
    var sum = 0;
    for(var j = 0; j < storeList.length; j++){
      sum += storeList[j].cookieArr[i];

    }
    td = document.createElement('td');
    td.textContent = sum;
    tr.appendChild(td);
  }
};

//constructor function --- make sure to use a capitol letter to start name
var StoreConstructor = function(name, minimumCustomers, maximumCustomers, averageCookieSale){
  this.name = name;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this. averageCookieSale = averageCookieSale;

  storeList.push(this);
};

//Store constructor function to calculate cookies per hour and push in to array
StoreConstructor.prototype.hourlyCookies = function(){
  var spread = this.maximumCustomers - this.minimumCustomers;

  var daily = [];
  for(var i = 0; i < 15; i++){
    var avgCustomers = Math.floor((Math.random() * spread) + this.minimumCustomers);
    var avg = avgCustomers * this.averageCookieSale;
    var temp = Math.ceil(avg);
    daily.push(temp);
  }
  this.cookieArr = daily;
};

//array of stores
var storeList = [];

//Rendering the store function
StoreConstructor.prototype.renderPage = addStore;

//grabbing the form ID from the html
var addStoreNew = document.getElementById('addStore');

var addStoreEventHandler = function(event){
  //prevent page from reloading after every press of submit button
  event.preventDefault();

  //don't need to repeat event everytime
  var target = event.target;
  //the input variables
  var name = target.name.value;
  var minimum = parseInt(target.minimum.value);
  var maximum = parseInt(target.maximum.value);
  var average = parseInt(target.average.value);
  //reseting the form elements after each use
  target.reset();
  //create store
  var newStore = new StoreConstructor(name, minimum, maximum, average);
  //running hourlyCookies function inside each store as its created
  newStore.hourlyCookies();
  //render store to page
  newStore.renderPage(tableElement);

  //variable to grab footer element
  var footsie = (document.getElementById('foot1'));
  //check to see if footer already exists, if it does delete it to reset hourly totals to include new store
  if(footsie){
    footsie.parentNode.removeChild(footsie);
  }
  //render footer
  renderFoot(footElement);
};
addStoreNew.addEventListener('submit', addStoreEventHandler);
