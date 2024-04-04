const user = {
  username: "avadh",
  price: 999,

  welcome: function () {
    console.log(`${this.username},welcome to web `);
    console.log(this);
  },
};

// user.welcome()
// user.username = "nik"
// user.welcome()

// console.log(this);

// function chai (){
//     let username = "avadh"
//     console.log(this.username);
// }
// chai()

const chai = () => {
  let username = "avadh";
  console.log(this);
};
// chai()

// const addtwo =(num1,num2)=> (num1 + num2)

const addtwo = (num1, num2) => ({ username: "avadh" });

console.log(addtwo(5, 6));
