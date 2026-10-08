// let score = 33 //number
// console.log(score)
// console.log(typeof(score))

// score = "33" //string
// console.log(score)
// console.log(typeof(score))

// score = "33" //string
// let valueInNumber = Number(score) //converted to number
// console.log(valueInNumber)
// console.log(typeof(valueInNumber))

// score = "33abc" //string
// valueInNumber = Number(score) //converted to number
// console.log(valueInNumber)// NaN (not a number)
// console.log(typeof(valueInNumber))// type is still a Number

// score = true //boolean
// valueInNumber = Number(score) //converted to number
// console.log(valueInNumber)// 1
// console.log(typeof(valueInNumber))//Number

// score = null //stand alone value
// valueInNumber = Number(score) //converted to number
// console.log(valueInNumber)// 0
// console.log(typeof(valueInNumber))//Number
/* 

                  Conversion 
                  "33" => 33
                  "33abc" => NaN, not a number
                  true => 1 , false => 0
                  null => 0
 
*/

let loggedIn = 1 //number
let booleanIsLoggedIn = (Boolean(loggedIn))
console.log (loggedIn)
console.log (booleanIsLoggedIn)//true

loggedIn = 0 //number
booleanIsLoggedIn = (Boolean(loggedIn))
console.log (loggedIn)
console.log (booleanIsLoggedIn)//false

loggedIn = "" //empty string => 0
booleanIsLoggedIn = (Boolean(loggedIn))
console.log (loggedIn)// empty space
console.log (booleanIsLoggedIn)// false

loggedIn = "Ankush" //string => 1
booleanIsLoggedIn = (Boolean(loggedIn))
console.log (loggedIn)//Ankush
console.log (booleanIsLoggedIn)// true
/* 

                 Boolean Conversion 
                  0 => true
                  1 => false
                  "" => false
                  "Ankush" => true
 
*/