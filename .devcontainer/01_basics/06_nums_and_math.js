const score = 400;

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN'));

//********************************* Maths ***************************** */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));//Highly used method
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(9,5,8,2,1));
// console.log(Math.max(9,7,6,8,5,2,1));

console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max-min + 1 )) + min)