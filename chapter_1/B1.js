/*
=========================================
      JavaScript Data Types Notes
=========================================
*/

/*
What is a Data Type?

A data type defines the kind of value a variable can store.
*/

// Examples
let age = 20; // Number
let name = "Hemant"; // String
let isStudent = true; // Boolean

/*
=========================================
      JavaScript Data Types
=========================================

JavaScript Data Types are divided into:

1. Primitive Data Types
2. Non-Primitive Data Types
*/


/*
=========================================
      1. Primitive Data Types
=========================================

Primitive types store a single value.
They are immutable.
*/


// 1. Number
let num = 100;
let price = 99.99;

// 2. String
let firstName = "Hemant";

// 3. Boolean
let isLoggedIn = true;

// 4. Undefined
let x;

// 5. Null
let y = null;

// 6. BigInt
// let bigNumber = 123456789012345678901234567890 n;

// 7. Symbol
let id = Symbol("id");


/*
Primitive Data Types:

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol
*/


/*
=========================================
      2. Non-Primitive Data Types
=========================================

Non-primitive types store collections of data.

They are stored by reference.

Main non-primitive type:
Object
*/


// Object
let person = {
    name: "Hemant",
    age: 20,
    city: "Mathura"
};


// Array
let numbers = [10, 20, 30, 40];


// Function
function greet() {
    console.log("Hello Hemant");
}


/*
Non-Primitive Types:

1. Object
2. Array
3. Function

(Note:
Array and Function are special types of Objects.)
*/


/*
=========================================
      typeof Operator
=========================================

Used to check the data type.
*/

console.log(typeof 10); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (JavaScript bug)
// console.log(typeof 123 n); // bigint
console.log(typeof Symbol()); // symbol
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof
    function() {}); // function


/*
=========================================
      Primitive vs Non-Primitive
=========================================

Primitive:
- Stores single value
- Stored by value
- Immutable

Examples:
Number
String
Boolean
Undefined
Null
BigInt
Symbol

-----------------------------------------

Non-Primitive:
- Stores multiple values
- Stored by reference
- Mutable

Examples:
Object
Array
Function
*/


/*
=========================================
      Stored by Value Example
=========================================
*/

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

/*
a and b are independent.
Primitive values are copied.
*/


/*
=========================================
      Stored by Reference Example
=========================================
*/

let obj1 = {
    name: "Hemant"
};

let obj2 = obj1;

obj2.name = "Gola";

console.log(obj1.name); // Gola
console.log(obj2.name); // Gola

/*
Both variables point to the same object.
*/


/*
=========================================
      Interview Questions
=========================================
*/

/*
Q1. How many data types are there in JavaScript?

Answer:
8 Data Types

7 Primitive
1 Non-Primitive
*/


/*
Q2. Name all Primitive Data Types.

Answer:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol
*/


/*
Q3. Name all Non-Primitive Data Types.

Answer:
1. Object
2. Array
3. Function
*/


/*
Q4. How to check a data type?

Answer:
typeof operator
*/


/*
=========================================
      One-Line Interview Answer
=========================================

JavaScript has 7 primitive data types:
Number, String, Boolean, Undefined,
Null, BigInt, and Symbol.

The main non-primitive data type is
Object, which includes Arrays and Functions.
*/