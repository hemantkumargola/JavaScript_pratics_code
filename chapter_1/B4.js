// =========================
// == vs === in JavaScript
// =========================

// == (Loose Equality)
// Compares values after type conversion (coercion).

console.log(5 == "5"); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(null == undefined); // true

// === (Strict Equality)
// Compares both value and data type.
// No type conversion is performed.

console.log(5 === "5"); // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log(null === undefined); // false

// Same value and same type
console.log(5 === 5); // true
console.log("Hello" === "Hello"); // true