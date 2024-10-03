let number=[12,4,3,,2,4,566,123,78];
 //traditonal way of itrsting and displaying array

//  for(let i=0; i<number.length; i++){
//     console.log(`index is${i} and the value is ${number[i]}`)
//  }

//const callbackFun=(value,index)=>console.log(`index is ${index} and the  value is ${value})

//1 st iter-value =12,index x=0
//2 nd iter-value =4 ,index x=1


number.forEach((v,i)=>console.log(`index is ${i} and the value is ${v}`))

//print only the even number of an array
number.forEach((v)=>{if(v%2==0) console.log(v)})


    //forEach is a funciton
    //we are passing arrow funciotn AS as argument to forEach funciton
    //arrow function will get executed forEach element in number array

    let names=["John" ,"Jamesh","Adam","Smith","Clara","Joe","Tom"]
    names.forEach((name)=>console.log(name.toUpperCase()))

    //FILTER -based on some conditon , it will filter the value and return a new array
    //FILTER ONY EVEN NUMBERS

    const evenNumber=number.filter((num)=>num%2==0)
    const oddNumber=number.filter((num)=>num%2!=0)
    console.log(evenNumber)
    console.log(oddNumber)
    


    //DISPLAY THE NAMES WHICH START WITH J

    const nameStartJ=names.filter((name)=>name.startsWith('J'))
    console.log(nameStartJ)