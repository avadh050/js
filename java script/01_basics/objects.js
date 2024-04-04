// object literals
const mySym = Symbol("key1")


const user = {
    name: "avadh",
    mySym: "key1",
    "full name": "avadh Raiyani",
    email: "avadhgmail.com",
    location: "gujrat",
    isloggedIn: ["mon", "sat"],
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

// Object.freeze(user) // To use freeze after not change any oject value
user.name = "nik"
// console.log(user);

user.good = function () {
    // console.log("hello sir");
}

// user.good1 = function(){
// console.log(`hello sir, ${this.email}`);

// }
// console.log(user.good());
// console.log(user.good1());
// console.log(user);

// *************************** object singaleturn ************************* 


// const tinderUser = new Object () 
const tinderUser = {}
tinderUser.id = '125ddf'
tinderUser.name = "avadh"

// console.log(tinderUser);

const app = {
    name: "jay",
    email: "avadh@gmail.com",
    fulname: {
        userfullname: {
            firstname: "avadh",
            lastname: "raiyani",
        }
    }

}
// console.log(app.fulname.userfullname);

const obj1 = { 1: "a", 3: "c", }
const obj2 = { 3: "d", 4: "e" }

// try obj1+obj2 using spread 

const users = [
    {
        id: 1,
        email: "srk@gmail.com",
    },
    {
        id: 1,
        email: "srk@gmail.com",
    },
    {
        id: 1,
        email: "as@gmail.com",
    }
]
// console.log(users[2].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const cours = {
    name : "object",
    price : 999,
    coursInstuctor : "avadh",
}

const {coursInstuctor : Instuctor} = cours
// console.log(cours.coursInstuctor);
console.log(Instuctor);


