//ES 6 -SPARED OPERATOR
//1.combine two or more objects/ararys
//2.add new elememts to an aray
//3.add new properties to an already exisiting objects
//4.to  make a shallow copy


//spared operator -OBJECT
let person={
    'name':'john','age':20,'gender':'male','city':'CHN','isActive':true
}
let personEmp={...person,salary:1000,companyname:'xyz'}//add new properits to the exsiting objects
console.log(person)
console.log(personEmp)


let obj1={a:1, b:2}
let obj2={b:5, c:4, d:4}
let obj3={...obj1,...obj2}//merge two object
console.log(obj3)



//SPARED OPERATOR -ARRAY
let numbers=[10,5,67,54]
let copynumber=[...numbers]//shallow copy of on array


//merge two or mkore arays
let arr1=[1,4]
let arr2=[4,6]
let arr3=[7,8]
let arr4=[9,0]
let arr5=[...arr1,...arr2,...arr3,...arr4]
console.log(Math.max(45,76,8776))
console.log(Math.max(...arr5))