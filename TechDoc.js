//how about JS to make a section smaller/wider (nav bar expand/close perhaps?)

var elem = document.getElementById("name");

function person(name, age, color) {
  this.name = name;
}

function printDetail() {
  elem.innerHTML = p1.name;
}

var p1 = new person(prompt("Please Enter Your Name: "), 46, "Blue");

printDetail();

/*var t = setInterval(move, 10);
// starting position
var pos = 0;
//our box element
var box = document.getElementById("box");

function move() {
  if (pos>=150){
    clearInterval(t);
  }
  else {
    pos +=  1;
    box.style.left = pos+"px"; //px = pixels
  }
}*/

//event handler code
function show() {
  alert("Hi there");
}

var btn = document.getElementById("demo");
btn.addEventListener("click", myFunction);
btn.addEventListener("mouseover",show);

function myFunction() {
  alert(Math.random());
  btn.removeEventListener("click", myFunction);
}



function change() {
 var x = document.getElementById("EnterName");
 x.value= x.value.toUpperCase();
}
