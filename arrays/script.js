// Array

var array = [
    2, "Shedrack", true, null, 
    {
    name: "Shedrack",
    age: 29
    },
    undefined,
    [
        1,2,3,4,5,6,7,8
    ]
]
var array2 = [2,[3],[4]]

var newArray = array2[2][0]

console.log(newArray)

// to know the length of an array we use the .length

var length = array.length;

console.log(length)

var object = array[4];

console.log(object)



// Array methods

var boy = ["Shedrack", "Austin", "Fabian"];

// tostring
var toString = boy.toString();

console.log(toString)

var girl = ["Anthonia", "Chineye", "Mary"];

// join
var join = girl.join(" ");

console.log(join);

// push
var push = boy.push("Stangard");

console.log(boy);

// pop

var pop = girl.pop();

console.log(pop)

console.log(girl)

// shift

var shift = boy.shift();

console.log(shift)

console.log(boy)

// unshift

var unshift = boy.unshift("Odoh");

console.log(unshift)

console.log(boy)

// changing array elements

girl[0] = "choice"

console.log(girl);

// concatenation of arrays

var boysAndGirls = boy.concat(girl, array);

console.log(boysAndGirls)

var anotherBoy = boy.concat("felix");

console.log(anotherBoy);

// Array splice method
var gender = ["Shedrack", "Austin", "Fabian","Anthonia", "Chineye", "Mary"]

gender.splice(1,2,"Angela","Obianuju");

console.log(gender);

// slice
var maleFemale = gender.slice(1);

console.log(maleFemale)


