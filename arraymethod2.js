let array1=[10,304,50,20,40];
console.log(array1)

const square=([...array])=>{
      for(let i=0; i<array.length;i++)
        array[i]=array[i]*array[i]
    console.log(array)
}
square(array1)
console.log(array1)
