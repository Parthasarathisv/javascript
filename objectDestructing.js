let user={
    'email':'john@gmail.com',
    'username':'john123',
    'password':'jvnrjmn',
    'address':'xyz',
    'phoneno':'4523454'
}

//let email=user.email;
//let usename=user.username;

const {email,username}=user; 
console.log(email)
console.log(username)

let person={ 'name':'John','age':20}
let address={'street':'xyz','city':'chennai','pincode':'45265'}
console.log(person)
let personDetails={...person,...address}
console.log(personDetails)

Object.freeze(person)//YOU CANNOT ADD OR REMOVE OR MODOTY THE VALUE OF PROPERTIES 
//delete person.name//it will not deleted
//console.log(person)
//person.name='jamesh'//name will not be modify because the object is freeze
//console.log(person)

Object.seal(address) //you cannot add or remove but we can modify the value of properites
//delete address.street
address.city='Thanjavur'
console.log(address)
