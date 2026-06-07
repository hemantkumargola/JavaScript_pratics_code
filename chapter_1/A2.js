// What is Scope in JavaScript?
// Scope determines where a variable can be accessed in a program.

// --------------------
// Global Scope Example
// --------------------
let age = 20;

function showAge() {
    console.log(age); // Accessible here
}

showAge();


// --------------------
// Function Scope Example
// --------------------
function test() {
    var name = "Hemant";
    console.log(name);
}

test();

// console.log(name); // Error: name is not defined


// --------------------
// Block Scope Example
// --------------------
if (true) {
    let city = "Delhi";
    const country = "India";

    console.log(city);
    console.log(country);
}

// console.log(city); // Error
// console.log(country); // Error