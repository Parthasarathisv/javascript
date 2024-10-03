function displaydetails(){
    console.log(`${this.name} ${this.age} ${this.gender}`)

}

let person={
    'name':'John',
    'age':20,
    'gender':'male'
}

let person1={
    'name':'Jamesh',
    'age':34,
    'gender':'male'
}

displaydetails.call(person)
displaydetails.call(person1)


function displayEmpDetils(hra,bonus,pf){
    console.log(`${this.empname} ${this.age} ${this.salary} ${hra} ${bonus} ${pf}`)
    
}

let employee={'empname':'john' ,'age':34,'salary':1000}
displayEmpDetils.call(employee,100,50,100)
displayEmpDetils.apply(employee,[100,40,100])

let disply=displayEmpDetils.bind(employee,200,60,44)
disply()

let user={
    'name':'john',
    'age':20
}

function displayuser(city){
    console.log(`${this.name}${this.age} ${city}`)

}

displayuser.call(user,'chennai')
displayuser.apply(user,['chennai'])



