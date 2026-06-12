// =======================================
// break & continue in JavaScript
// =======================================


// =======================================
// 1. BREAK STATEMENT
// =======================================

// Definition:
// break is used to immediately terminate
// (stop) a loop or switch statement.

// Syntax:
// break;


// Example 1: Break in a for Loop

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4

// Explanation:
// When i becomes 5, break stops
// the loop immediately.


// Example 2: Break in a while Loop

let i = 1;

while (i <= 10) {
    if (i === 6) {
        break;
    }

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
// Break is a control statement that
// immediately exits a loop or switch
// statement regardless of the condition.


// =======================================
// 2. CONTINUE STATEMENT
// =======================================

// Definition:
// continue skips the current iteration
// of a loop and moves to the next iteration.

// Syntax:
// continue;


// Example 1: Skip Number 5

for (let j = 1; j <= 10; j++) {
    if (j === 5) {
        continue;
    }

    console.log(j);
}

// Output:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// Explanation:
// When j becomes 5, continue skips
// that iteration and moves to the next one.


// Example 2: Print Only Odd Numbers

for (let k = 1; k <= 10; k++) {
    if (k % 2 === 0) {
        continue;
    }

    console.log(k);
}

// Output:
// 1
// 3
// 5
// 7
// 9

// Explanation:
// Even numbers are skipped,
// only odd numbers are printed.


// =======================================
// Quick Revision
// =======================================

// break    -> Stops the entire loop.
// continue -> Skips current iteration
//             and moves to next iteration.


// Example Difference

for (let x = 1; x <= 5; x++) {

    if (x === 3) {
        break;
    }

    console.log("break:", x);
}

// Output:
// break: 1
// break: 2


for (let y = 1; y <= 5; y++) {

    if (y === 3) {
        continue;
    }

    console.log("continue:", y);
}

// Output:
// continue: 1
// continue: 2
// continue: 4
// continue: 5


// Interview Definitions

// Break:
// A control statement that immediately
// exits a loop or switch statement.

// Continue:
// A control statement that skips the
// current iteration of a loop and
// proceeds to the next iteration.