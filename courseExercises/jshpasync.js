https://jsbin.com/hebejagugo/

/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
// ...your code below
console.log('I am at the beginning of the code');


setTimeout(function(){console.log("I am in the setTimeout callback function");}, 3000);



console.log('End of Challenge 1');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below

function intervalHello(){
  var myInterval = setInterval(function(){
    setTimeout(function(){clearInterval(myInterval);}, 10000)
    console.log("Interval Hello!");}, 2000)
}
intervalHello();


// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below

function everyXsecsforYsecs(f, x, y){
  var myInterval = setInterval(function(){
    setTimeout(function(){clearInterval(myInterval);}, (1000 * y));
    f();}, (1000 * x))
}

function sayHowdy(){
  console.log("Howdy");
}

everyXsecsforYsecs(sayHowdy, 1, 5)

console.log('End of Challenge 3');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below
function forEach(arr, cb){
  for (let i = 0; i < arr.length; i++){
    console.log(cb(arr[i], i));
  }
}

var delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i){
  setTimeout(function(){
    console.log(`printing element ${i}`);
  }, delayTime);
}

forEach(delays, delayLog);
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below

function changeColor() {
  var getBody = document.getElementsByTagName("body")[0]
  var prop = window.getComputedStyle(getBody).getPropertyValue("background-color");

  if (prop === "rgb(221, 238, 255)") {
      document.body.style.background = "rgb(255,238,221)";
  } else {
      document.body.style.background = "rgb(221,238,255)";
  }
}

document.getElementById("activate").addEventListener("click", function(){
console.log("clicked #1")
});

document.getElementById("color").addEventListener("click", function(){
console.log("clicked #2")
changeColor();
});

// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 3');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(callback(database[id]), 0)
}
// ...your code below
function storeData(data){
   dataReceived = data;
}

ajaxSimulate(1, storeData);
console.log(dataReceived);


console.log('End of Challenge 6');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
// ...your code below


        
function imgGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var result = xmlHttp.responseText;
    result = JSON.parse(result)
    return result.image_url
}

var imgUrl = imgGet("https://rest.bandsintown.com/artists/alexisonfire?app_id=jshp");
console.log(imgUrl)

var elem = document.createElement("img");
elem.setAttribute("src", imgUrl);
// console.log(elem)
document.getElementById("ch2").appendChild(elem);






console.log('End of Challenge 7');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below



function jsonGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var result = xmlHttp.responseText;
    result = JSON.parse(result)
    return result
}

var json = jsonGet("https://rest.bandsintown.com/artists/alexisonfire/events?app_id=jshp&date=all");
console.log(json[0].venue.name)

for (let i = 0; i < json.length; i++){
  var elem = document.createElement("li");
  elem.textContent = json[i].venue.name;
  // console.log(elem)
  document.getElementById("ch3").appendChild(elem);
}





console.log('End of Challenge 8');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below

function jsonGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var result = xmlHttp.responseText;
    result = JSON.parse(result)
    return result
}

var json = jsonGet("https://rest.bandsintown.com/artists/alexisonfire/events?app_id=jshp&date=all");
// console.log(json[0].venue.country)

for (let i = 0; i < json.length; i++){
  if (json[i].venue.country === "United States"){
    var elem = document.createElement("li");
    elem.textContent = json[i].venue.name;
    // console.log(elem)
    document.getElementById("ch4").appendChild(elem);
  }
}






console.log('End of Challenge 9');
// */// (do not alter this line)


