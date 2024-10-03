//Map is introduced in ES6
//Map is ES6 features-map is used to add key value pair

//key-productname value=price

let pricedetailes=new Map()
pricedetailes.set('product1',100)
pricedetailes.set('product2',200)
pricedetailes.set('product3',300)
  

export function getPrice(productname){
    return pricedetailes.get(productname)
}


