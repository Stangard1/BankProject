// conditionals
// if and else and else if

var a = 2;

var b = a > 12;

console.log(b)

if(a > 12){
    console.log("Yes a is less than 12")
}else{
    console.log("No a is not less than 12")
}

// function to tell if a number is even or odd

// var num = prompt("write any number of your choice");

// num = parseInt(num)

// console.log(typeof(num))

//     if(num % 2 === 0){
//         alert("Number inputed is an even number")
//     }else{
//         alert("Number inputed is an odd number")
//     }

var c = 0;

var empty = []

function fizzbuzz(){
    c++

    if(c % 2 === 0){
        if(c % 3 === 0){
            empty.push("fizzbuzz")
            console.log(empty)
        }else{
            empty.push("fizz")
            console.log(empty)
        }
    }else if(c % 3 === 0){
        empty.push("buzz")
        console.log(empty)
    }else{
        empty.push(c)
        console.log(empty)
    }
}

// switch statement


var date = new Date();

var day = date.getDay()

switch (day) {
    case 0:
        alert("Happy Sunday Mr Shedrack")
        break;
    case 1:
        alert("Happy Monday Mr Shedrack")
        break;
    case 2:
        alert("Happy tuesday Mr Shedrack")
        break;
    case 3:
        alert("Happy wednesday Mr Shedrack")
        break;
    case 4:
        alert("Happy Thursday Mr Shedrack")
        break;
    case 5:
        alert("Happy Friday Mr Shedrack")
        break;
    case 6:
        alert("Happy Saturday Mr Shedrack")
        break;
    default:
        alert("there is no day like that")
        break;
}