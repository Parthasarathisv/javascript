let numbers=[10,3,42,66,45,5,80, 7,67,9];

console.log(numbers.slice(0,2))
//console.log(numbers.slice(3,7))
console.log(numbers.slice(-3))
//console.log(numbers.slice(2))
//console.log(numbers.slice(0,4))
//console.log(numbers.slice(4,8))
//console.log(numbers.slice(8,12))
//console.log(numbers)

//splice
console.log(numbers.splice(0,1))
//start intex form 0 aND deletecount is 1->Numbers of elements to be deleted is1
console.log(numbers.splice(numbers))

console.log(numbers.splice(0,1,30,40,50))
console.log(numbers)
