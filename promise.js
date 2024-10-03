//primose is an object an javascript
//it is used by an asynchronous function
//promise object have one call back funciton
//4 The call back fucntion has two parameters(resolve/reject)

let value=100; //simulate if data<150, then sucess else failure
let promiseobj=new Promise((resolve,reject)=>{
    if(value <150) resolve(value);//data  is sucess
    else reject("failure");//error is "failure"
}
);

//if it is resoleve ,"then" callback funciton will get execute(then is fucntion)
//if it is reject ,"catch" callback function will get executedd
//data in "then" callback is the data retured by "resolve" funciton
//err in catch cllback is the message returened by "reject" function

promiseobj
.then((data)=>console.log(data))
.catch((err)=>console.log(err))


//promiseobj then catch finally 
//then callback fuciton will get excuted ,if it is resolved
//catach callback function will get execited ., if it is rejected
//finally block will always executed.

