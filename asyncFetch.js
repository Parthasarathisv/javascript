async function getUserDetails(){
    let user=[]
   
 await fetch("https://fakestoreapi.com/users").then((response)=>response.json()).then((data)=>user=data)


 
    console.log(user)
}
getUserDetails()