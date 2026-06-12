// =======================================
// Object.entries() in JavaScript
// =======================================

// Definition:
// Object.entries() returns an array of
// key-value pairs of an object.


// Syntax:
Object.entries(object)


// =======================================
// Example 1: Basic Object.entries()
// =======================================

let student = {
    name: "Hemant",
    age: 20,
    city: "Mathura"
};

console.log(Object.entries(student));

// Output:
// [
//   ["name", "Hemant"],
//   ["age", 20],
//   ["city", "Mathura"]
// ]


// =======================================
// Example 2: Loop using Object.entries()
// =======================================

let person = {
    name: "Ram",
    age: 25,
    city: "Delhi"
};

for (let [key, value] of Object.entries(person)) {
    console.log(key, ":", value);
}

// Output:
// name : Ram
// age : 25
// city : Delhi


// =======================================
// Example 3: Convert Object to Array
// =======================================

let obj = {
    a: 1,
    b: 2,
    c: 3
};

let entries = Object.entries(obj);

console.log(entries);

// Output:
// [["a",1], ["b",2], ["c",3]]


// =======================================
// Comparison
// =======================================

// Object.keys()   -> only keys
// Object.values() -> only values
// Object.entries() -> both key + value


// =======================================
// Interview Definition
// =======================================

// Object.entries():
// A method that returns an array of
// key-value pairs of an object.


// =======================================
// Quick Revision
// =======================================

// Object.keys(obj)    -> ["key1", "key2"]
// Object.values(obj)  -> ["val1", "val2"]
// Object.entries(obj) -> [["k1","v1"], ["k2","v2"]]