const person = {
    fName: "Shedarck",
    lName: "Ejike",
    age: 23,
    fullName: function(){
        return this.fName + " " + this.lName
    }
}

// Accessing an value in an object
console.log(person.fName);

// Accessing a method in an object
console.log(person.fullName());