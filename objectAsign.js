let person={
    'name':'john',
    'age':20,
    'address':'xyz',
    'titile':'projrct lead'
}

let designation={
    'titile':'lead',
    'companyname':'xyz',
    'salary':34000
}
let department={
    'depname':'HR',
    'location':'BlockA'
}

//object assign
//1.to merge object.assign(target,..source)
//2.to clone an object

Object.assign(person,designation,department)
console.log(person)
//TO clone
let person1={}
Object.assign(person1,person)
delete person1.name
console.log(person1)
console.log(person)


//To refering the same memeroy location (not a copy/cloneing)
let person2=person
delete person2.name
console.log(person2)
console.log(person) 



// here same like on  shollow copy (spared operator)only the syntax is diferent 


