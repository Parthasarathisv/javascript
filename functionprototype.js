function person(name,dob){
    this.name=name;
    this.dob=new Date(dob);
    this.greet=()=>{
          console.log(`Welcome ${this.name}`)
    }
}


person.prototype.calculateAge=function(){
    console.log(this.dob)
    console.log(this.dob.getFullYear())//getFullYEar is a function in date class
    console.log(this.dob.getMonth())
    let today=new Date();
    console.log(`You are ${(today.getFullYear()-this.dob.getFullYear())} years old`)
}

let person1=new person('john','1999-10-10')
person1.greet()
person1.calculateAge()
let person2=new person('jemesh','2001-01-01')
person2.greet()
person2.calculateAge()
console.log(person1.__proto__===person2.__proto__)