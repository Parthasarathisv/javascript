function validateEmail(email){
    let setofEmails=new Set([
        "john@gmail.com",
        "jamesh@gmail.com",
        "calra@gmail.com",
        "sith@gmail.com"
        ]);
        return new Promise((resolve,reject)=>{
            if(setofEmails.has(email)) setTimeout(resolve(true),5000);
            else setTimeout(reject(false),5000);
        });
}


// async function checkemail(){
// let validEmail=await validateEmail("johngamail.com").then((data)=>date).catch((err)=>err)
// console.log(validEmail)
// }


async function checkemail(){
    let validEmail;
    try{//resolve
        validEmail=await validateEmail("john@gmail.com");
        
    }
    catch(err){ //reject
       
        validEmail=err;
    }
    console.log(validEmail)
}

checkemail();
