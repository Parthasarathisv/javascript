console.log('START')
console.log('WELCOME')
console.log(1+3)
//1.setInterval and setTimeout are asychronous funciton
//2.it will  not block the remaining part of the code 
//3.The main thread will get executed without waiting for setInterval and setTimeOut to complete its function
const intervalId=setInterval(()=>console.log('This message will executed after 1000 ms'),1000)
console.log('MESSAGE AFTER THE SETINTERVAL')
console.log('END')
setTimeout(()=>clearInterval(intervalId),5000) // this will stop setInterval execution after 5 sec
console.log('STATEMENT AFTER THE SETTIMEPUT')