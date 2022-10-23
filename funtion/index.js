//  Making use of user defined functions
 
 var but = document.getElementById("but");
 
 function add(num1,num2) {
    console.log(num1 + num2)
 }

//  calling a function manually
 var ans1 = add(10,20);

 console.log(ans1)

//  calling a function from an event
but.onclick = function () {
    add(40,50);
}

// Making use of the return keyword
function minus(num1,num2){




    return num1 - num2;
}

var ans = minus(12,10);

console.log(ans)

function multiply() {
    console.log(ans * 10);
}

multiply()

// built-in functions

// alert("God is good");

confirm("Is your name Shedrack");

var a = "2.9"

console.log(typeof(a))

// parseInt
a = parseInt(a);

console.log(a)

// parseFloat
var b = "3.5"

console.log(parseFloat(b))

// eval

var c = eval(2*3-5+10/2);

console.log(c);

var BODMAS = "Bracket Of  Division Multiplication Addition And Subtraction "

// isNAN

var d = 5;

console.log(isNaN(d));

// prompt

var name = prompt("what is your name");

console.log(name);












