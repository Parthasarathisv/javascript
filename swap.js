// var a=67875;
// var b=9876;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a)
// console.log(b)
// console.log("a ="+ a)
// console.log("b =" + b)

// function reversestr(str){
//     let rev=''
//     for( let i=str.length-1; i>=0; i--){
//         rev=rev+str[i]
//     }
//     return rev
// }
// console.log(reversestr('hello'));


// let arr=[1,2,3,4,5]
// let n=2;
// let numbers=arr.slice(n).concat(arr.slice(0,n));
// console.log(numbers);

// let arr=[1,2,3,4,5]
// let n=2;
// let number=arr.slice(-n).concat(arr.slice(0,arr.length-n))
// console.log(number);

function rotate(arr,n){

     console.log( arr=arr.slice(n).concat(arr.slice(0,n)))
}
let arr=[1,2,3,4,5]
let n=2;
rotate(arr,n)


function reverse(str){
    let rev=''
    for(let i=str.length-1; i>=0; i--){
        rev=rev+str[i]
    }
    return rev
}
console.log(reverse('Nithiya'))



