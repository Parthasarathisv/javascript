let person={
      'name':'jamesh',
      'age':20,
      dipslay(){
        console.log(`${this.name} ${this.age}`)
      }
}

let studentmark={
    'science':40,
    'english':50,
    'maths':80
}

console.log('science mark' + studentmark.science)
console.log('student name'+ studentmark.name)
Object.setPrototypeOf(studentmark,person)
console.log('student name after set protoptype' +studentmark.name)
studentmark.dipslay()
person.dipslay()
