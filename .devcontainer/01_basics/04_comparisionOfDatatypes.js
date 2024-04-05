// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2 != 1);

// console.log("2">1);
// console.log("02">1);

// console.log(null > 0);
// console.log(null == 0);

// console.log(null>=0);
/*The reason is that an equality check == and comparisons><>=
<= work differeently.
Comparision convert null to a number treating it as 0.
Thatswhy(3)null>=0 is true null>0 is false */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//strict check === also checking datatype

console.log("2"===2);

//in js different datatypes comparision allowed
