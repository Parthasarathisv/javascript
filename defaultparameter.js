function add(a,b=0){
    return a+b;
}
function welcome(name='unknown'){//unkown is the default parameter for name
    
    conosle.log(`welcome ${name}`) //tamplate literal -ES6 features
}
console.log(add(1))
conosle.log(add(1,4))
welcome('john')
welcome()