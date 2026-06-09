// =========================
// Type Conversion in JavaScript
// =========================

// Type Conversion means changing one data type into another.

// String to Number
let str = "123";
console.log(Number(str)); // 123

// Number to String
let num = 123;
console.log(String(num)); // "123"

// Boolean to Number
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Number to Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

// Implicit Type Conversion (Coercion)
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10

// =========================
// Truthy and Falsy Values
// =========================

// JavaScript treats some values as true and some as false
// when used in conditions.

// Falsy Values (Only 8)
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
// console.log(Boolean(0 n)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Truthy Values
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function() {})); // true

// Example
let name = "Hemant";

if (name) {
    console.log("Truthy Value");
} else {
    console.log("Falsy Value");
}