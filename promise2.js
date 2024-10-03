//simulating -map(key,value)
//key-product value-price
//implement a function which returns a promise object
//function parameter is the product name
//if product exists in the map ,resolve function returns the price the prooduct
//if the product is not exisits in the map then the reject funciton returns the error


//create a map
let productdetails=new Map()
productdetails.set("pen",1000)
productdetails.set("pencil",1100)
productdetails.set("book",100)
productdetails.set("note",10)

//function returns a promise object-producer function which produces promise object
//if product name in the map-resolve
//if the product name is  not in the map -reject

function getproductprice(productname){
    let price=productdetails.get(productname)
    return new Promise((resolve,reject)=>{
        if(price)
            resolve(price)
        else reject("product name is does not exists")
    }
    )
}


let result=getproductprice('pen')//this funciton returns a promise object. so the type of the result is "object"
result.then((data1)=>console.log(data1))//data is value returend by resolved (price)
.catch((err1)=>console.log(err1))//err is message returns by reject "productname does not exists"
