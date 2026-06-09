// =====================================================
// Control Flow in JavaScript
// =====================================================

// Control Flow determines the order in which code executes.

// =====================================================
// 1. if Statement
// =====================================================

let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}

// =====================================================
// 2. if...else Statement
// =====================================================

let marks = 40;

if (marks >= 33) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// =====================================================
// 3. if...else if...else Statement
// =====================================================

let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// =====================================================
// 4. switch Statement
// =====================================================

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}

// =====================================================
// 5. Ternary Operator
// =====================================================

let isLoggedIn = true;

let message = isLoggedIn ?
    "Welcome User" :
    "Please Login";

console.log(message);

// =====================================================
// 6. for Loop
// =====================================================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// =====================================================
// 7. while Loop
// =====================================================

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// =====================================================
// 8. do...while Loop
// =====================================================

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

// =====================================================
// 9. break Statement
// =====================================================

for (let k = 1; k <= 10; k++) {
    if (k === 5) {
        break;
    }
    console.log(k);
}

// Output: 1 2 3 4

// =====================================================
// 10. continue Statement
// =====================================================

for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        continue;
    }
    console.log(k);
}

// Output: 1 2 4 5

// =====================================================
// 11. for...of Loop (Arrays)
// =====================================================

const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}

// =====================================================
// 12. for...in Loop (Objects)
// =====================================================

const person = {
    name: "Hemant",
    age: 20
};

for (const key in person) {
    console.log(key, person[key]);
}

// =====================================================
// Summary
// =====================================================

// Decision Making:
// if
// if...else
// if...else if...else
// switch
// ternary (? :)

// Loops:
// for
// while
// do...while
// for...of
// for...in

// Loop Control:
// break
// continue