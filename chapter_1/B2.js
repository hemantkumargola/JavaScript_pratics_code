// typeof Operator in JavaScript

// The typeof operator is used to determine the data type of a value or variable.

// Syntax
typeof value;

// Examples
console.log(typeof 10); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof
    function() {}); // "function"

// Using Variables
let age = 20;
console.log(typeof age); // "number"

let name = "Hemant";
console.log(typeof name); // "string"

/*
Common Results

Value              Result
--------------------------
10                 "number"
"Hello"            "string"
true               "boolean"
undefined          "undefined"
null               "object"
{}                 "object"
[]                 "object"
function(){}       "function"
*/

// Important Note
console.log(typeof null); // "object"

/*
This is a well-known historical bug in JavaScript
that has been kept for backward compatibility.
*/