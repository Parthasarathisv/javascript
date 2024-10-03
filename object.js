//JSON java script object notation
let emp={
    'name':'john',
    'age':20,
     'salary':10000.00
}
console.log(`Name ${emp.name}`)
console.log(`Age ${emp.age}`)
console.log(`Salary ${emp.salary}`)
console.log(emp)

emp.gender='male'
console.log(emp)

let emp1={
    'name':'clara',
    'age':22,
    'salary':10000.00,
    'gender':'female'
}
console.log(emp1)
console.log(typeof emp)
console.log(typeof emp1)
console.log(emp===emp1)
console.log(emp==emp1)
//differnce between ==(type casting the value to another value and compare) and ===(strict equal)

let emp3=null; //null reference
let emp4;// undefined
console.log(emp3)
console.log(emp4)
emp3={'name':'smith'}//emp3 referning to object instead of null refernce 
console.log(emp3)
console.log(emp4)
console.log(typeof emp3)
console.log(typeof emp4)







