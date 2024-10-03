let names=['john','adam','james','clara','smith','joe','tom'];
let copynames=[...names]//shallow copy 
console.log(names)
copynames.push('smitha')
copynames.sort()
console.log(names)
console.log(copynames)



