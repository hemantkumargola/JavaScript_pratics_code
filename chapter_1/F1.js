// =======================================
// FIRST-CLASS FUNCTIONS IN JAVASCRIPT
// =======================================

/*
👉 First-class functions mean:
Functions are treated like normal values (data).
*/

// You can:
// 1. Assign function to variable
// 2. Pass function as argument
// 3. Return function from another function


// =======================================
// 1. ASSIGN FUNCTION TO VARIABLE
// =======================================

const greet = function() {
    console.log("Hello");
};

greet();


// =======================================
// 2. PASS FUNCTION AS ARGUMENT (CALLBACK)
// =======================================

function greetUser(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Hemant");
}

processUser(greetUser);


// Built-in example
setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);


// =======================================
// 3. RETURN FUNCTION FROM ANOTHER FUNCTION
// =======================================

function outer() {
    return function() {
        console.log("Inner function");
    };
}

const fn = outer();
fn();


// =======================================
// REAL EXAMPLE (CLOSURE STYLE)
// =======================================

function multiplyBy(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // 10


// =======================================
// EASY SUMMARY
// =======================================

/*
✔ Assign → function in variable
✔ Pass   → function as argument (callback)
✔ Return → function from function

👉 First-class functions = functions behave like data
*/