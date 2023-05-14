// 1-Print only Number that it should be print only integer. 
// “ const str=["1","3",52, "Subhan"] “
const str=["6","20",7,"Ahmad"]
let filterArray=str.filter(Number)
console.log(filterArray)
console.log(str.map(x=>typeof x==="number".toString()))


// 2-Destructure an array.

let arr=[2,3,4,5]
let [a,b,c]=arr;
console.log(a,b,c)

//Check the string is palindrome or not
function Palindrome(string) {
    let array = string.split("")
    let reverseArr = array.reverse("")
    let joinArr = reverseArr.join("")
    if (string == joinArr) {
        console.log("Palindrome")
    }
    else {
        console.log("Not")
    }
}
Palindrome("Ahmad")

// 5-Data Types.

/* 1.Primitive
Null
Undefined
Boolean
Symbol
Number
String
BigInt

2.Non-Primitive
Objects */


//we decalre variables in the start of any program using datatype and reassign them witout using datatype and change their value.

let array2;  //Declaration
array2=[1,2,3,4]; //Intialization


// 7-Find Minimum and Maximum number value in array.
let diffArray = [1,2,3,4,5];
let max = diffArray[0];
let min = diffArray[0];
for (let i = 0; i <= diffArray.length; i++) {
    if (max < diffArray[i]) {
        max = diffArray[i];
    }
    if (min > diffArray[i]) {
        min = diffArray[i];
    }
}
console.log(min)
console.log(max)



// 8-Print a String in both cases (Lowercase and Uppercase).
 function upperLower(str){
     let str1=str.toUpperCase()
     console.log(str1)
     let str2=str.toLowerCase()
     console.log(str2)
 }
 upperLower("Ahmad")
 
 
 
// 10-scope of keywords used to declare variables. (Difference between Var,let const)

/* var ---> var has globally scoped and can be redeclared and updated.
   let ---> let is block scoped and can be updated but can't redeclared.
   const ---> const is block scoped and can't be redeclared  and updated*/
   
   
   
   // 11-Print max no in the array of 10 by reduce method....
   let arrReduce = [1,2,3,4,5,6,7,8,9,11];

const reduce = arrReduce.reduce((accumulator, currentValue) => {
    if (max < currentValue) {
        return currentValue;
    }
    else {
        return max;
    }
},
    arrReduce[0]