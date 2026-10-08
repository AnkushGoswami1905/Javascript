var a=4

//var (let, const) are keywords in js which are used to declare variables. 

let b=5
console.log(b)
console.log(typeof b)//typeof is used to check the type of variable

let c = 100.389
console.log(c)
console.log(typeof c)//number

let d ="hello"
console.log(d)
console.log(typeof d)//string

let e = true
console.log(e)
console.log(typeof e)//boolean

let f = null
console.log(f)
console.log(typeof f)//object

let g = undefined
console.log(g)
console.log(typeof g)//undefined

//we cannot redeclare variables with let and const but we can redeclare variables with var.
var a = 10 //this is valid redeclaration of variable a because it was declared with var
//var b = 20; //this is invalid redeclaration of variable b because it was declared with let
/* SyntaxError: Identifier 'b' has already been declared*/ 

const name = "John"
name = "Doe" //this is invalid reassignment of variable name because it was declared with const 
/* TypeError: Assignment to constant variable. */
//const variables must be initialized at the time of declaration and cannot be reassigned later.