//Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2024,0,26);
// let myCreatedDate = new Date(2024,0,26,5,3);//Date with time
// let myCreatedDate = new Date("2023-01-14")//YY/MM/DD format
let myCreatedDate = new Date("01-14-2023");//MM/DD/YY format


//console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

//********TimeStamps************* */

let myTimeStamp =Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// console.log(` ${newDate.getDay()} and the time is ${newDate.getTime()}`);

newDate.toLocaleString('default', {
   Weekday: "long"

})
