var arrayA = ["Austin", "shedrach", "Anthonia"]

// for loop
for (let shedrach = 0; shedrach < arrayA.length; shedrach++) {
    console.log(`Good evening ${arrayA[shedrach]}`)
    // console.log("Good Evening" + " " + arrayA[i])
}

// for in 
const person = {fname:"John", lname:"Doe", age:25};


for (let x in person) {
  console.log(`${person[x]} is my detail`); //x becomes each of the object property
}


// using for in for arrays, but for more functional code where the array indexex are important you should use the for each loop below or the for let loop above
var number = [13,14,20,50,]

var zero = 0;
for (let x in number){
    zero+= number[x];
    console.log(zero)
}

// for Each

var m = number.forEach(x => {
    console.log(x * 2)
});

console.log(m)

// map loop: this loop returns a new array stored in Newnumber

var newNumber = number.map( x =>{
    return x + 2
})

console.log(newNumber)

