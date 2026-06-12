// =======================================
// JavaScript Notes: forEach() & for...in
// =======================================



// =======================================
// forEach() METHOD (ARRAY)
// =======================================

// Definition:
// forEach() is an array method that executes
// a callback function once for every element
// in the array.


// Syntax:
array.forEach(function(element, index) {
    // code
});


// Example 1:
let numbers = [10, 20, 30, 40];

numbers.forEach(function(num) {
    console.log(num);
});

// Output:
// 10
// 20
// 30
// 40


// Example 2: Element + Index
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});

// Output:
// 0 Apple
// 1 Banana
// 2 Mango


// Example 3: Arrow Function
let names = ["Ram", "Shyam", "Mohan"];

names.forEach(name => {
    console.log(name);
});

// Output:
// Ram
// Shyam
// Mohan


// Example 4: Sum of Array
let arr1 = [1, 2, 3, 4, 5];
let sum = 0;

arr1.forEach(num => {
    sum += num;
});

console.log(sum);

// Output:
// 15



// =======================================
// for...in LOOP (OBJECT)
// =======================================

// Definition:
// for...in loop is used to iterate over
// the keys (properties) of an object.


// Syntax:
for (let key in object) {
    // code
}


// Example 1: Object
let student = {
    name: "Hemant",
    age: 20,
    city: "Mathura"
};

for (let key in student) {
    console.log(key);
}

// Output:
// name
// age
// city


// Example 2: Key + Value
let person = {
    name: "Ram",
    age: 25,
    city: "Delhi"
};

for (let key in person) {
    console.log(key, ":", person[key]);
}

// Output:
// name : Ram
// age : 25
// city : Delhi


// Example 3: for...in with Array (not recommended)
let fruitsArr = ["Apple", "Banana", "Mango"];

for (let index in fruitsArr) {
    console.log(index);
}

// Output:
// 0
// 1
// 2



// =======================================
// for...in vs for...of
// =======================================

let arr2 = [10, 20, 30];

// for...in -> gives index
for (let key in arr2) {
    console.log("for...in:", key);
}

// Output:
// 0
// 1
// 2


// for...of -> gives value
for (let value of arr2) {
    console.log("for...of:", value);
}

// Output:
// 10
// 20
// 30



// =======================================
// QUICK REVISION
// =======================================

// forEach() -> Array method (no break/continue)
// for...in  -> Object keys (properties)
// for...of  -> Array values



// =======================================
// INTERVIEW ONE-LINE ANSWERS
// =======================================

// forEach():
// Executes a callback once for every array element.

// for...in:
// Iterates over keys (properties) of an object.