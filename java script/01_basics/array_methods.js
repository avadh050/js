const name = ['avavdh','nik','surani']
const newname = ['jay','raj','yash']

  name.push(newname)
  console.log(name);

  console.log(name[3][2]);
  console.log(name);

//    const allname = name.concat(newname)
//    console.log(allname);

 const allname = [...name,...newname]
 console.log(allname);//spread

 const newnum = [1,2,5,[6,58,56],[45,55,99],4]
 console.log(newnum.flat(Infinity));

console.log("avadh");
let nik = "avadh"
console.log(Array.from("avadh"));
console.log(typeof ["avadh"]);
console.log(Array.from({name:"avadh"})); // inerasting

let bal1 = 52
let bal2 = 52
let bal3 = 52

console.log(Array.of(bal1,bal2,bal3));

//array to string

const ava = ["abc","1","2"]
// console.log(ava.toString());
const bc = ava.toString()
console.log(typeof(bc));