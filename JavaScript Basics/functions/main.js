
//functions || function defination || function DEclariation
// function square (num) {
//     return num * num;
// }

//function calling

//square()

// console.log(square(4));
// console.log(square(5));

//function expression
// const square = function(num) {return num * num ;}

// console.log(square(5));

//Arrow function

//function expression
// const square = function(num) {
//     return num * num;
// }

//arrow function

// const square = (num) =>  num * num;

// console.log(square(5));

// const add = function (a ,b ) {
//     return a + b;
// }

// const add = (num1, num2) => num1 + num2;

// console.log(add(4,6));

//2 ^ 10 = 1024

/*
 2 * 1 = 2
 2 * 2 = 4
 2 * 4 = 8
 2 * 8 = 16
 2 * 16 = 32
 2 * 32 = 64
 2 * 64 = 128
 2 * 128 = 256 
 2 * 256 = 512
 2 * 512 = 1024
*/


// start , ending , driver 

// const power = (base , exponent) => {

//     let result = 1;
//     for(let i = 0; i < exponent; i++){
//         result *= base;     
//     }
//     return result;
// }

// console.log(power(2,10));
// console.log(power(2,20));
// console.log(power(2,5));
// console.log(power(3,5));

//deafult parameters

const sub = (a = 5,b = 4) => a - b;

console.log(sub(10, 5));


