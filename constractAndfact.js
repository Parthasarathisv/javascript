//constructor funtion to costract object-creating a strucutre for on object
function person(firstname,lastname,gender){
    this.firstname=firstname;
    this.lastname=lastname;
    this.gender=gender;
   this.greet=()=>{ //here greet is a propert which is refering to an arrow function
    console.log(`${this.firstname} ${this.lastname} ${this.gender}`)
   }
}

let p1=new person('jonh','smith','m')
console.log(p1)
p1.greet()
let p2=new person('jamesh','s','m')
p2.greet()
let p3=new person('clara','c','f')
let p4=new person('jamesh','s','m')
console.log(typeof p1)
console.log(p1===p4)

//factory function
function factperson(fn,ln,gen){
    return{
        firstname:fn,lastname:ln,gender:gen,
        greet(){console.log(`${this.firstname} ${this.lastname} ${this.gender}`)}
        //here greet its self, as a function
    }
}

let factp1=factperson('Tom','s','m')
factp1.greet()
console.log(factp1)
//console.log(typeof factp1)
// console.log(p1)
// console.log(p2)
// console.log(p3)
// console.log(p4)