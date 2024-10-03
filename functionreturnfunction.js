//1.HOF -function as parameter ,function as return value
//example 1
function multiply(x){
return function(y){
    return x*y
}
}


let fun=multiply(2)//fun=funciton(y){return x*y} x=2 
console.log(fun(3))//here x is 2 and y is 3
console.log(fun(6))//here x is 2 and y is 6

//EXMPLE2 
function findDiscount(price){
    return function(discount){
        return (price -(price*discount/100))
    }
}

let discountfun=findDiscount(100)//price
console.log(discountfun(10))//discount rate


//Example3

function calculatesalary(basicsalary){
    return function(hra,bonus,pf,bonusrate){
        return basicsalary+hra+(bonus*bonusrate)-pf
    }
}

let calcultenetsalary=calculatesalary(10000)
 console.log(calcultenetsalary(100,100,50,0.5))
console.log(calcultenetsalary(100,100,50,1))
