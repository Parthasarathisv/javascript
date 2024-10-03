let n=12;

function squareF(num){
    return num*num
}
console.log('square of a number' + n+ squareF(n))
//string interpolation-back tick symbol
console.log(`square of a number ${n} is ${squareF(n)}`)
//ARROW FUNCTION
let square=(num)=>num*num;
console.log(typeof square)
console.log(`square of a number ${n} is ${square(n)}`)

console.log(`one 
two
three
four`)


