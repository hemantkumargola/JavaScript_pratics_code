// array in js 
// creat array construction
// let fruits = new Array("mango", "graps", "banana", "papaya");
// console.log(fruits);

// creats array litears\

// let frut = ['mango', 'graps', 'banana', 'papaya']
// console.log(frut);

// acces elemnet

// let frut = ['mango', 'graps', 'banana', 'papaya']
// console.log(frut[0]);
// console.log(frut[2]);

// modify Array

// let frut = ['mango', 'graps', 'banana', 'papaya']
// // frut[0] = "apple";
// console.log(frut[0]);

// Array traversal in js
// let frut = ['mango', 'graps', 'banana', 'papaya','apple',]
// for (let i = 0; i < frut.length; i++) {
//     console.log(frut[i]);

// }


// for of loop
// let frut = ['mango', 'graps', 'banana', 'papaya', 'apple', ]
// for (let item of frut) {
//     console.log(item);
// }

// for in loop
// let frut = ['mango', 'graps', 'banana', 'papaya', 'apple', ]
// for (let item in frut) {
//     console.log(item);
// }


//   forEach method (Simple Definition)

// 👉 forEach JavaScript me array ke har
// . element par ek-ek baar function run karta hai.


// let frut = ['mango', 'graps', 'banana', 'papaya', 'apple', ]
// frut.forEach((curent, index, arr) => {
//     console.log(`${curent} ${index}`);
// })

// map methods in array 

//"👉 map() JavaScript ka array method hai jo 
// array ke har element par function apply
//  karta hai aur ek naya array return karta hai."

// let frut = ['mango', 'graps', 'banana', 'papaya', 'apple', ]
// frut.map((curent, index, arr) => {
//     console.log(`${curent} ${index}`);
// })


// map one mor example ( ye returne bhi kar sakata hai)

let arr = [1, 2, 3];

let newArr = arr.map(x => x * 2);
console.log(newArr); // [2, 4, 6]