// =======================================
// for...in vs for...of in JavaScript
// =======================================



// =======================================
// 1. for...in LOOP
// =======================================

// Definition:
// for...in is used to iterate over the
// keys (properties/index) of an object or array.


// Example with Object:
let student = {
    name: "Hemant",
    age: 20,
    city: "Mathura"
};

for (let key in student) {
    console.log(key, ":", student[key]);
}

// Output:
// name : Hemant
// age : 20
// city : Mathura


// Example with Array:
let arr1 = [10, 20, 30];

for (let index in arr1) {
    console.log(index);
}

// Output:
// 0
// 1
// 2



// =======================================
// 2. for...of LOOP
// =======================================

// Definition:
// for...of is used to iterate over the
// values of iterable objects (array, string, etc.)


// Example with Array:
let arr2 = [10, 20, 30];

for (let value of arr2) {
    console.log(value);
}

// Output:
// 10
// 20
// 30


// Example with String:
let name = "Hemant";

for (let ch of name) {
    console.log(ch);
}

// Output:
// H
// e
// m
// a
// n
// t



// =======================================
// DIFFERENCE BETWEEN for...in & for...of
// =======================================

// for...in:
// -> Iterates over keys (index/properties)
// -> Used mainly for objects
// -> Returns index in arrays

// for...of:
// -> Iterates over values
// -> Used mainly for arrays, strings
// -> Directly gives element value



// =======================================
// QUICK EXAMPLE COMPARISON
// =======================================

let numbers = [100, 200, 300];

console.log("for...in:");
for (let i in numbers) {
    console.log(i); // index
}

console.log("for...of:");
for (let i of numbers) {
    console.log(i); // value
}



// =======================================
// INTERVIEW ANSWER
// =======================================

// for...in:
// Used to iterate over keys/properties
// of an object or index of an array.

// for...of:
// Used to iterate over values of iterable
// objects like arrays and strings.