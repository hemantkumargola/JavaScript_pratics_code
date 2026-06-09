// =========================
// Operators in JavaScript
// =========================

// Operators are symbols used to perform operations on values and variables.

// =========================
// 1. Arithmetic Operators
// =========================

let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** b); // 100000

// =========================
// 2. Assignment Operators
// =========================

let x = 10;

x += 5; // x = x + 5
x -= 2; // x = x - 2
x *= 2; // x = x * 2
x /= 2; // x = x / 2

console.log(x);

// =========================
// 3. Comparison Operators
// =========================

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false

// =========================
// 4. Logical Operators
// =========================

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// =========================
// 5. Increment / Decrement
// =========================

let count = 5;

console.log(++count); // 6 (Pre Increment)
console.log(count++); // 6 (Post Increment)
console.log(count); // 7

console.log(--count); // 6 (Pre Decrement)
console.log(count--); // 6 (Post Decrement)
console.log(count); // 5

// =========================
// 6. Ternary Operator
// =========================

let age = 18;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// =========================
// 7. typeof Operator
// =========================

console.log(typeof 10); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean

// =========================
// 8. Nullish Coalescing (??)
// =========================

let username = null;

console.log(username ? ? "Guest"); // Guest

// =========================
// 9. Optional Chaining (?.)
// =========================

const user = {
    name: "Hemant"
};

console.log(user ? .name); // Hemant
console.log(user ? .age); // undefined