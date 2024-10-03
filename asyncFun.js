//asynchronous function
//its return the promise object with data as {'number1:10,number2=43;}after 5000ms
function getNumber(){
    return new Promise((resolve,reject)=>setTimeout(resolve({'number1':10,'number2':12}),5000))

}
//number is on object with two properties number1 and number2,we are getting from getNumber()

async function calculatesum(){
    let sum
    let numbers={'number1':0, 'number2':0}

    //AYNSCHRONOUS FUNCTION
    await getNumber().then((data)=>numbers=data).catch((err)=>console.log(err))
    //THESE TWO STATEMENTS ARE NOT WAITING FOR THE PREVIOUS STATEMENT TO GET COMPLETED
    sum=numbers.number1+numbers.number2
    console.log(sum)
}

calculatesum()


//getNumber is a asynchronous function .beacuse we use promise and setTime


