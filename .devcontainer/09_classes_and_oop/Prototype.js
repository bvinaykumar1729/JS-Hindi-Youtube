// let myName = "hitesh    "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman" ]

let heroPower = {
    thor: "hamer",
    spiderman: "sling",

    getSpiderPower:function(){
        console.log(`Spider power is $(this.spiderman)`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh();
// myHeros.hitesh();
// myHeros.heyHitesh();
// heroPower.heyHitesh();


//  inheritance

const User= {
    username:"chai",
    email:"chai@google.com"
}


const Teacher = {
   maleVideo:true
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// This keyword GOAT example below
let anotherUserName = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"hitesh".trueLength()
"iceTea".trueLength()


