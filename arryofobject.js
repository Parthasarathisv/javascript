let employee=[
{'name':'john','age':20,'dept':{'deptname':'EEE','location':'BlockA'},'salary':10000},
{'name':'jamesh','age':21,'dept':{'deptname':'CSE','location':'BlockB'},'salary':12000},
{'name':'clara','age':23,'dept':{'deptname':'Ece','location':'BlockC'},'salary':40000},
{'name':'Adam','age':22,'dept':{'deptname':'CSE','location':'BlockD'},'salary':15000},
{'name':'smith','age':24,'dept':{'deptname':'EEE','location':'BlockE'},'salary':12000},
{'name':'julie','age':23,'dept':{'deptname':'Civil','location':'BlockF'},'salary':18000}

]

const print=(e)=>console.log(`Name:${e.name} Age:${e.age} Department:${e.dept.deptname} Location: ${e.dept.location} Salary${e.salary}`)


console.log(employee[0].name)
console.log(`TRADITINOAL FOR LOOP`)
for(let i=0; i<employee.length;i++){
    console.log(`Name:${employee[i].name} Age:${employee[i].age} Department:${employee[i].dept.deptname} Location: ${employee[i].dept.location} Salary: ${employee[i].salary}`)
    
}
console.log('---' .repeat(30))
console.log(`USING FOREACH `)
employee.forEach(print)
console.log('---' .repeat(30))

console.log(`SORT BY NAME`)
let sortbyname= employee.sort((a,b)=>a.name.localeCompare(b.name))
sortbyname.forEach(print)
console.log(`---`.repeat(30))
console.log(`Desending order by name`)
 let sortnamedec=employee.sort((a,b)=>b.name.localeCompare(a.name))
 sortnamedec.forEach(print)
console.log(`---`.repeat(30))

console.log(`SORT BY AGE`)
let sortbyage= employee.sort((a,b)=>a.age-b.age)
sortbyage.forEach(print)
console.log(`---`.repeat(30))
console.log(`SORT BY AGE IN DESENDING ORDER`)
let sortagedec= employee.sort((a,b)=>b.age-a.age)
sortagedec.forEach(print)
console.log(`---`.repeat(30))
console.log(`SORT BY SALARY`)
let sortsalary= employee.sort((a,b)=>a.salary-b.salary)
sortsalary.forEach(print)
console.log(`---`.repeat(30))
console.log(`SORT BY SALARY IN DESENDING ORDER`)
let sortsalarydec= employee.sort((a,b)=>b.salary-a.salary)
sortsalarydec.forEach(print)
//sort will modify the orginal array

//filter -find employee who belongs to cse
console.log(`Filter`)
let cseEmps=employee.filter((e)=>e.dept.deptname.toLowerCase()==='CSE'.toLowerCase())
cseEmps.forEach(print)
console.log(`---`.repeat(30))
employee.forEach(print)//filter  will not modify the original array 
console.log(`---`.repeat(30))
console.log(`FILTER WHO HAS SALARY GREATER THEN 15000`)
let salarygreater=employee.filter((e)=>e.salary>15000)
salarygreater.forEach(print)
console.log(`---`.repeat(30))
console.log(`DISPLAY THE DETAILS OF EMPLYOEE ADAM`)
console.log(employee[2])//with using index value(if know)
let emp=employee.find((e)=>e.name.toLowerCase()==='adam'.toLowerCase())//without uisng index value
console.log(emp)

//map 
//map is used to return tha values as a array  or array of object .
 
let tableEmp=employee.map((e)=>`${e.name} ${e.age} ${e.salary}`)
console.log(tableEmp)











