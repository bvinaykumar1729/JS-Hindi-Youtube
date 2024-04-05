//primitives

/*7 types :
1.String
2.Number
3.Boolean
4.null
5.undefined
6.Symbol
7.BigInt
*/



const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);

const bigNumber=34567890123456789n


//Reference (Non primitive)

/*3 types
1.Array
2.Objects
3.Functions
*/

const heros =["shaktiman","nagaraj","doga"];
let myObj ={
    name:"vinay",
    age:22,
}

const myFunction = function(){
    console.log("Hello Wwrld");
}

//console.log(typeof outsideTemp );
console.log(typeof myFunction);
//function returns function object

//console.log(typeof anotherId);


//********************************************* */


//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername= "chaiourcode "

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email="hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);


