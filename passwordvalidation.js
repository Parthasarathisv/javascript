function passwordvalidation(password){
    //atlest one uppercase
    //atlest one lowe case
    //atlest one digit
    // atlest one special character
    //the minium length is 8
    let passwordpattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    return passwordpattern.test(password)
}

console.log(passwordvalidation('text'))//false
console.log(passwordvalidation('124'))//false
console.log(passwordvalidation('text1234'))//false
console.log(passwordvalidation('tet1@Qyt'))//true
console.log(passwordvalidation('text'))//false
