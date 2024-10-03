//fetch is a asynchronous funciton its returns the promise object


console.log('START')
function fetchUserData(){
    fetch("https://fakestoreapi.com/users")//asynchronous function
    .then((response)=>{return response.json()})
    .then((data)=>console.log(data))//data -response.json() returnd by teh callback funciton-aray of objects
    .catch((err)=>console.log(err))
}
fetchUserData()

function fetchproducts(){
    fetch("https://fakestoreapi.com/products")
    .then((response)=>console.log(response.json()))
    .catch((err)=>console.log(err))
}
fetchproducts()
console.log('END')