// =====================================================
// instanceof Operator
// =====================================================

// Checks whether an object is created from a
// specific constructor or class.

let arr = [];

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

let date = new Date();

console.log(date instanceof Date); // true
console.log(date instanceof Object); // true

// =====================================================
// Custom Class Example
// =====================================================

class Person {
    constructor(name) {
        this.name = name;
    }
}

let p1 = new Person("Hemant");

console.log(p1 instanceof Person); // true
console.log(p1 instanceof Object); // true

// =====================================================
// typeof vs instanceof
// =====================================================

let numbers = [];

console.log(typeof numbers); // object
console.log(numbers instanceof Array); // true

// Interview Examples

console.log([] instanceof Array); // true
console.log([] instanceof Object); // true

// Arrays are objects in JavaScript,
// so both statements return true.