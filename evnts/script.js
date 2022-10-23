// Events and event handling in javacript

var ps = document.getElementsByTagName("p");
var but = document.getElementById("but")
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")



var p1 = ps[0];

var p2 = ps[1];


// mouse event on p1 using normal event calling

p1.onmouseleave = function () {
    alert("You're leaving lorem ipsum")
}

// mouse event on p2 using the addEventListener()

p2.addEventListener("mouseenter", function(e){
    console.log(e)
    alert('You just entered p2')
})

// on keydown
document.onkeydown = function(e){
    p2.innerText += e.key;
}

// onclick

but.addEventListener("click", function(){
    p1.style.display = 'none'

    alert("You just removed Lorem")
})

// form events onblur

input1.onblur = function(){
    prompt("is that your name????")
}

// onchange event
input2.onchange = function(){
    console.log("text was changed");
}

input2.onfocus = function(){
    alert("You are required to write your age");
}











