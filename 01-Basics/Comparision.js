// console.log("2" > 1);
// console.log("02" > 1);
// console.log(1 > "02");


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // I mean why? //Comparision and equality works differently actually.
//Comparisions converts null into a number. Undefined is different though
// console.log("2" == 2);
// console.log("2" === 2); //will give false, as it checks the datatype as well

//Every symbol created using Symbol() is guaranteed to be unique, even if they have the same description.
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false (each is unique)
let myObj = {
    name: 'Irtiaj',
    age: 21
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}

myFunction(); //It's called function object