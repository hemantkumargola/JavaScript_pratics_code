// some methods arrays 


// 👉 push() JavaScript ka array method hai
//  jo array ke end me new element add karta 
// hai aur array ki new length return karta hai.
// exampe

// let arr = [1, 2, 3];

// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]






// 👉 pop() JavaScript ka array method hai jo array
//  ke last element ko remove karta hai aur removed 
//  element return karta hai.

// Example:
// let arr = [1, 2, 3];

// arr.pop();
// console.log(arr); // [1, 2]





// 👉 unshift() JavaScript ka array method hai jo array ke 
// starting (beginning) me new element add karta hai aur 
// array ki new length return karta hai.

// // Example:
// let arr = [2, 3, 4];

// arr.unshift(1);
// console.log(arr); // [1, 2, 3, 4]







// 👉 shift() JavaScript ka array method hai jo
//  array ke first element ko remove karta hai
//   aur removed element return karta hai.

// Example:

// let arr = [1, 2, 3];

// arr.shift();
// console.log(arr); // [2, 3]








// 👉 slice() JavaScript ka array method hai jo array
//  ka ek part copy karke naya array return karta hai
//   (original array change nahi hota).

// // Example:

// let arr = [10, 20, 30, 40, 50];

// let result = arr.slice(1, 4);
// console.log(result); // [40, 50]









// 👉 indexOf() JavaScript ka array method hai jo 
// kisi element ka index (position) batata hai.

// Example:
// let arr = [10, 20, 30, 40];

// console.log(arr.indexOf(30)); // 2







// // 
// 👉 includes() JavaScript ka array method hai jo
//  check karta hai ki koi element array me present
//   hai ya nahi.

// // Example:

// let arr = [10, 20, 30, 40];

// console.log(arr.includes(20)); // true
// console.log(arr.includes(50)); // false












// 👉 filter() JavaScript ka array method hai jo 
// condition ke base par elements ko filter karta 
// hai aur ek naya array return karta hai.

// Example:
// let arr = [1, 2, 3, 4, 5];

// let even = arr.filter(x => x % 2 === 0);
// console.log(even); // [2, 4]

//example2
// let value = 6;
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let update = number.filter((curelemt) => {
//     return curelemt !== value;
// })
// console.log(update);













// 👉 reduce() JavaScript ka array method hai 
// jo array ke sab elements ko ek single value
//  me convert karta hai (sum, product, etc.).

// Example:
// let arr = [1, 2, 3, 4];

// let sum = arr.reduce((a, b) => a + b, 0);
// console.log(sum); // 10

// example 
// let n = [1000, 154, 418574, 1657167, 167, 1987, 1967];
// let total = n.reduce((acum, curret) => {
//     return acum + curret;

// }, 0)

// console.log(total);