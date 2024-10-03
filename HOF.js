const square=(x)=>x*x
//we can pass square as an argument to another function 
//map is an high order funciton 
//becasuse it's accepts other funciton as an arguments
//EXAMPLE 1-predefined  HOF funciton (map)

let numbers=[10,20,30,40,50]
let squareNumbers=numbers.map(square)
console.log(squareNumbers)

const add=(a,b)=>a+b 
const sub=(a,b)=>a-b

//calculate is a hof function
//it accepts another function as an arguments
//op is an parameter name which is get the function as a value


function calculate(op,a,b){
    return op(a,b)
}

console.log(calculate(add,10,10)) //here add snd sub is funciton and value of op
console.log(calculate(sub,45,65))