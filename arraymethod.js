let numbers=[45,23,1,5,6,4]
console.log(`length of an array ${numbers.length}`)

//PUSH ,POP, SIFT AND UNSHIFT
let length=numbers.push(34,5,60)
console.log(`length of an array ${length}`)
console.log(numbers)

//POP
console.log(numbers.pop())
console.log(numbers)

//SHIFT
console.log(numbers.shift())
console.log(numbers)

//UNSHIFT
console.log(numbers.unshift(76,98))
console.log(numbers)


//MAP FUNCITON
//finding square of each element in the array
const squareNum=numbers.map((num)=>num*num)
console.log(squareNum)

let names=["jamesh","john","adam","Nithiya"]
const namesUpper=names.map((name)=>name.toUpperCase())
console.log(namesUpper)


const numb=numbers.map((num1)=>num1+10)
console.log(numb)


const nameStartA=names.filter((name)=>name.includes('a'))
console.log(nameStartA)
 const namefind=names.filter((name)=>name.length>5)
 console.log(namefind)

let number1=[58,5,47,98,80];
const numbetGreater=number1.filter((num)=>num>50)
console.log(numbetGreater)

 //find method

let value=numbers.find((num)=>num%5==0)
console.log(value)

value=numbers.find((num)=>num==5)
console.log(value)//find always return only one value


console.log(numbers.filter((num)=>num>10 && num<50)) //all the element which satisfied the conditon
console.log(numbers.find((num)=>num>10 && num<50))//first element which satisfied the condition

