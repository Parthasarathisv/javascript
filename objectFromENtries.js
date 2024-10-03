//fromentries used to covert array of key value pair into an   object ,

const pair=[['name','john'],['age',20],['science',90],['maths',99]]
const student=Object.fromEntries(pair)
console.log(student)


//entries -to convert object into an array
//fromentries-to convert array into an object

let mark={'science':50,'maths':80,'english':78}
let markENtreis=Object.entries(mark)
markENtreis.map(([key,value])=>console.log([key,value+15]))

let marks={'name':'john','age':20,'science':60,'maths':70,'english':78}
let markEntry=Object.entries(marks)
 let result=markEntry.map(([key,value])=>{
    if(key==='name' || key==='age')
        return [key,value]

    else
    return [key,value+15]
 })
 console.log(result)
 console.log(Object.fromEntries(result))
 console.log(marks) //marks object remains same .itrs not updated
