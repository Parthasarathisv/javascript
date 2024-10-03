let students=[
    {'name':'Jamesh','dept':'cse','gender':'male','mark':99},
    {'name':'John','dept':'eee','gender':'male','mark':97},
    {'name':'clara','dept':'cse','gender':'female','mark':95},
    {'name':'Julie','dept':'civil','gender':'female','mark':80},
    {'name':'adam','dept':'ece','gender':'male','mark':89}

]

const print=(e)=>console.log(`Name: ${e.name} Depatrment: ${e.dept} Gender: ${e.gender} Mark: ${e.mark}`)
//SORT BY MARKS
console.log(`SORT BY MARKS`)
let sortbymark=students.sort((a,b)=>a.mark-b.mark)
sortbymark.forEach(print)

//FIND THE FEMALE STUDENTS
console.log(`---`.repeat(30))
console.log(`FIND FEMALE STUDENTS`)
let female=students.filter((e)=>e.gender.toLowerCase()==='female'.toLowerCase())
female.forEach(print)
console.log(`---`.repeat(30))

//FIND LIST IF STUDENTS WHOSMNAMES START WITH J
console.log(`FIND LIST IF STUDENTS WHOSMNAMES START WITH J`)
let studentJ=students.filter((e)=>e.name.startsWith('J'))
studentJ.forEach(print)


