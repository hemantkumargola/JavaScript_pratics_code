// =======================================
// HIGHER-ORDER FUNCTION (HOF)
// =======================================

/*
👉 A Higher-Order Function is a function that:

✔ takes another function as argument
OR
✔ returns a function
*/

// =======================================
// 1. FUNCTION AS ARGUMENT (MOST COMMON)
// =======================================

function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    console.log(callback("Hemant"));
}

processUser(greet);


// 👉 Here:
// processUser = Higher-order function
// greet = callback function


// =======================================
// 2. FUNCTION RETURNS ANOTHER FUNCTION
// =======================================

function outer() {
    return function() {
        console.log("Inner function");
    };
}

const fn = outer();
fn();


// =======================================
// REAL EXAMPLE (IMPORTANT)
// =======================================

function calculate(operation) {
    return function(a, b) {
        return operation(a, b);
    };
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

const addFunc = calculate(add);
console.log(addFunc(5, 3)); // 8

const mulFunc = calculate(multiply);
console.log(mulFunc(5, 3)); // 15


// =======================================
// BUILT-IN HIGHER ORDER FUNCTIONS
// =======================================

// 1. map()
let arr = [1, 2, 3];

let result = arr.map(function(num) {
    return num * 2;
});

console.log(result); // [2, 4, 6]


// 2. filter()
let nums = [1, 2, 3, 4, 5];

let even = nums.filter(function(n) {
    return n % 2 === 0;
});

console.log(even); // [2, 4]


// 3. forEach()
nums.forEach(function(n) {
    console.log(n);
});


// =======================================
// EASY DEFINITION
// =======================================

/*
👉 Higher-order function = function that works with other functions

✔ Takes function as input
✔ OR returns function as output
*/


// =======================================
// REAL-LIFE IDEA
// =======================================

/*
Think like a machine:

HOF = machine controller
Callback = tool inside machine
*/