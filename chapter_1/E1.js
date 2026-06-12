// =======================================
// JavaScript Loops Notes
// =======================================

// Definition:
// A loop is a programming concept that allows you
// to repeat a block of code multiple times until
// a condition is met.

// Why use loops?
// Instead of writing the same code repeatedly,
// loops automate repetition.


// =======================================
// 1. FOR LOOP
// =======================================

// Used when you know how many times
// the code should run.

// Syntax:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

// How it works:
// Initialization -> let i = 1
// Condition      -> i <= 5
// Update          -> i++


// Example: Print Hello 3 Times
for (let i = 1; i <= 3; i++) {
    console.log("Hello");
}


// Example: Reverse Counting
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Output:
// 5
// 4
// 3
// 2
// 1


// Example: Sum of Numbers 1 to 5
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum);

// Output:
// 15


// Interview Definition:
// A for loop is a control structure used to
// repeatedly execute a block of code for a
// specified number of iterations.


// =======================================
// 2. WHILE LOOP
// =======================================

// Used when repetition depends on a condition.

// Syntax:
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5

// Interview Definition:
// A while loop executes a block of code
// repeatedly while a given condition remains true.


// =======================================
// 3. DO-WHILE LOOP
// =======================================

// Executes at least once before checking
// the condition.

// Syntax:
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5

// Interview Definition:
// A do-while loop executes the code block once
// before checking the condition, then continues
// repeating while the condition is true.


// =======================================
// Real-Life Example
// =======================================

// Robot takes 10 steps forward

for (let step = 1; step <= 10; step++) {
    console.log("Move Forward");
}


// =======================================
// Quick Revision
// =======================================

// for loop      -> Fixed number of iterations
// while loop    -> Condition-based iterations
// do-while loop -> Runs at least once

// Loop Definition:
// A loop is a control structure that repeatedly
// executes a block of code as long as a specified
// condition is true.