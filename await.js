//simulate s function which retrund data after some time delay

console.log('STEP1')
function getData(){
   return new Promise((resolve,reject)=>setTimeout(resolve('Hello..'),5000))
}

async function cosnumeData(){
    console.log('STEP2')
    console.log('STEP3')

    let msg
    await getData().then((data)=>msg=data).catch((err)=>console.log(err)) //while calling awaot for the data nefore executing reamining code
    console.log(msg)
    console.log('STEP 4')
console.log('END')
}
cosnumeData()