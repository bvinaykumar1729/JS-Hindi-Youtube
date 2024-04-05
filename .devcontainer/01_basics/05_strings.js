const name= "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");


// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//String declaration using new keyword

const gameName1 = new String('hitesh-hc-com')

//console.log("gameName1  :"+typeof gameName1+" " +gameName1);

const gameName2 ='hitesh';
//console.log("gameName2  :"+typeof gameName2+" "+gameName2);

console.log(gameName1[0]);
console.log(gameName1.__proto__);

console.log(gameName1.length);
console.log(gameName1.toUpperCase());
console.log(gameName1.charAt(2));
console.log(gameName1.indexOf('t'));

const newString = gameName1.substring(0,4);
console.log(newString);

const anotherString = gameName1.slice(-8,4);
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());
//trimStart,trimend,

const url = "https://hitesh.com/hitesh%20choudhary";
console.log( url.replace('%20','-'));

console.log(url.includes('hitesh')); 

console.log(gameName1.split('-'));

//split(separator,limit)