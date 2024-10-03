//class was introduced in EMCAScript 6(EMP6)
class person{
    constructor(name,dob){
        this.name=name;
        this.dob=new Date(dob)
    }
    greet(){
        console.log(`Welcome ${this.name}`)
    }

    calculateAge(){
        let today=new Date()
        console.log(`You are ${(today.getFullYear()-this.dob.getFullYear())} old`)
    }
    displayPerson(){
        console.log(`${this.name} and  dob is ${this.dob}`)
    }
}

let person1=new person('john','1990-10-10')
person1.greet()
person1.calculateAge()
person1.displayPerson()