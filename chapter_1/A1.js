// Example of lets
let age = 20;
console.log(age); // 20

age = 21;
console.log(age); // 21


// Block Scope Example

if (true) {
    let name = "Hemant";
    console.log(name); // Hemant
}

// console.log(name); // Error: name is not defined




// const in JavaScript

// Example
const PI = 3.14;
console.log(PI); // 3.14
// Reassignment Not Allowed
const PI = 3.14;
PI = 3.14159; // Error
// Block Scope Example
if (true) {
    const name = "Hemant";
    console.log(name); // Hemant
}

// console.log(name); // Error








// var is a variable declaration keyword used to create function-scoped variables.

// Example
var age = 20;
console.log(age); // 20

// Reassignment Allowed
age = 21;
console.log(age); // 21

// Redeclaration Allowed
var age = 25;
console.log(age); // 25

// Function Scope Example
function test() {
    var name = "Hemant";
    console.log(name);
}

test();

// console.log(name); // Error: name is not defined