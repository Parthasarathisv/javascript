function validatePattern(inputStr){
//AT LEAST ONE SPECIAL CHARACTER 
let pattern=/^(?=.*[@&%*$]).*$/
// .*->any character 
// ? =>lookahead- here it looks for the atlest one special chracter

//pattern is - thr input shoiud contain atlest one special character
return pattern.test(inputStr) // its return true/false
}


//? its looks for a particular  pattern
console.log(validatePattern('abe')) 
console.log(validatePattern('&abe')) 
console.log(validatePattern('abe*fjahs')) 
console.log(validatePattern('abe&')) 
console.log(validatePattern('abe^jhgid')) 
console.log(validatePattern('1234')) 
console.log(validatePattern('aberq$$*jgb')) 

