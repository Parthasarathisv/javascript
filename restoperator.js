function concat(arg1,...arg2){
    let str=arg1
    console.log(arg2.length)
    for(let i=0; i<arg2.length;i++)
     str=str.concat(arg2[i])
     return str
    
}


console.log(concat('helo' ,'world'))
console.log(concat('one','two','three','four','five'))
function findsum(...values){
let sum=0;
for(let i=0; i<values.length; i++)
    sum=sum+values[i]
    return sum;



}
console.log(findsum(1));
console.log(findsum(1,3,6));
console.log(findsum());