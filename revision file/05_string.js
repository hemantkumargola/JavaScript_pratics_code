//String in js 

// 👉 String is a sequence of characters used to
//  represent text in JavaScript.
// likes
// let str1 = "Hello World"; // double quotes
// let str2 = 'Hello World'; // single quotes
// let str3 = `Hello World`; // backticks (template literals)


// 👉 length property string ke characters
//  ki total count batati hai.
// example
// let str = "hemant kumar gola ";
// console.log(str.length);











// 👉 indexOf() method string me kisi character ya
//  substring ka first occurrence ka index return karta hai.

// Agar element nahi mile → -1 return hota hai

// let str = "Hello World";

// console.log(str.indexOf("o")); // 4
// console.log(str.indexOf("World")); // 6
// console.log(str.indexOf("z")); // -1






// 👉 lastIndexOf() method string me kisi character ya substring ka last 
// \occurrence ka index return karta hai.
// let str = "Hello World, Hello JS";

// console.log(str.lastIndexOf("Hello")); // 13
// console.log(str.lastIndexOf("o")); // 16
// console.log(str.lastIndexOf("z")); // -1








// 👉 search() method string me specified text ya regular expression ko 
// search karta hai aur
//  pehla match ka index return karta hai.

// let str = "Hello World";

// console.log(str.search("World")); // 6
// console.log(str.search("JS"));    // -1










// 👉 match() method string me pattern
//  ya substring ko search karta hai aur
//  matching results ko array me return karta hai.

// Match na mile → null return hota hai

// example 1
// let str = "Hello World";

// let result = str.match(/World/);
// console.log(result); // ["World"]


// example2
// let str = "The rain in Spain";

// let result = str.match(/ain/g);
// console.log(result); // ["ain", "ain"]

// example 3    when no match 
// let str = "Hello";

// let result = str.match(/JS/);
// console.log(result); // null















// 👉 includes() method check karta hai ki given text
//  (character ya word) string ke andar present hai ya nahi.


// example 
// let str = "JavaScript is awesome";

// console.log(str.includes("JavaScript")); // true
// console.log(str.includes("awesome"));    // true
// console.log(str.includes("java"));        // false (case-sensitive)















// 👉 startsWith() method check karta hai ki string kisi specific word ya
//  character se start ho rahi hai ya nahi.
// example 
// let str = "JavaScript is fun";

// console.log(str.startsWith("JavaScript")); // true
// console.log(str.startsWith("Java"));       // true
// console.log(str.startsWith("is"));         // false











// 👉 endsWith() method check karta hai ki string kisi specific
//  word ya character par end ho rahi hai ya nahi.

// let str = "JavaScript is fun";

// console.log(str.endsWith("fun")); // true
// console.log(str.endsWith("Script")); // false
// console.log(str.endsWith("JavaScript", 10)); // true













// 👉 slice() method string ka ek part nikal kar naya 
// string return karta hai.
// 📌 Notes:
// startIndex include hota hai
// endIndex include nahi hota
// Negative index bhi use kar sakte ho


// // example 
// let str = "JavaScript";

// console.log(str.slice(0, 4)); // "Java"
// console.log(str.slice(4)); // "Script"
// console.log(str.slice(-6)); // "Script"















// 👉 substring() method string ka
//  ek part nikal kar naya string return karta hai.


// let str = "JavaScript";

// console.log(str.substring(0, 4)); // "Java"
// console.log(str.substring(4)); // "Script"
// console.log(str.substring(4, 10)); // "Script"

// 📌 Notes:
// startIndex include hota hai
// endIndex include nahi hota
// Negative index support nahi karta (0 se start hota hai)








// 👉 at() method string ke kisi specific
//  index ka character return karta hai.

// let str = "JavaScript";

// console.log(str.at(0));   // J
// console.log(str.at(4));   // S
// console.log(str.at(-1));  // t (last character)

















// 👉 replace() method string ke kisi
//  part ko naya text se replace karta 
//  hai aur naya string return karta hai.

// Original string change nahi hoti

// let str = "I love Java";

// let result = str.replace("Java", "JavaScript");
// console.log(result); // "I love JavaScript"

















// 👉 charAt() method string ke kisi specific
//  index par present character return karta hai.

// let str = "JavaScript";

// console.log(str.charAt(0)); // J
// console.log(str.charAt(4)); // S














// 👉 charCodeAt() method string ke 
// kisi character ka Unicode (UTF-16) code return karta hai.

















// 👉 toUpperCase() string ke sab characters ko CAPITAL letters 
// me convert karta hai.
// 👉 toLowerCase() string ke sab characters ko small
//  letters me convert karta hai.

let str = "JavaScript";

console.log(str.toUpperCase()); // "JAVASCRIPT"
console.log(str.toLowerCase()); // "javascript"