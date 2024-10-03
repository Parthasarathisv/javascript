let values=[102,3492,45,24,4,5,6,12];
let copyvalues=values // both varaibles are refering to the same mememory location
console.log(values)
console.log(copyvalues)
copyvalues.push(200)
console.log(values)
console.log(copyvalues)

let values1=[102,3492,45,24,4,5,6,12];
let copyvalues1=[...values1] //spared operator
//shallow copy, copyvalues and values are referring to the different memerory address
console.log(values1)
console.log(copyvalues1)
copyvalues.push(200)
console.log(values1)
console.log(copyvalues1)

//sort method 
const comparefn=(a,b)=>a-b
const comparefn1=(a,b)=>b-a

copyvalues1.sort(comparefn)
console.log(copyvalues1)
copyvalues1.sort(comparefn1)
console.log(copyvalues1)



let array1=[10,304,50,20,40];
let array2=[56,78,65,46,7,744];
//copy elements from array1 and array2 into a new array3
let array3=[...array1,...array2]
console.log(array1)
console.log(array2)
console.log(array3)

