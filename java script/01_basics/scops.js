const b =20
let c = 200
console.log(c)
// console.log(c)

let a = 300

if (true) {
  let a = 30;
  const b = 20;
  console.log("inner:",a);
 
}

console.log(a);
// console.log(b);
// console.log(c);
 
function one (){
    const username = "avadh"

    function two(){
        const web = "youtube"
        console.log(username);

    }
    // console.log(web);

    two()

}
one()

if(true){
    const name = "nik"
    if(true){
        const chanle = "chorme"

    }
} 


console.log(addno(4))
function addno (num){
    return num + 1
}


sum(6)
const sum = function(num){
    return num + 2
}